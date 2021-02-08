import {JobProgramError} from './jobError.js';

export default class JobProgram {
  static #jobPrograms = {};

  /**
   * Register a job program.
   * @param name: Name of a job program. It should be a unique string
   * @param definition: Definition of a job program, which includes the underlying javascript class which extends the
   * super class JobProgram, the description of the job program(multi-language), and the parameters.
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
    programDefinition.class = this;
    /**
     * jobDescription has the following generic type for multi-languages.
     * generic text @type
     * {
     *   'default': 'text in default language',
     *   'EN': 'text in English',
     *   'ZH': '中文文本'
     * }
     */
    if (programDefinition.jobDescription) {
      if (typeof programDefinition.jobDescription === 'string') {
        programDefinition.jobDescription = {default: programDefinition.jobDescription};
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

  /**
   * Get a job program definition.
   * @param name
   */
  static getJobProgramDefinition(name) {
    return this.#jobPrograms[name];
  }

  /**
   * Get job programs in the system.
   */
  static getJobPrograms() {
    return this.#jobPrograms;
  }

  constructor(name, parameters) {
    this.name = name;
    this.setParameters(parameters);
  }

  /**
   * Set the parameters for the job program
   * @param parameters
   */
  setParameters(parameters) {
    this.parameters = parameters;
  }

  /**
   * Check the job parameters
   * Validate the parameters provided by the invoker
   */
  check() {

  }

  /**
   * Run the job program.
   * This method should be implemented with the main logic
   */
  async run(applicationLog) {
    console.log("start running...");
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        console.log(this.name, this.parameters);
        if (this.parameters.param1 === 'gogo2'){
          // throw new Error('error happened');
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
