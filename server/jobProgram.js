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
    /**
     * parameterDefinition @type
     *   parameterDefinitions: {
     *     GROUP1: {
     *       text?: {DEFAULT: 'text of group1'},
     *       parameters!: {
     *         PARAM1: {
     *           type?: [1: char, 2: integer, 3: boolean, 7: date, 8: timestamp],
     *           dataElement?: 'ELEMENT',
     *           radioButtons?: {
     *             option1: {DEFAULT: true, text: {DEFAULT: 'Label2'} },
     *             option2: {text: {DEFAULT: 'Label2'} }
     *           }
     *           text?: {DEFAULT: 'Label1'},
     *           multiple: true,
     *           mandatory: true,
     *           hidden: false,
     *           defaultValue: ''
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
     */
    if (!programDefinition.parameterDefinitions) {
      programDefinition.parameterDefinitions = {};
    } else {
      const paramNameIndex = [];
      for (const [groupName, groupDefinition] of Object.entries(programDefinition.parameterDefinitions)) {
        this.#deriveText(groupDefinition, 'text', groupName);
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
          this.#deriveText(paramDefinition, 'text', paramName);
          if (paramDefinition.type &&
            ![1, 2, 3, 7, 8].includes(paramDefinition.type)) {
            throw new JobProgramError('INVALID_PARAMETER_TYPE', programDefinition.type);
          }
          if (paramDefinition.radioButtons) {
            let numDefaultOption = 0;
            for (const [optionName, optionDefinition] of Object.entries(paramDefinition.radioButtons)) {
              this.#deriveText(optionDefinition, 'text', optionName);
              if (optionDefinition.DEFAULT) { numDefaultOption++ }
            }
            if (numDefaultOption !== 1) {
              throw new JobProgramError('INVALID_DEFAULT_RADIO_OPTION');
            }
          }
        }
      }
    }
    this.#jobPrograms[name] = programDefinition;
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
   */
  static checkParameters(name, parameters) {
    const jobDefinition = JobProgram.getJobProgramDefinition(name);
    if (!jobDefinition) {
      throw new JobProgramError('INVALID_JOB_PROGRAM')
    }
    const paramMap = {};
    for (const groupValue of Object.values(jobDefinition.parameterDefinitions)) {
      const parameters = groupValue.parameters;
      for (const [paramName, paramDefinition] of Object.entries(parameters)) {
        paramMap[paramName] = paramDefinition;
      }
    }
    if (typeof parameters === 'string') {
      parameters = JSON.parse(parameters);
      if (typeof parameters === 'string') {
        parameters = JSON.parse(parameters);
      }
    }
    for (const [key, value] of Object.entries(parameters)) {
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
          applicationLog.info('application log 1');
          reject(new Error('error happened'));
        } else {
          console.log('finished!');
        }
        resolve(this.name);
      }, 500);
    })
  }

}
