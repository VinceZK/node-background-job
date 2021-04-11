import {JobError} from './jobError.js';
import CronParser from 'cron-parser';
import JobOccurrence from "./jobOccurrence.js";
import JobProgram from "./jobProgram.js";
import {JobStatusEnum, OccurrenceStatusEnum, StartConditionEnum} from "./constants.js";
import * as jor from 'json-on-relations';
import { v4 as uuid } from 'uuid';

export default class Job {
  static #Jobs = [];

  /**
   * Get a job entry from the cache
   * @param jobName
   * @returns {*}
   */
  static getJob(jobName) {
    return this.#Jobs.find(job => job.name === jobName);
  }

  /**
   * Get a job entry from the DB
   * @param jobName
   * @returns {Promise<unknown>}
   */
  static async getJobDB(jobName) {
    return new Promise( (resolve, reject) => {
      jor.Entity.getInstanceByID({RELATION_ID: 'job', name: jobName}, (errs, result) => {
        if (errs) {
          reject(errs);
        } else {
          const jobEntry = {name: jobName};
          jobEntry.status = result.job[0].status;
          jobEntry.mode = result.job[0].mode;
          jobEntry.INSTANCE_GUID = result.INSTANCE_GUID;
          jobEntry.description = {};
          if (result.r_text) {
            result.r_text.forEach( text => jobEntry.description[text.langu] = text.text);
          }
          if (result.r_job_identity) {
            jobEntry.identity = { ...result.r_job_identity[0] };
          }
          jobEntry.steps = result.r_job_steps.map( step => {
            return { program: step.program, parameters: step.parameters }
          });
          jobEntry.startCondition = { ...result.r_start_condition[0] };
          if (result.r_output_setting) {
            jobEntry.outputSetting = { ...result.r_output_setting[0] };
          }
          jobEntry.finishedOccurrences = result.job[0].finishedOccurrences;
          jobEntry.failedOccurrences = result.job[0].failedOccurrences;
          jobEntry.canceledOccurrences = result.job[0].canceledOccurrences;
          jobEntry.createdBy = result.job[0].createdBy;
          jobEntry.createTime = result.job[0].createTime;
          jobEntry.lastChangedBy = result.job[0].lastChangedBy;
          jobEntry.lastChangeTime = result.job[0].lastChangeTime;
          resolve(jobEntry);
        }
      })
    });
  }

  /**
   * Change a job from a job definition
   * @param changedJobDefinition
   * @returns {Promise<*>}
   */
  static async changeJob(changedJobDefinition) {
    const oldJobIndex = this.#Jobs.findIndex( job => job.name === changedJobDefinition.name);
    if (oldJobIndex === -1) {
      throw new JobError('JOB_NOT_EXIST');
    }
    const oldJobEntry = this.#Jobs[oldJobIndex];
    if (oldJobEntry.status === JobStatusEnum.completed ) {
      throw new JobError('JOB_CANNOT_BE_CHANGED', oldJobEntry.status);
    }
    const oldJobGUID = oldJobEntry.instance.INSTANCE_GUID;
    if (oldJobEntry.status === JobStatusEnum.scheduled) {
      changedJobDefinition.status = JobStatusEnum.scheduled;
      await oldJobEntry.instance.cancel();
      changedJobDefinition.finishedOccurrences = oldJobEntry.finishedOccurrences;
      changedJobDefinition.failedOccurrences = oldJobEntry.failedOccurrences;
      changedJobDefinition.canceledOccurrences = oldJobEntry.canceledOccurrences;
    }

    this.#Jobs.splice(oldJobIndex, 1); // Delete the old job entry
    changedJobDefinition.createTime = oldJobEntry.createTime;
    changedJobDefinition.createdBy = oldJobEntry.createdBy;
    const newJob = new Job(changedJobDefinition);
    newJob.INSTANCE_GUID = oldJobGUID;

    if (process.env.USE_DB !== 'true') {
      return changedJobDefinition;
    }
    try {
      await newJob.changeJobDB();
      if (oldJobEntry.status === JobStatusEnum.completed) {
        await newJob.scheduleOccurrences();
      }
      return changedJobDefinition;
    } catch (errors) {
      const newJobIndex = this.#Jobs.findIndex( job => job.name === changedJobDefinition.name);
      this.#Jobs.splice(newJobIndex, 1); // Delete the new job entry
      this.#Jobs.push(oldJobEntry); // Restore the old job entry
      throw errors ;
    }
  }

