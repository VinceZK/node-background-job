import {JobError} from './jobError.js';
import CronParser from 'cron-parser';
import JobOccurrence from "./jobOccurrence.js";
import JobProgram from "./jobProgram.js";
import {JobStatusEnum, OccurrenceStatusEnum, StartConditionEnum} from "./constants.js";

export default class Job {
  static #Jobs = [];
  static getJob(jobName) {
    return this.#Jobs.find(job => job.name === jobName);
  }
  static getJobs(filter) {
    if (!filter) {
      return this.#Jobs;
    }
    return this.#Jobs.filter( job => {
      return (!filter.name || filter.name === job.name) &&
        (!filter.name_includes || job.name.includes(filter.name_includes)) &&
        (!filter.status || filter.status === job.status) &&
        (!filter.status_LE || filter.status <= job.status) &&
        (!filter.mode || filter.mode === job.startCondition.mode) &&
        (!filter.program || job.steps.findIndex( step => step.program === filter.program));
    });
  }
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
   *     cronOption: {currentDate: '', endDate: '', tz: ''},
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
    this.#checkDescription(jobDefinition.description);
    this.identity = jobDefinition.identity;
    this.#parseSteps(jobDefinition.steps);
    this.#parseStartCondition(jobDefinition.startCondition);
    this.outputSetting = jobDefinition.outputSetting;
    this.#cacheJob();
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
  #checkDescription(description) {
    if (description) {
      if (typeof description === 'string') {
        this.description = { default: description };
      }
    }
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
        this.startDateTime = new Date(this.startCondition.specificTime);
        if (isNaN(this.startDateTime)) {
          throw new JobError('INVALID_DATE_STRING', this.startCondition.specificTime);
        }
        if (this.startDateTime < now) {
          throw new JobError('SCHEDULED_DATE_PAST');
        }
        this.endDateTime = this.startDateTime;
        break;
      case StartConditionEnum.recurrently:
        let currentDate = null;
        let endDate = null;
        if (this.startCondition.cronOption && this.startCondition.cronOption.currentDate) {
          currentDate = new Date(this.startCondition.cronOption.currentDate);
          if (isNaN(currentDate)) {
            throw new JobError('INVALID_DATE_STRING', this.startCondition.cronOption.currentDate);
          }
        }
        if (this.startCondition.cronOption && this.startCondition.cronOption.endDate) {
          endDate = new Date(this.startCondition.cronOption.endDate);
          if (isNaN(endDate)) {
            throw new JobError('INVALID_DATE_STRING', this.startCondition.cronOption.endDate);
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
  #cacheJob() {
    this.entry = {
      name: this.name,
      status: JobStatusEnum.initial,
      identity: { ...this.identity },
      steps: [],
      startCondition: {},
      outputSetting: { ...this.outputSetting },
      finishedOccurrences: 0,
      failedOccurrences: 0,
      canceledOccurrences: 0,
      instance: this
    };
    JobOccurrence.assignSteps(this.steps, this.entry.steps);
    JobOccurrence.assignStartCondition(this.startCondition, this.entry.startCondition);
    Job.#Jobs.push(this.entry);
  }

  scheduleOccurrences(startDateTime, endDateTime) {
    this.#setStatus(JobStatusEnum.scheduled);
    switch (this.startCondition.mode) {
      case StartConditionEnum.immediately:
        new JobOccurrence(this, this.startDateTime);
        break;
      case StartConditionEnum.specificTime:
        this.#scheduleSpecificTime(endDateTime);
        break;
      case StartConditionEnum.recurrently:
        this.#scheduleRecurrently(endDateTime);
        break;
      case StartConditionEnum.onEvent:
        break;
      default:
        // Do nothing
    }
  }

  updateStatistics(occurrenceStatus, scheduledDateTime) {
    switch (occurrenceStatus) {
      case OccurrenceStatusEnum.finished:
        this.entry.finishedOccurrences++;
        break;
      case OccurrenceStatusEnum.failed:
        this.entry.failedOccurrences++;
        break;
      case OccurrenceStatusEnum.canceled:
        this.entry.canceledOccurrences++;
        break;
      default:
      // Do nothing
    }
    if (!this.hasNextOccurrence(scheduledDateTime)) {
      this.#setStatus(JobStatusEnum.completed);
      this.entry.instance = null;
    }
  }

  hasNextOccurrence(scheduledDateTime) {
    switch (this.startCondition.mode) {
      case StartConditionEnum.immediately:
      case StartConditionEnum.specificTime:
        return scheduledDateTime < this.startDateTime;
      case StartConditionEnum.recurrently:
        const cronOption = { ...this.startCondition.cronOption };
        cronOption.currentDate = scheduledDateTime;
        let interval = CronParser.parseExpression(this.startCondition.cronString, cronOption);
        return interval.hasNext();
      case StartConditionEnum.onEvent:
      default:
        return true;
    }
  }

  cancel() {
    const occurrences = JobOccurrence.getOccurrences({jobName: this.name, status: OccurrenceStatusEnum.ready});
    occurrences.forEach( occurrence => occurrence.instance.cancel());
    this.#setStatus(JobStatusEnum.canceled);
    this.entry.instance = null;
  }

  #setStatus(status) {
    if (status >= this.entry.status && this.entry.status < JobStatusEnum.completed) {
      this.entry.status = status;
    } else {
      throw new JobError('INCORRECT_JOB_STATUS_CHANGE', this.entry.status, status);
    }
  }

  /**
   * Given the timespan from now to the endDateTime,
   * check if the specific job start time is before the endDateTime
   * @param endDateTime
   */
  #scheduleSpecificTime(endDateTime) {
    if (endDateTime < this.startDateTime) {
      return;
    }
    // startDateTime should be no later than now for 2147483 seconds.
    // Because the function setTimeout(maxTimeout) has the max waiting time of 2147483647ms, about 2147483s
    if (this.startDateTime.getTime() - Date.now() <= 2147483000) {
      new JobOccurrence(this, this.startDateTime);
    }
  }
  /**
   * Schedule occurrences from a recurrence job with a given endDateTime.
   * It always starts from the last scheduled occurrence.
   * If there is no existing occurrence, then starts from the job startDateTime.
   * @param endDateTime
   */
  #scheduleRecurrently(endDateTime) {
    const cronOption = this.generateCronOption(endDateTime);
    let now = new Date();
    try {
      let interval = CronParser.parseExpression(this.startCondition.cronString, cronOption);
      while (true) {
        try {
          let occurrenceTime = interval.next();
          if ( occurrenceTime.getTime() >= now.getTime()) {
            // Start date could be in the past and the occurrences in the past are either canceled, or not run.
            // Thus these occurrences should be skipped.
            new JobOccurrence(this, occurrenceTime);
          }
        } catch (e) {
          break;
        }
      }
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
    if (lastScheduledOccurrence) { start = lastScheduledOccurrence.scheduledDateTime; }

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

    // Reassign the currentDate and endDate for the scheduling.
    let cronOption = { ...this.startCondition.cronOption };
    cronOption.currentDate = start;
    cronOption.endDate = end;
    return cronOption;
  }

}
