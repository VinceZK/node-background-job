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
   *   parameterGroups: {
   *     GROUP1: {position: 1, text: {default: 'text of group1'}},
   *     GROUP2: {position: 2, text: {default: 'text of group2'}}
   *   },
   *   parameterDefinitions: {
   *     PARAM1: {position: 1, text: {default: 'Label1'}, group: 'GROUP1', dataElement: 'FIELD1'},
   *     PARAM2: {position: 2, text: {default: 'Label2'}, group: 'GROUP2', dataElement: 'FIELD2'}
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
     *   'default': 'text in default language',
     *   'EN': 'text in English',
     *   'ZH': '中文文本'
     * }
     */
    if (programDefinition.description) {
      if (typeof programDefinition.description === 'string') {
        programDefinition.description = {default: programDefinition.description};
      }
    }
    /**
     * parameterGroups @type
     * {
     *   'GROUP1': {position: 1, text: {generic text type}},
     *   'GROUP2': {position: 2, text: {generic text type}},
     * }
     */
    if (!programDefinition.parameterGroups) {
      programDefinition.parameterGroups = {};
    } else {
      for (const group in programDefinition.parameterGroups) {
        let groupDefinition = programDefinition.parameterGroups[group];
        this.#checkPosition(groupDefinition['position'], group);
        this.#deriveText(groupDefinition, 'text', group);
      }
    }
    /**
     * parameterDefinition @type
     * {
     *   'PARAMETER1': { position: 1, text: {generic text type}, group: 'GROUP1',
     *                   mandatory: true, hidden: false, readonly: false, searchHelp: '', },
     *   'PARAMETER2': { position: 2, text: {generic text type}, group: 'GROUP2',
     *                   mandatory: true, hidden: false, readonly: false, searchHelp: '', },
     * }
     */
    if (!programDefinition.parameterDefinitions) {
      programDefinition.parameterDefinitions = {};
    } else {
      for (const parameter in programDefinition.parameterDefinitions) {
        let parameterDefinition = programDefinition.parameterDefinitions[parameter];
        this.#checkPosition(parameterDefinition['position'], parameter);
        this.#deriveText(parameterDefinition, 'text', parameter);
        if (!parameterDefinition['group']) {
          throw new JobProgramError('MISSING_GROUP_ASSIGNMENT', parameter);
        }
        if (!programDefinition.parameterGroups[parameterDefinition['group']]) {
          throw new JobProgramError( 'INVALID_GROUP',  parameter);
        }
      }
    }
    this.#jobPrograms[name] = programDefinition;
  }

  static #checkPosition(position, objectName) {
    if (!position) {
      throw new JobProgramError('MISSING_POSITION', objectName);
    } else {
      if (isNaN(position)) {
        throw new JobProgramError('POSITION_IS_NOT_NUMBER', objectName);
      }
    }
  }

  static #deriveText(object, textFieldName, defaultText) {
    if (!object[textFieldName]) {
      object[textFieldName] = defaultText;
    }
    if (typeof object[textFieldName] === 'string') {
      object[textFieldName]= {default: object[textFieldName]};
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
      if (!nameFilter || key.toUpperCase().includes(nameFilter.toUpperCase())) {
        jobPrograms.push({
          name: key,
          description: value.description
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
      throw new JobProgramError('MISSING_JOB_PROGRAM_NAME')
    }
    for (const [key, value] of Object.entries(parameters)) {
      let paramDefinition = jobDefinition.parameterDefinitions[key];
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