  /**
   * Get jobs from the cache
   * @param filter
   * @returns {[]|*[]}
   */
  static getJobs(filter) {
    if (!filter) {
      return this.#Jobs;
    }
    return this.#Jobs.filter( job => {
      return (!filter.name || filter.name === job.name) &&
        (!filter.name_includes || job.name.toUpperCase().includes(filter.name_includes.toUpperCase())) &&
        (!filter.status || filter.status.includes(job.status)) &&
        (!filter.mode || filter.mode.includes(job.startCondition.mode)) &&
        (!filter.program || job.steps.findIndex( step => step.program === filter.program));
    });
  }

  /**
   * Get jobs from the DB
   * @returns {Promise<void>}
   */
  static async getJobsDB(filter) {
    let queryObject = {ENTITY_ID: 'job', RELATION_ID: 'job', DISTINCT: true};
    queryObject.PROJECTION = [
      'name', 'status', 'mode', 'finishedOccurrences', 'failedOccurrences', 'canceledOccurrences',
      {FIELD_NAME: 'text', RELATION_ID: 'r_text'}
    ];
    queryObject.FILTER = [{
      FIELD_NAME: 'langu',
      RELATION_ID: 'r_text',
      OPERATOR: 'EQ',
      LOW: 'DEFAULT'
    }];
    if (filter && filter.name_includes) {
      queryObject.FILTER.push({
        FIELD_NAME: 'name',
        OPERATOR: 'CN',
        LOW: filter.name_includes
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
    if (filter && filter.mode) {
      filter.mode.forEach( mode => {
        queryObject.FILTER.push({
          FIELD_NAME: 'mode',
          OPERATOR: 'EQ',
          LOW: mode
        });
      });
    }
    if (filter && filter.program) {
      queryObject.FILTER.push({
        FIELD_NAME: 'program',
        RELATION_ID: 'r_job_steps',
        OPERATOR: 'EQ',
        LOW: filter.program
      });
    }
    return new Promise((resolve, reject) => {
      jor.Query.run(queryObject, async (errs, rows) => {
        if (errs) {
          reject(errs);
        } else {
          rows.forEach( row => {
            row.description = {DEFAULT: row.text};
            delete row.text;
          });
          resolve(rows);
        }
      });
    });
  }

  /**
   * Check the given timespan from start to end
   * @param start
   * @param end
   * @param now
   */
  static checkStartEndTime(start, end, now) {
    if (start && end && start >= end) {
      throw new JobError('END_DATE_BEFORE_CURRENT_DATE');
    }
    if (end && end < now) {
      throw new JobError('TIMESPAN_IS_PAST')
    }
  }
  /**
   * Job has the definition type like below
   * @type: {
   *   name: 'a unique job name',
   *   description: 'job description <multi-languages>',
   *   identity: {},
   *   steps: [
   *     {program: 'jobProgram1', parameters: {}},
   *     {program: 'jobProgram2', parameters: {}}
   *   ],
   *   startCondition: {
   *     mode: StartConditionEnum.Immediately || Specific-time || Recurrently || On-event,
   *     specificTime: Date(),
   *     cronString: '<cron-style string>',
   *     cronCurrentDate: Date(),
   *     cronEndDate: Date(),
   *     tz: string,
   *     onEvent: {eventEmitter: object, event: 'eventName' }
   *   },
   *   outputSetting: {
   *     console2ApplicationLog: true,
   *   }
   * }
   * @param jobDefinition
   */
  constructor(jobDefinition) {
    this.#checkJobName(jobDefinition.name);
    this.INSTANCE_GUID = jobDefinition.INSTANCE_GUID || null;
    this.identity = jobDefinition.identity;
    this.#parseSteps(jobDefinition.steps);
    this.#parseStartCondition(jobDefinition.startCondition);
    this.outputSetting = jobDefinition.outputSetting;
    this.#cacheJob(jobDefinition);
  }

  #checkJobName(jobName) {
    if(!jobName) {
      throw new JobError('MISSING_JOB_NAME');
    }
    if (Job.getJob(jobName)) {
      throw new JobError('JOB_NAME_DUPLICATE', jobName);
    }
    this.name = jobName;
  }
  #deriveDescription(description) {
    if (!description) {
      return null;
    }
    return typeof description === 'string'? { DEFAULT: description } : description;
  }

  /**
   * Parse the steps
   * @param steps:
   * program: 'jobProgram1', parameters: {}}
   * of
   * [
   *   {program: 'jobProgram1', parameters: {}},
   *   {program: 'jobProgram2', parameters: {}}
   * ],
   */
  #parseSteps(steps) {
    this.steps = steps;
    if (!Array.isArray(steps)) {
      this.steps = [];
      this.steps.push(steps);
    }
    this.steps.forEach( step => {
      if (!step.program) {
        throw new JobError('MISSING_JOB_PROGRAM');
      }
      if (!JobProgram.getJobProgramDefinition(step.program)) {
        throw new JobError('INVALID_JOB_PROGRAM', step.program);
      }
      if (step.parameters) {
        JobProgram.checkParameters(step.program, step.parameters);
      }
    })
  }

  /**
   * Parse the start condition
   * @type: startCondition: {
   *   mode: StartConditionEnum.Immediately || Specific-time || Recurrently || On-event,
   *   specificTime: Date().toString(),
   *   cronString: '<cron-style string>',
   *   cronOption: {currentDate: '', endDate: '', tz: 'UTC+8'},
   *   onEvent: {eventEmitter: object, event: 'eventName' }
   * },
   * cron format:
   * *    *    *    *    *    *    *
   * ┬    ┬    ┬    ┬    ┬    ┬    ┬
   * │    │    │    │    │    |    └  year(optional)
   * │    │    │    │    │    └─────  day of week (0 - 7) (0 or 7 is Sun)
   * │    │    │    │    └──────────  month (1 - 12)
   * │    │    │    └───────────────  day of month (1 - 31)
   * │    │    └────────────────────  hour (0 - 23)
   * │    └─────────────────────────  minute (0 - 59)
   * └──────────────────────────────  second (0 - 59, optional)
  */
  #parseStartCondition(startCondition) {
    if(!startCondition) {
      throw new JobError('MISSING_JOB_START_CONDITION');
    }
    this.startCondition = startCondition;
    if (this.startCondition.mode === null ||
        this.startCondition.mode === undefined) {
      throw new JobError('MISSING_JOB_MODE');
    }
    let now = new Date();
    switch (this.startCondition.mode) {
      case StartConditionEnum.immediately:
        this.startDateTime = now;
        this.endDateTime = now;
        break;
      case StartConditionEnum.specificTime:
        if (!this.startCondition.specificTime) {
          throw new JobError('MISSING_SPECIFIC_TIME');
        }
        this.startDateTime = this.startCondition.specificTime instanceof Date ?
          this.startCondition.specificTime : new Date(this.startCondition.specificTime + ' UTC');
        if (isNaN(this.startDateTime)) {
          throw new JobError('INVALID_DATE_STRING', this.startCondition.specificTime);
        }
        if (this.startDateTime < now) {
          throw new JobError('SCHEDULED_DATE_PAST');
        }
        this.endDateTime = this.startDateTime;
        this.startCondition.specificTime = this.startDateTime;
        break;
      case StartConditionEnum.recurrently:
        let currentDate = null;
        let endDate = null;
        if (this.startCondition.cronCurrentDate) {
          currentDate = this.startCondition.cronCurrentDate instanceof Date ?
            this.startCondition.cronCurrentDate : new Date(this.startCondition.cronCurrentDate + ' UTC');
          if (isNaN(currentDate.getTime())) {
            throw new JobError('INVALID_DATE_STRING', this.startCondition.cronCurrentDate);
          }
        }
        if (this.startCondition.cronEndDate) {
          endDate = this.startCondition.cronEndDate instanceof Date ?
            this.startCondition.cronEndDate: new Date(this.startCondition.cronEndDate + ' UTC');
          if (isNaN(endDate.getTime())) {
            throw new JobError('INVALID_DATE_STRING', this.startCondition.cronEndDate);
          }
        }
        Job.checkStartEndTime(currentDate, endDate, now);
        this.startDateTime = (!currentDate || currentDate < now)? now: currentDate;
        this.endDateTime = endDate;
        break;
      case StartConditionEnum.onEvent:
        break;
      default:
        throw new JobError('UNSUPPORTED_JOB_MODE');
    }
  }

  /**
   * Cache the job so that it can be traced and monitored.
   * Once the job is finished or canceled, the instance should be recycled by GC.
   * However, some key information should be still preserved in the cache.
   * If a DB service is provided, the information in the cache is persisted.
   */
  #cacheJob(jobDefinition) {
    let now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    this.entry = {
      name: this.name,
      description: this.#deriveDescription(jobDefinition.description),
      status: jobDefinition.status || JobStatusEnum.initial,
      identity: { ...this.identity },
      steps: [],
      startCondition: {},
      outputSetting: { ...this.outputSetting },
      finishedOccurrences: jobDefinition.finishedOccurrences || 0,
      failedOccurrences: jobDefinition.failedOccurrences || 0,
      canceledOccurrences: jobDefinition.canceledOccurrences || 0,
      createdBy: jobDefinition.createdBy || 'DH001',
      createTime: jobDefinition.createTime || now,
      lastChangedBy: jobDefinition.lastChangedBy || 'DH001',
      lastChangeTime: jobDefinition.lastChangeTime || now,
      instance: this
    };
    JobOccurrence.assignSteps(this.steps, this.entry.steps);
    JobOccurrence.assignStartCondition(this.startCondition, this.entry.startCondition);
    Job.#Jobs.push(this.entry);
  }

  /**
   * Persist a new job in DB.
   * @returns {Promise<unknown>}
   */
  async createJobDB() {
    return new Promise( (resolve, reject) => {
      jor.Entity.createInstance(this.#convert2JorInstance(),  (errors, results) => {
        if (errors) {
          // Remove the cached entry in case persistent failed
          const index = Job.#Jobs.findIndex( job => job.name === this.name);
          Job.#Jobs.splice(index, 1);
          reject(errors);
        } else {
          this.INSTANCE_GUID = results.INSTANCE_GUID;
          resolve(results);
        }
      });
    });
  }

  /**
   * Change a job in DB
   * @returns {Promise<unknown>}
   */
  async changeJobDB() {
    return new Promise( (resolve, reject) => {
      jor.Entity.overwriteInstance(this.#convert2JorInstance(),  (errors) => {
        if (errors) {
          reject(errors);
        } else {
          resolve(0);
        }
      });
    });
  }

  #convert2JorInstance() {
    const jobInstance = {ENTITY_ID: 'job'};
    if (this.INSTANCE_GUID) {
      jobInstance.INSTANCE_GUID = this.INSTANCE_GUID;
    }
    jobInstance.job = [
      { name: this.entry.name, status: this.entry.status,
        finishedOccurrences: this.entry.finishedOccurrences,
        failedOccurrences: this.entry.failedOccurrences,
        canceledOccurrences: this.entry.canceledOccurrences,
        mode: this.entry.startCondition.mode,
        createdBy: this.entry.createdBy,
        createTime: this.entry.createTime,
        lastChangedBy: this.entry.lastChangedBy,
        lastChangeTime: this.entry.lastChangeTime,
        jobServer: process.env.JOB_SERVER, jobNode: process.pid }
    ];
    if (this.entry.description) {
      jobInstance.r_text = Object.keys(this.entry.description).map( languCode => {
        return { key: uuid(), langu: languCode, text: this.entry.description[languCode]}
      });
    }
    if (this.identity) {
      jobInstance.r_job_identity = [{...this.identity}];
      jobInstance.r_job_identity[0].key = uuid();
    }
    jobInstance.r_job_steps = this.entry.steps.map( (step, index) => {
      return { jobName: this.name, sequence: index+1, program: step.program, parameters: JSON.stringify(step.parameters) }
    });
    jobInstance.r_start_condition = [
      { key: uuid(), mode: this.entry.startCondition.mode,
        specificTime: this.entry.startCondition.specificTime || null,
        cronString: this.entry.startCondition.cronString,
        cronCurrentDate: this.entry.startCondition.cronCurrentDate || null,
        cronEndDate: this.entry.startCondition.cronEndDate || null
      }
    ];
    if (this.entry.startCondition.tz) { // null is not in the data domain of timezone
      jobInstance.r_start_condition[0].tz = this.entry.startCondition.tz
    }
    if (this.outputSetting) {
      jobInstance.r_output_setting = [{ ...this.outputSetting }];
      jobInstance.r_output_setting[0].key = uuid();
    }
    return jobInstance;
  }

  /**
   * Schedule the occurrence(s), which will:
   * 1. set the status to Ready;
   * 2. generate the occurrence(s) from now to the given endDateTime
   * @param endDateTime
   * @returns {Promise<{jobName: string, numOcc: number}>}
   */
  async scheduleOccurrences(endDateTime) {
    await this.#setStatus(JobStatusEnum.scheduled);
    let numOcc = 0;
    switch (this.startCondition.mode) {
      case StartConditionEnum.immediately:
        this.startDateTime = this.endDateTime = new Date();
        const jobOcc = new JobOccurrence(this, this.startDateTime);
        if(process.env.USE_DB === 'true') {
          await jobOcc.persistJobOccurrence();
        }
        await jobOcc.setReady();
        numOcc = 1;
        break;
      case StartConditionEnum.specificTime:
        await this.#scheduleSpecificTime(endDateTime);
        numOcc = 1;
        break;
      case StartConditionEnum.recurrently:
        numOcc = await this.#scheduleRecurrently(endDateTime);
        break;
      case StartConditionEnum.onEvent:
        break;
      default:
        // Do nothing
    }
    return {
      jobName: this.name,
      numOcc: numOcc
    };
  }

  /**
   * Update the statistics of the job after the occurrence is scheduled and running.
   * @param occurrenceStatus: the current occurrence's status
   * @param scheduledDateTime: after the datetime, check whether there is next occurrence(s)
   * @returns {Promise<void>}
   */
  async updateStatistics(occurrenceStatus, scheduledDateTime) {
    if (process.env.USE_DB === 'true') {
      await this.#updateStatisticsDB(occurrenceStatus);
    }
    this.#setOccurrenceStatistics(occurrenceStatus, this.entry);
    if (!this.hasNextOccurrence(scheduledDateTime)) {
      await this.#setStatus(JobStatusEnum.completed);
      this.entry.instance = null;
    }
  }

  /**
   * Update the job statistics in DB
   * @param occurrenceStatus
   * @returns {Promise<unknown>}
   */
  async #updateStatisticsDB(occurrenceStatus) {
    const changeInstance = {
      ENTITY_ID: 'job', INSTANCE_GUID: this.INSTANCE_GUID,
      job: {
        action: 'update',
        finishedOccurrences: this.entry.finishedOccurrences,
        failedOccurrences: this.entry.failedOccurrences,
        canceledOccurrences: this.entry.canceledOccurrences}
    };
    this.#setOccurrenceStatistics(occurrenceStatus, changeInstance.job);
    return new Promise( (resolve, reject) => {
      jor.Entity.changeInstance(changeInstance, (errors) => {
        if (errors) {
          reject(errors);
        } else {
          resolve(0);
        }
      });
    });
  }

  #setOccurrenceStatistics(occurrenceStatus, entry) {
    switch (occurrenceStatus) {
      case OccurrenceStatusEnum.finished:
        entry.finishedOccurrences++;
        break;
      case OccurrenceStatusEnum.failed:
        entry.failedOccurrences++;
        break;
      case OccurrenceStatusEnum.canceled:
        entry.canceledOccurrences++;
        break;
      default:
      // Do nothing
    }
  }

  /**
   * Check whether there is a next occurrence after the given scheduled datetime
   * @param scheduledDateTime
   * @returns {boolean}
   */
  hasNextOccurrence(scheduledDateTime) {
    switch (this.startCondition.mode) {
      case StartConditionEnum.immediately:
      case StartConditionEnum.specificTime:
        return scheduledDateTime < this.startDateTime;
      case StartConditionEnum.recurrently:
        const cronOption = {
          currentDate: scheduledDateTime,
          endDate: this.startCondition.cronEndDate,
          tz: this.startCondition.tz
        };
        let interval = CronParser.parseExpression(this.startCondition.cronString, cronOption);
        return interval.hasNext();
      case StartConditionEnum.onEvent:
      default:
        return true;
    }
  }

  /**
   * Cancel all the scheduled occurrences and then set the job to complete
   * @returns {Promise<void>}
   */
  async cancel() {
    const occurrences = JobOccurrence.getOccurrences({
      jobName: this.name,
      status: [OccurrenceStatusEnum.initial, OccurrenceStatusEnum.ready]});
    for (const occurrence of occurrences) {
      await occurrence.instance.cancel();
    }
    await this.#setStatus(JobStatusEnum.completed);
    this.entry.instance = null;
  }

  /**
   * Set the job status in both Cache and DB
   * @param status
   * @returns {Promise<void>}
   */
  async #setStatus(status) {
    if (status >= this.entry.status) {
      if (process.env.USE_DB === 'true') {
        await this.#setStatusDB(status);
      }
      this.entry.status = status;
    } else {
      throw new JobError('INCORRECT_JOB_STATUS_CHANGE', this.entry.status, status);
    }
  }

  /**
   * Set the job status in DB
   * @param status
   * @returns {Promise<void>}
   */
  async #setStatusDB(status) {
    const changeInstance = {
      ENTITY_ID: 'job', INSTANCE_GUID: this.INSTANCE_GUID,
      job: {action: 'update', status: status}
    };
    return new Promise( (resolve, reject) => {
      jor.Entity.changeInstance(changeInstance, (errors) => {
        if (errors) {
          reject(errors);
        } else {
          resolve(0);
        }
      });
    });
  }

  /**
   * Given the endDateTime, schedule the job at the specific time, which should be before the endDateTime
   * @param endDateTime
   */
  async #scheduleSpecificTime(endDateTime) {
    if (endDateTime < this.startDateTime) {
      return;
    }
    // startDateTime should be no later than now for 2147483 seconds.
    // Because the function setTimeout(maxTimeout) has the max waiting time of 2147483647ms, about 2147483s
    if (this.startDateTime.getTime() - Date.now() <= 2147483000) {
      const jobOcc = new JobOccurrence(this, this.startDateTime);
      if (process.env.USE_DB === 'true') {
        await jobOcc.persistJobOccurrence();
      }
      await jobOcc.setReady();
    }
  }

  /**
   * Schedule occurrences from a recurrence job with a given endDateTime.
   * It always starts from the last scheduled occurrence.
   * If there is no existing occurrence, then starts from the job startDateTime.
   * @param endDateTime
   */
  async #scheduleRecurrently(endDateTime) {
    const cronOption = this.generateCronOption(endDateTime);
    let now = new Date();
    let numOcc = 0;
    try {
      let interval = CronParser.parseExpression(this.startCondition.cronString, cronOption);
      while (true) {
        try {
          let occurrenceTime = interval.next();
          if ( occurrenceTime.getTime() >= now.getTime()) {
            // Start date could be in the past and the occurrences in the past are either canceled, or not run.
            // Thus these occurrences should be skipped.
            const jobOcc = new JobOccurrence(this, occurrenceTime);
            if (process.env.USE_DB === 'true') {
              await jobOcc.persistJobOccurrence();
            }
            await jobOcc.setReady();
            numOcc++;
          }
        } catch (e) {
          break;
        }
      }
      return (numOcc);
    } catch (err) {
      throw new JobError('GENERIC_ERROR', err);
    }
  }

  /**
   * Generate the occurrence timespan and converted to cronOption.
   * 2 conditions must be met:
   * 1. The startDateTime should be the last scheduled datetime. If not, then the job start datetime.
   * 2. The endDateTime should be no larger than 2147483 seconds from the current(Date.now).
   * @param endDateTime
   */
  generateCronOption(endDateTime) {
    // The start time should always be job's startDateTime
    let start = this.startDateTime;
    let now = new Date();
    // if there is already occurrence scheduled, then starts from the last scheduled occurrence.
    // Even the last occurrence is canceled, we won't re-schedule it.
    // Only to find the next occurrence of the last scheduled one.
    let lastScheduledOccurrence = JobOccurrence.getLastScheduledOccurrence(this.name);
    if (lastScheduledOccurrence) { start = new Date(lastScheduledOccurrence.scheduledDateTime + ' UTC');}
    let end = endDateTime? endDateTime : this.endDateTime;
    if (this.endDateTime && end > this.endDateTime) {
      end = this.endDateTime;
    }
    // endDateTime should be no later than now for 2147483 seconds.
    // Because the function setTimeout(maxTimeout) has the max waiting time of 2147483647ms, about 2147483s
    const maxTimeout = 2147483;
    if (!end) { // endless
      end = new Date();
      end.setSeconds(now.getSeconds() + maxTimeout);
    } else if (end.getTime() - now.getTime() > maxTimeout * 1000) {
      end = new Date();
      end.setSeconds(now.getSeconds() + maxTimeout);
    }

    Job.checkStartEndTime(start, end, now);

    return {
      currentDate: start,
      endDate: end,
      tz: this.startCondition.tz || 'UTC'
    }
  }
}
