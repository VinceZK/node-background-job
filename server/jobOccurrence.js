import {JobError} from './jobError.js';
import JobProgram from "./jobProgram.js";
import { v4 as uuid } from 'uuid';
import Job from "./job.js";
import {OccurrenceStatusEnum} from "./constants.js";
import ApplicationLog from "./applicationLog.js";

export default class JobOccurrence {
  static #occurrences = [];
  static getOccurrences(filter) {
    if (!filter) {
      return this.#occurrences;
    }
    return this.#occurrences.filter( occurrence => {
      return (!filter.uuid || filter.uuid === occurrence.uuid) &&
        (!filter.jobName || filter.jobName === occurrence.jobName) &&
        (!filter.status || filter.status === occurrence.status);
    });
  }
  static getLastScheduledOccurrence(jobName) {
    let lastScheduledTime = 0;
    this.#occurrences.forEach( occurrence => {
      if (occurrence.jobName === jobName) {
        if(occurrence.scheduledDateTime > lastScheduledTime) {
          lastScheduledTime = occurrence.scheduledDateTime;
        }
      }
    });
    return this.#occurrences.find( occurrence =>
      occurrence.jobName === jobName &&
      occurrence.scheduledDateTime === lastScheduledTime)
  }
  static assignSteps(source, target) {
    source.forEach( step => target.push({...step}));
  }
  static assignStartCondition(source, target) {
    for (const [key, value] of Object.entries(source)) {
      target[key] = typeof value === 'object'? JSON.parse(JSON.stringify(value)) : value;
    }
  }

  /**
   * Generate a job occurrence from a job definition and a scheduled date
   * @param job: Job
   * @param scheduledDateTime: Date()
   */
  constructor(job, scheduledDateTime) {
    this.uuid = uuid();
    this.jobName = job.name;
    this.description = { ...job.description };
    this.identity = { ...job.identity };
    this.steps = [];
    JobOccurrence.assignSteps(job.steps, this.steps);
    this.startCondition = {};
    JobOccurrence.assignStartCondition(job.startCondition, this.startCondition);
    this.outputSetting = { ...job.outputSetting };
    this.scheduledDateTime = scheduledDateTime;
    this.#cacheJobOccurrence();
    this.applicationLog = new ApplicationLog(this.uuid);
    this.originalConsole = console;
    this.timerHandler = this.#setReady();
  }

  /**
   * Cache the job occurrence so that it can be traced and monitored.
   * Once the job occurrence is finished, failed, or canceled, the instance should be recycled by GC.
   * However, some key information should be still preserved in the cache.
   * If a DB service is provided, the information in the cache is persisted.
   */
  #cacheJobOccurrence() {
    this.entry = {
      uuid: this.uuid,
      jobName: this.jobName,
      status: OccurrenceStatusEnum.initial,
      steps: [],
      startCondition: {},
      scheduledDateTime: new Date(this.scheduledDateTime),
      actualStartDateTime: 0,
      endDateTime: 0,
      applicationLog: [],
      instance: this
    };
    JobOccurrence.assignSteps(this.steps, this.entry.steps);
    JobOccurrence.assignStartCondition(this.startCondition, this.entry.startCondition);
    JobOccurrence.#occurrences.push(this.entry);
  }

  #updateStatus(status) {
    if (status > this.entry.status && this.entry.status < OccurrenceStatusEnum.finished) {
      if (status === OccurrenceStatusEnum.cancel && this.entry.status !== OccurrenceStatusEnum.ready) {
        // You can only cancel job occurrence with status 'Ready'
        throw new JobError('INCORRECT_JOB_OCCURRENCE_STATUS_CHANGE', this.entry.status, status);
      } else {
        this.entry.status = status;
      }
    } else {
      throw new JobError('INCORRECT_JOB_OCCURRENCE_STATUS_CHANGE', this.entry.status, status);
    }
    if (status === OccurrenceStatusEnum.running) {
      this.entry.actualStartDateTime = new Date();
    }
    if (status >= OccurrenceStatusEnum.finished) {
      this.entry.endDateTime = new Date();
      const job = Job.getJob(this.jobName).instance;
      job.updateStatistics(status, this.scheduledDateTime);
      this.entry.instance = null;
    }
  }

  #setReady() {
    this.#updateStatus(OccurrenceStatusEnum.ready);
    let now = Date.now();
    let then = this.scheduledDateTime.getTime();
    return setTimeout(() => {
      this.#runSteps(this.applicationLog).catch(e => {
        this.applicationLog.error(e.message);
      });
    }, (then < now? 0 : then - now));
  }

  async #runSteps(applicationLog) {
    this.#updateStatus(OccurrenceStatusEnum.running);
    if (this.outputSetting.console2ApplicationLog) {
      this.#setConsole2ApplicationLog();
    }
    for (const step of this.entry.steps) {
      step.status = OccurrenceStatusEnum.running;
      const theClass = JobProgram.getJobProgramDefinition(step.program).class;
      if (!theClass) {
        throw new JobError('JOB_PROGRAM_NOT_EXIST', step.program);
      }
      try {
        const jobProgramInstance = new theClass(step.program, step.parameters);
        step.output = await jobProgramInstance.run(applicationLog);
        step.status = OccurrenceStatusEnum.finished;
      } catch (e) {
        step.status = OccurrenceStatusEnum.failed;
        this.#updateStatus(OccurrenceStatusEnum.failed);
        throw e;
      }
    }
    this.#updateStatus(OccurrenceStatusEnum.finished);
    if (this.outputSetting.console2ApplicationLog) {
      this.#restoreConsoleFromApplicationLog();
    }
  }

  #setConsole2ApplicationLog() {
    if (console.constructor.name !== 'ApplicationLog') {
      console = this.applicationLog;
    }
  }

  #restoreConsoleFromApplicationLog() {
    if (console.constructor.name === 'ApplicationLog' &&
        console.uuid === this.uuid) {
      console = this.originalConsole;
    }
  }

  stop() {

  }

  cancel() {
    this.#updateStatus(OccurrenceStatusEnum.canceled);
    clearTimeout(this.timerHandler);
  }
}
