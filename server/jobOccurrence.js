import {JobError} from './jobError.js';
import JobProgram from "./jobProgram.js";
import { v4 as uuid } from 'uuid';
import {OccurrenceStatusEnum} from "./constants.js";
import ApplicationLog from "./applicationLog.js";
import * as jor from "json-on-relations";

export default class JobOccurrence {
  static #occurrences = [];

  /**
   * Get an occurrence from cache by UUID
   * @param uuid
   * @returns JobOccurrence
   */
  static getOccurrence(uuid) {
    const occurrences = this.#occurrences.filter(occurrence => occurrence.uuid === uuid);
    return occurrences.length > 0? occurrences[0] : null;
  }

  /**
   * Get an occurrence from DB by uuid
   * @param uuid
   * @returns JobOccurrence
   */
  static getOccurrenceDB(uuid) {
    return new Promise( (resolve, reject) => {
      jor.Entity.getInstanceByID({RELATION_ID: 'jobOccurrence', uuid: uuid}, (errs, result) => {
        if (errs) {
          reject(errs);
        } else {
          const occEntry = {
            uuid: result.jobOccurrence[0].uuid,
            status: result.jobOccurrence[0].status,
            jobName: result.jobOccurrence[0].jobName,
            scheduledDateTime: result.jobOccurrence[0].scheduledDateTime,
            actualStartDateTime: result.jobOccurrence[0].actualStartDateTime,
            endDateTime: result.jobOccurrence[0].endDateTime
          };
          if (result.r_job_identity) {
            occEntry.identity = { ...result.r_job_identity[0] };
          }
          result.r_job_occurrence_step.sort((a, b) => a.sequence - b.sequence);
          occEntry.steps = result.r_job_occurrence_step.map( step => {
            return {
              status: step.status,
              program: step.program,
              parameters: step.parameters,
              output: step.output
            }
          });
          occEntry.startCondition = { ...result.r_start_condition[0] };
          if (result.r_output_setting) {
            occEntry.outputSetting = { ...result.r_output_setting[0] };
          }
          if (result.r_application_log) {
            result.r_application_log.sort((appLog1, appLog2) => appLog1.time < appLog2.time ? -1 : 1);
            occEntry.applicationLog = result.r_application_log.map( appLog => {
              return {
                time: appLog.time,
                message: {
                  msgCat: appLog.msgCat,
                  msgName: appLog.msgName,
                  msgType: appLog.msgType,
                  msgShortText: appLog.msgShortText,
                  msgLongText: appLog.msgLongText
                }
              }
            });
          }
          resolve(occEntry);
        }
      })
    });
  }

