import {JobProgramError} from './jobError.js';

export default class JobProgram {
  static #jobPrograms = {};

  /**
   * Register a job program.
   * @param name: Name of a job program. It should be a unique string
   * @param definition: Definition of a job program in JSON.
   * {
   *   className: '<javascript class which extends JobProgram>',
   *   class: <The Class of the job program>
   *   description: 'description of the job program',
   *   parameterDefinitions: {
   *     GROUP1: {
   *       text: {DEFAULT: 'text of group1'},
   *       parameters: {
   *         PARAM1: {
   *           dataElement: 'ELEMENT',
   *           text: {DEFAULT: 'Label1'},
   *           multiple: true,
   *           mandatory: true
   *         },
   *         PARAM12 {
   *           dataElement: 'ELEMENT',
   *           text: {DEFAULT: 'Label2'},
   *           multiple: true,
   *           mandatory: true
   *         },
   *       }
   *     }
   *   }
   * }
   */
  static registerJobProgram(name, definition) {
    if (!name) {
      throw new JobProgramError('MISSING_JOB_PROGRAM_NAME');
    } else {
      let programName = name.replace(/\s+/g, '');
      if(!programName) {
        throw new JobProgramError('EMPTY_JOB_PROGRAM_NAME');
      }
    }

    let programDefinition = definition;
    if (!programDefinition) {
      throw new JobProgramError('MISSING_JOB_PROGRAM_DEFINITION');
    }
    if (!programDefinition.className) {
      throw new JobProgramError('MISSING_JOB_CLASS_NAME');
    }

    /**
     * Pass the class definition of the job program.
     */
    if (!programDefinition.class) {
      programDefinition.class = this;
    } else {
      if (!this.#isJobProgramClass(programDefinition.class)) {
        throw new JobProgramError('INVALID_JOB_PROGRAM_CLASS', programDefinition.className);
      }
    }
    /**
     * jobDescription has the following generic type for multi-languages.
     * generic text @type
     * {
     *   'DEFAULT': 'text in default language',
     *   'EN': 'text in English',
     *   'ZH': '中文文本'
     * }
     */
    this.#deriveText(programDefinition, 'description', name);

    if (!programDefinition.parameterDefinitions) {
      programDefinition.parameterDefinitions = {};
    }
    this.#checkParameterDefinition(programDefinition.parameterDefinitions);
    this.#jobPrograms[name] = programDefinition;
  }
  /**
   * parameterDefinition @type
   *   parameterDefinitions: {
   *     GROUP1: {
   *       // Label text of the group, supports multiple languages
   *       text?: {DEFAULT: 'text of group1'},
   *
   *       // How is the group displayed.
   *       // Allowed values are 'block' and 'row'.
   *       displayIn?: 'block', // default 'block'
   *
   *       // Definition of the parameters
   *       parameters: {
   *         PARAM_NAME: {
   *           // The data type of the parameter
   *           // Allowed values are '1: char', '2: integer', '3: boolean', '4: decimal', '5: string', '6: binary', '7: date', '8: timestamp'
   *           type?: 1, // default 1
   *
   *           // Allowed values for the parameter.
   *           // Description of a value supports multiple languages
   *           domain?: {
   *             value1: {DEFAULT: 'Label1'},
   *             value2: '',
   *           }
   *
   *           // Regex to describe the parameter value
   *           pattern?: ''
   *
   *           // Label text of the parameter, supports multiple languages
   *           text?: {DEFAULT: 'Label1'},
   *
   *           // The default value of the parameter
   *           defaultValue?: '',
   *
   *           // How is the parameter displayed
   *           // Allowed values are 'input', 'dropdown', 'radiobutton', 'checkbox', 'text', and 'password'
   *           displayAs?: 'input',  // default 'input'
   *
   *           // If json-on-relation is used, then data element can be assigned.
   *           // However, attributes like type, domain, text, defaultValue and displayAs override the settings in the data element.
   *           dataElement?: 'ELEMENT',
   *
   *           // Control whether the parameter is mandatory
   *           mandatory: true,
   *
   *           // Control whether the parameter is readonly
   *           // Besides given a boolean value, an expression can also be provided
   *           readOnly: false,
   *
   *           // Control whether the parameter is hidden or shown.
   *           // Besides given a boolean value, an expression can also be provided
   *           hidden: false,
   *
   *           // How many columns are spanned for the parameter. The total number of columns is 12.
   *           columnSpan?: 2,  // From 1~12, default 12
   *
   *           // Whether to hide the label or not
   *           hideLabel: false
   *         }
   *       }
   *     }
   *   }
   */
  static #checkParameterDefinition(parameterDefinitions) {
    const paramNameIndex = [];
    for (const [groupName, groupDefinition] of Object.entries(parameterDefinitions)) {
      this.#deriveText(groupDefinition, 'text', groupName);

      if (groupDefinition.displayIn) {
        const allowedDisplayIn = ['block', 'row'];
        if (!allowedDisplayIn.includes(groupDefinition.displayIn)) {
          throw new JobProgramError('INVALID_DISPLAY_IN', groupDefinition.displayIn);
        }
      } else {
        groupDefinition.displayIn = 'block';
      }

      const parameters = groupDefinition.parameters;
      if (!parameters || Object.keys(parameters).length === 0) {
        throw new JobProgramError('NO_PARAMETERS_IN_GROUP', groupName)
      }
      for (const [paramName, paramDefinition] of Object.entries(parameters)) {
        let index = paramNameIndex.findIndex( name => name === paramName);
        if (index !== -1) {
          throw new JobProgramError('DUPLICATE_JOB_PARAMETERS', paramName);
        }
        paramNameIndex.push(paramName);

        if (paramDefinition.type &&
          ![1, 2, 3, 4, 5, 6, 7, 8].includes(paramDefinition.type)) {
          throw new JobProgramError('INVALID_PARAMETER_TYPE', paramDefinition.type);
        }

        if (paramDefinition.domain) {
          for (const [value, valueDescription] of Object.entries(paramDefinition.domain)) {
            if (!valueDescription) {
              paramDefinition.domain[value] = {DEFAULT: value};
            }
            if (typeof valueDescription === 'string') {
              paramDefinition.domain[value]= {DEFAULT: valueDescription};
            }
          }
        }

        this.#deriveText(paramDefinition, 'text', paramName);

        if (paramDefinition.displayAs) {
          const allowedDisplayAs = ['input', 'dropdown', 'radiobutton', 'checkbox', 'text', 'password'];
          if (!allowedDisplayAs.includes(paramDefinition.displayAs)) {
            throw new JobProgramError('INVALID_DISPLAY_AS', paramDefinition.displayAs);
          }
        } else {
          paramDefinition.displayAs = paramDefinition.domain ? 'dropdown' : 'input';
        }

        if (paramDefinition.columnSpan) {
          if (paramDefinition.columnSpan <= 0 || paramDefinition.columnSpan > 12 ) {
            throw new JobProgramError('INVALID_COLUMN_SPAN', paramDefinition.columnSpan, paramName);
          }
        }
      }
    }
  }

  static #deriveText(object, textFieldName, defaultText) {
    if (!object[textFieldName]) {
      object[textFieldName] = defaultText;
    }
    if (typeof object[textFieldName] === 'string') {
      object[textFieldName]= {DEFAULT: object[textFieldName]};
    }
  }

  static #isJobProgramClass(targetClass) {
    let baseClass = targetClass;
    if(baseClass instanceof Function) {
      while (baseClass){
        const newBaseClass = Object.getPrototypeOf(baseClass);
        if(newBaseClass && newBaseClass !== Object && newBaseClass.name){
          baseClass = newBaseClass;
        }else{
          break;
        }
      }
      return baseClass.name === 'JobProgram';
    } else {
      return false;
    }
  }

  static #checkBooleanExpression(expression) {
    if (typeof expression === 'boolean') {
      return expression;
    } else {
      return eval(expression);
    }
  }
  /**
   * Get a job program definition.
   * @param name
   */
  static getJobProgramDefinition(name) {
    return this.#jobPrograms[name];
  }

  /**
   * Get the job programs which contains the <name>.
   * @param nameFilter: string
   * @returns {{}}
   */
  static getJobPrograms(nameFilter) {
    const jobPrograms = [];
    for (const [key, value] of Object.entries(this.#jobPrograms )) {
      if (!nameFilter || key.toUpperCase().includes(nameFilter.toUpperCase()) ||
        value.description.DEFAULT.toUpperCase().includes(nameFilter.toUpperCase())) {
        jobPrograms.push({
          name: key,
          description: value.description.DEFAULT
        });
      }
    }
    return jobPrograms;
  }

  /**
   * Check the job parameters
   * Validate the parameters provided by the invoker
   * @param name: job program name
   * @param parameters: name value pairs
   */
  static checkParameters(name, parameters) {
    const jobDefinition = JobProgram.getJobProgramDefinition(name);
    if (!jobDefinition) {
      throw new JobProgramError('INVALID_JOB_PROGRAM')
    }
    const paramMap = {};
    for (const groupValue of Object.values(jobDefinition.parameterDefinitions)) {
      const paramDefinitions = groupValue.parameters;
      for (const [paramName, paramDefinition] of Object.entries(paramDefinitions)) {
        paramMap[paramName] = paramDefinition;
      }
    }

    let parametersInJSON;
    if (typeof parameters === 'string') {
      parametersInJSON = JSON.parse(parameters);
      if (typeof parametersInJSON === 'string') {
        parametersInJSON = JSON.parse(parametersInJSON);
      }
    } else {
      parametersInJSON = parameters;
    }
    for (const [key, value] of Object.entries(parametersInJSON)) {
      let paramDefinition = paramMap[key];
      if (!paramDefinition) {
        throw new JobProgramError('INVALID_PARAMETER', key);
      }
      if (paramDefinition.mandatory && !value) {
        throw new JobProgramError('MANDATORY_PARAMETER_VALUE_MISSING', key);
      }
    }
  }

  /**
   * @param name: name of the job program,
   * @param parameters:
   * {
   *   PARAM1: any,
   *   PARAM2: any
   * }
   */
  constructor(name, parameters) {
    this.name = name;
    this.parameters = parameters;
  }

  /**
   * Run the main logic of the job program.
   * This method should be re-implemented with your main logic.
   * @param applicationLog: ApplicationLog
   * @returns {Promise<unknown>}
   */
  async run(applicationLog) {
    console.log("start running...");
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        console.log(this.name, this.parameters);
        if (this.parameters.param1 === 'gogo2'){
          applicationLog.error('Error happened in application log');
          reject(new Error('Error happened in exception'));
        } else {
          applicationLog.info('Successfully finished');
          console.log('finished!');
        }
        resolve(this.name);
      }, 500);
    })
  }

}
