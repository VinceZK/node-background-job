import {JobError} from './jobError.js';
import JobProgram from "./jobProgram.js";
import { v4 as uuid } from 'uuid';
import Job from "./job.js";
import {OccurrenceStatusEnum} from "./constants.js";
import ApplicationLog from "./applicationLog.js";
import * as jor from "json-on-relations";

export default class JobOccurrence {
  static #occurrences = [];
  static getOccurrences(filter) {
    if (!filter) {
      return this.#occurrences;
    }
    return this.#occurrences.filter( occurrence => {
      return (!filter.uuid || filter.uuid === occurrence.uuid) &&
        (!filter.jobName || filter.jobName === occurrence.jobName) &&
        (!filter.status || filter.status.includes(occurrence.status));
    });
  }
  static getOccurrencesDB(filter) {
    let queryObject = {ENTITY_ID: 'jobOccurrence', RELATION_ID: 'jobOccurrence'};
    queryObject.PROJECTION = [
      'uuid', 'jobName', 'scheduledDateTime', 'actualStartDateTime', 'endDateTime'
    ];
    queryObject.FILTER = [];
    if (filter && filter.uuid) {
      queryObject.FILTER.push({
        FIELD_NAME: 'uuid',
        OPERATOR: 'EQ',
        LOW: filter.uuid
      });
    }
    if (filter && filter.jobName) {
      queryObject.FILTER.push({
        FIELD_NAME: 'jobName',
        OPERATOR: 'EQ',
        LOW: filter.jobName
      });
    }
    if (filter && filter.status) {
      filter.status.forEach( status => {
        queryObject.FILTER.push({
          FIELD_NAME: 'status',
          OPERATOR: 'EQ',
          LOW: status
        });
      });
    }
    return new Promise((resolve, reject) => {
      jor.Query.run(queryObject, async (errs, rows) => {
        if (errs) {
          reject(errs);
        } else {
          resolve(rows);
        }
      });
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

  async persistJobOccurrence() {
    const occInstance = {ENTITY_ID: 'jobOccurrence'};
    occInstance.jobOccurrence = [
      { jobName: this.entry.jobName, status: this.entry.status,
        scheduledDateTime: this.entry.scheduledDateTime.toISOString().slice(0, 19).replace('T', ' '),
        actualStartDateTime: null,
        endDateTime: null
      }];
    if (this.identity) {
      occInstance.r_job_identity = [{...this.identity}];
      occInstance.r_job_identity[0].key = uuid();
    }
    occInstance.r_job_occurrence_step = this.entry.steps.map( (step, index) => {
      return { uuid: this.entry.uuid, sequence: index+1, program: step.program,
        parameters: JSON.stringify(step.parameters), status: OccurrenceStatusEnum.initial, output:null }
    });
    occInstance.r_start_condition = [
      { key: uuid(), mode: this.entry.startCondition.mode,
        specificTime: this.entry.startCondition.specificTime
          ? this.entry.startCondition.specificTime.slice(0, 19).replace('T', ' ')
          : null,
        cronString: this.entry.startCondition.cronString,
        cronCurrentDate: this.entry.startCondition.cronCurrentDate
          ? this.entry.startCondition.cronCurrentDate.slice(0, 19).replace('T', ' ')
          : null,
        cronEndDate: this.entry.startCondition.cronEndDate
          ? this.entry.startCondition.cronEndDate.slice(0, 19).replace('T', ' ')
          : null
      }
    ];
    if (this.entry.startCondition.tz) { // null is not in the data domain of timezone
      occInstance.r_start_condition[0].tz = this.entry.startCondition.tz
    }
    if (this.outputSetting) {
      occInstance.r_output_setting = [{ ...this.outputSetting }];
      occInstance.r_output_setting[0].key = uuid();
    }
    occInstance.relationships =  [{
      RELATIONSHIP_ID: 'rs_job_occurrence',
      values:[
        { action: 'add', scheduledDateTime: occInstance.jobOccurrence[0].scheduledDateTime,
          PARTNER_INSTANCES: [{
          ENTITY_ID:'job', ROLE_ID:'background_job', INSTANCE_GUID: Job.getJob(this.jobName).instance.INSTANCE_GUID}]
        }]
    }];
    return new Promise( (resolve, reject) => {
      jor.Entity.createInstance(occInstance, (errors, results) => {
        if (errors) {
          // Remove the cached entry since the persistent is failed
          const index = JobOccurrence.#occurrences.findIndex( occ => occ.uuid === this.uuid);
          JobOccurrence.#occurrences.splice(index, 1);
          reject(errors);
        } else {
          this.INSTANCE_GUID = results.INSTANCE_GUID;
          resolve(results);
        }
      });
    });
  }

  async #updateStatus(status) {
    if (status > this.entry.status && this.entry.status < OccurrenceStatusEnum.finished) {
      if (status === OccurrenceStatusEnum.cancel && this.entry.status !== OccurrenceStatusEnum.ready) {
        // You can only cancel job occurrence with status 'Ready'
        throw new JobError('INCORRECT_JOB_OCCURRENCE_STATUS_CHANGE', this.entry.status, status);
      }
    } else {
      throw new JobError('INCORRECT_JOB_OCCURRENCE_STATUS_CHANGE', this.entry.status, status);
    }

    let now = new Date();
    if (process.env.USE_DB === 'true') {
      let changeInstance = {
        ENTITY_ID: 'jobOccurrence', INSTANCE_GUID: this.INSTANCE_GUID,
        job: { action: 'change', status: status }
      };
      if (status === OccurrenceStatusEnum.running) {
        changeInstance.job.actualStartDateTime = now.toISOString().slice(0, 19).replace('T', ' ');
      }
      if (status >= OccurrenceStatusEnum.finished) {
        changeInstance.job.endDateTime = now.toISOString().slice(0, 19).replace('T', ' ');
      }
      return new Promise((resolve, reject) => {
        jor.Entity.changeInstance(changeInstance, async (errors) => {
          if (errors) { reject(errors); }
          else {
            await this.#updateStatusInCache(status, now);
            resolve(0);
          }
        });
      });
    } else {
      this.#updateStatusInCache(status, now);
    }
  }

  async #updateStatusInCache(status, now) {
    this.entry.status = status;
    if (status === OccurrenceStatusEnum.running) {
      this.entry.actualStartDateTime = now;
    }
    if (status >= OccurrenceStatusEnum.finished) {
      const job = Job.getJob(this.jobName).instance;
      await job.updateStatistics(status, this.scheduledDateTime);
      this.entry.endDateTime = now;
      this.entry.instance = null;
    }
  }

  async #setReady() {
    await this.#updateStatus(OccurrenceStatusEnum.ready);
    let now = Date.now();
    let then = this.scheduledDateTime.getTime();
    return setTimeout(() => {
      this.#runSteps(this.applicationLog).catch(e => {
        this.applicationLog.error(e.message);
      });
    }, (then < now? 0 : then - now));
  }

  async #runSteps(applicationLog) {
    await this.#updateStatus(OccurrenceStatusEnum.running);
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
        await this.#updateStatus(OccurrenceStatusEnum.failed);
        throw e;
      }
    }
    await this.#updateStatus(OccurrenceStatusEnum.finished);
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

  async cancel() {
    await this.#updateStatus(OccurrenceStatusEnum.canceled);
    clearTimeout(await this.timerHandler);
  }
}