  /**
   * Get Occurrences from cache
   * @param filter
   * @returns JobOccurrence[]
   */
  static getOccurrences(filter) {
    if (!filter) {
      return this.#occurrences;
    }
    return this.#occurrences.filter( occurrence => {
      return (!filter.jobName || filter.jobName === occurrence.jobName) &&
        (!filter.status || filter.status.includes(occurrence.status)) &&
        (!filter.startDate || filter.startDate <= occurrence.scheduledDateTime) &&
        (!filter.endDate || filter.endDate >= occurrence.scheduledDateTime) ;
    });
  }

  /**
   * Get Occurrences from DB
   * @param filter
   * @returns JobOccurrence[]
   */
  static getOccurrencesDB(filter) {
    let queryObject = {ENTITY_ID: 'jobOccurrence', RELATION_ID: 'jobOccurrence'};
    queryObject.SORT = ['scheduledDateTime'];
    queryObject.FILTER = [];
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
    if (filter && (filter.startDate || filter.endDate)) {
      queryObject.FILTER.push({
        FIELD_NAME: 'scheduledDateTime',
        OPERATOR: 'BT',
        LOW: filter.startDate || '1970-01-01 00:00:00',
        HIGH: filter.endDate || '9999-12-31 00:00:00'
      });
    }
    return new Promise((resolve, reject) => {
      jor.Query.run(queryObject, async (errs, rows) => {
        if (errs) {
          reject(errs);
        } else {
          resolve(rows.map( row => { return {
            uuid: row.uuid,
            jobName: row.jobName,
            status: row.status,
            actualStartDateTime: row.actualStartDateTime,
            endDateTime: row.endDateTime,
            scheduledDateTime: row.scheduledDateTime
          }}));
        }
      });
    });
  }

  /**
   * Get the last scheduled occurrence
   * @param jobName
   * @returns {*}
   */
  static getLastScheduledOccurrence(jobName) {
    let lastScheduledTime = 0;
    this.#occurrences.forEach( occurrence => {
      if (occurrence.jobName === jobName && occurrence.status < OccurrenceStatusEnum.canceled) {
        if(new Date(occurrence.scheduledDateTime) > new Date(lastScheduledTime)) {
          lastScheduledTime = occurrence.scheduledDateTime ;
        }
      }
    });

    return this.#occurrences.find( occurrence =>
      occurrence.jobName === jobName &&
      occurrence.scheduledDateTime === lastScheduledTime)
  }

  static assignSteps(source, target) {
    source.forEach( step => target.push({
      program: step.program,
      parameters: typeof step.parameters === 'string' ? JSON.parse(step.parameters) : step.parameters
    }));
  }

  static assignStartCondition(source, target) {
    for (const [key, value] of Object.entries(source)) {
      target[key] = value instanceof Date?
        value.toISOString().slice(0, 19).replace('T', ' ') : value;
    }
  }

  /**
   * Generate a job occurrence from a job definition and a scheduled date
   * @param job: Job
   * @param scheduledDateTime: Date()
   * @param INSTANCE_GUID: in case using DB persistence, INSTANCE_GUID should be given during recovering
   * @param occUUID: job occurrence uuid, needed for recovering
   */
  constructor(job, scheduledDateTime, INSTANCE_GUID, occUUID) {
    this.uuid = occUUID || uuid();
    this.job = job;
    this.jobName = job.name;
    this.description = { ...job.description };
    this.identity = { ...job.identity };
    this.steps = [];
    JobOccurrence.assignSteps(job.steps, this.steps);
    this.startCondition = {};
    JobOccurrence.assignStartCondition(job.startCondition, this.startCondition);
    this.outputSetting = { ...job.outputSetting };
    this.scheduledDateTime = new Date(scheduledDateTime);
    this.#cacheJobOccurrence();
    this.applicationLog = new ApplicationLog(this.uuid);
    this.originalConsole = console;
    this.INSTANCE_GUID = INSTANCE_GUID;
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
      identity: { ...this.identity },
      steps: [],
      startCondition: {},
      scheduledDateTime: this.scheduledDateTime.toISOString().slice(0, 19).replace('T', ' '),
      actualStartDateTime: 0,
      endDateTime: 0,
      outputSetting: { ...this.outputSetting },
      applicationLog: [],
      instance: this
    };
    JobOccurrence.assignSteps(this.steps, this.entry.steps);
    JobOccurrence.assignStartCondition(this.startCondition, this.entry.startCondition);
    JobOccurrence.#occurrences.push(this.entry);
  }

  /**
   * Persist the job occurrence in DB
   * @returns {Promise<unknown>}
   */
  async persistJobOccurrence() {
    const occInstance = {ENTITY_ID: 'jobOccurrence'};
    occInstance.jobOccurrence = [
      { uuid: this.entry.uuid,
        jobName: this.entry.jobName,
        status: this.entry.status,
        scheduledDateTime: this.entry.scheduledDateTime,
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
        specificTime: this.entry.startCondition.specificTime || null,
        cronString: this.entry.startCondition.cronString,
        cronCurrentDate: this.entry.startCondition.cronCurrentDate || null,
        cronEndDate: this.entry.startCondition.cronEndDate || null
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
          ENTITY_ID:'job', ROLE_ID:'background_job', INSTANCE_GUID: this.job.INSTANCE_GUID}]
        }]
    }];
    return new Promise( (resolve, reject) => {
      jor.Entity.createInstance(occInstance, (errors, result) => {
        if (errors) {
          // Remove the cached entry since the persistent is failed
          const index = JobOccurrence.#occurrences.findIndex( occ => occ.uuid === this.uuid);
          JobOccurrence.#occurrences.splice(index, 1);
          reject(errors);
        } else {
          this.INSTANCE_GUID = result.INSTANCE_GUID;
          resolve(result);
        }
      });
    });
  }

  /**
   * Update the status of an occurrence in both cache and DB
   * Meanwhile, update the statistics of the job.
   * @param status
   * @returns {Promise<void>}
   */
  async #updateStatus(status) {
    if (status > this.entry.status && this.entry.status < OccurrenceStatusEnum.finished) {
      if (status === OccurrenceStatusEnum.cancel && this.entry.status !== OccurrenceStatusEnum.ready) {
        // You can only cancel job occurrence with status 'Ready'
        throw new JobError('INCORRECT_JOB_OCCURRENCE_STATUS_CHANGE', this.entry.status, status);
      }
    } else {
      throw new JobError('INCORRECT_JOB_OCCURRENCE_STATUS_CHANGE', this.entry.status, status);
    }

    let now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    if (process.env.USE_DB === 'true') {
      await this.#updateStatusDB(status,now);
    }
    this.entry.status = status;
    if (status === OccurrenceStatusEnum.running) {
      this.entry.actualStartDateTime = now;
    }
    if (status >= OccurrenceStatusEnum.finished) {
      await this.job.updateStatistics(status, this.scheduledDateTime);
      this.entry.endDateTime = now;
      this.entry.instance = null;
    }
  }

  async #updateStatusDB(status, now) {
    const changeInstance = {
      ENTITY_ID: 'jobOccurrence', INSTANCE_GUID: this.INSTANCE_GUID,
      jobOccurrence: { action: 'update', status: status }
    };
    if (status === OccurrenceStatusEnum.running) {
      changeInstance.jobOccurrence.actualStartDateTime = now;
    }
    if (status >= OccurrenceStatusEnum.finished) {
      changeInstance.jobOccurrence.endDateTime = now;
      changeInstance.r_job_occurrence_step = this.entry.steps.map( (step, index) => {
        return { action: 'update', uuid: this.uuid, sequence: index+1, status: step.status || 0, output: step.output }
      });
      changeInstance.r_application_log = this.entry.applicationLog.map( appLog => {
        return { action: 'add', uuid: uuid(), time: appLog.time,
          msgCat: appLog.message.msgCat, msgName: appLog.message.msgName, msgType: appLog.message.msgType,
          msgShortText: appLog.message.msgShortText, msgLongText: appLog.message.msgLongText };
      })
    }
    return new Promise((resolve, reject) => {
      jor.Entity.changeInstance(changeInstance, async (errors) => {
        if (errors) {
          reject(errors);
        } else {
          resolve(0);
        }
      });
    });
  }

  /**
   * Set the occurrence status to "Ready",
   * meanwhile, call the setTimeout to schedule the occurrence.
   * @returns {Promise<number>}
   */
  async setReady() {
    await this.#updateStatus(OccurrenceStatusEnum.ready);
    let now = Date.now();
    let then = this.scheduledDateTime.getTime();
    this.timerHandler = setTimeout(() => {
      this.#runSteps(this.applicationLog).catch(e => {
        this.applicationLog.error(e.message || e);
      });
    }, (then < now? 0 : then - now));
    return this.timerHandler;
  }

  /**
   * Run the steps sequentially
   * @param applicationLog
   * @returns {Promise<void>}
   */
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
        if (typeof step.output !== 'string') {
          step.output = JSON.stringify(step.output);
        }
        step.status = OccurrenceStatusEnum.finished;
      } catch (e) {
        step.status = OccurrenceStatusEnum.failed;
        await this.#updateStatus(OccurrenceStatusEnum.failed);
        if (this.outputSetting.console2ApplicationLog) {
          this.#restoreConsoleFromApplicationLog();
        }
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

  /**
   * Cancel the occurrence
   * @returns {Promise<void>}
   */
  async cancel() {
    await this.#updateStatus(OccurrenceStatusEnum.canceled);
    if (this.timerHandler) {
      clearTimeout(this.timerHandler);
    }
  }
}
