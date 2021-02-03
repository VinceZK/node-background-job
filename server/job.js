import {JobError} from './jobError.js';
import CronParser from 'cron-parser';
import JobOccurrence from "./jobOccurrence.js";

const StartConditionEnum = {"immediately":0, "specificTime":1, "recurrently":2, "onEvent":3 };
Object.freeze(StartConditionEnum);
const JobStatusEnum = {"initial":0, "scheduled":1, "completed":2, "canceled":3 };
Object.freeze(JobStatusEnum);

export default class Job {
  static #Jobs = [];
  static getJob(jobName) {
    return this.#Jobs.find(job => job.name === jobName);
  }
  static getJobs() {
    return this.#Jobs;
  }
  // static convertDateToCronString(date) {
  //   return `${date.getSeconds()} ${date.getMinutes()} ${date.getHours()} ${date.getDay()} ${date.getMonth()} ? ${date.getFullYear()}`;
  // }
  static checkStartEndTime(start, end, now) {
    if (start < end) {
      throw new JobError('END_DATE_BEFORE_CURRENT_DATE');
    }
    if (end < now) {
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
   *   output: {}
   * }
   * @param jobDefinition
   */
  constructor(jobDefinition) {
    let job = Job.getJob(jobDefinition.name);
    if (job) {
      throw new JobError('JOB_NAME_DUPLICATE', jobDefinition.name);
    }
    this.name = jobDefinition.name;
    this.description = jobDefinition.description;
    this.identity = jobDefinition.identity;
    this.steps = jobDefinition.steps;
    this.startCondition = jobDefinition.startCondition;
    this.outputSetting = jobDefinition.outputSetting;
    this.#parseStartCondition();
    const jobEntry = {
      name: this.name,
      status: JobStatusEnum.initial,
      startDateTime: this.startDateTime,
      endDateTime: this.endDateTime,
      finishedOccurrences: 0,
      failedOccurrences: 0,
      instance: this
    };
    Job.#Jobs.push(jobEntry);
  }

  /**
   * parse the start condition to cron-style
   * @type: startCondition: {
   *   mode: StartConditionEnum.Immediately || Specific-time || Recurrently || On-event,
   *   specificTime: Date(),
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
  #parseStartCondition() {
    let now = new Date();
    switch (this.startCondition.mode) {
      case StartConditionEnum.immediately:
        this.startDateTime = now;
        //this.startCondition.cronString = Job.convertDateToCronString(now);
        break;
      case StartConditionEnum.specificTime:
        this.startDateTime = now;
        this.endDateTime = new Date(this.startCondition.specificTime);
        if (this.endDateTime < now) {
          throw new JobError('SCHEDULED_DATE_PAST');
        }
        //this.startCondition.cronString = Job.convertDateToCronString(this.endDateTime);
        break;
      case StartConditionEnum.recurrently:
        let currentDate = new Date(this.startCondition.cronOption.currentDate);
        let endDate = new Date(this.startCondition.cronOption.endDate);
        Job.checkStartEndTime(currentDate, endDate, now);
        this.startDateTime = currentDate;
        this.endDateTime = endDate;
        break;
      case StartConditionEnum.onEvent:
        break;
      default:
      // Do nothing
    }
  }

  scheduleOccurrences(startDateTime, endDateTime) {
    this.setStatus(JobStatusEnum.scheduled);
    const jobDefinition = {
      name: this.name,
      description: this.description,
      identity: this.identity,
      steps: this.steps,
      startCondition: this.startCondition,
      outputSetting: this.outputSetting
    };
    switch (this.startCondition.mode) {
      case StartConditionEnum.immediately:
      case StartConditionEnum.specificTime:
        new JobOccurrence(jobDefinition, this.startDateTime);
        break;
      case StartConditionEnum.recurrently:
        this.#scheduleRecurrently(startDateTime, endDateTime, jobDefinition);
        break;
      case StartConditionEnum.onEvent:
        break;
      default:
        // Do nothing
    }
  }

  setStatus(status) {
    const currentJobEntry = Job.getJob(this.name);
    if (status >= currentJobEntry.status && currentJobEntry.status < JobStatusEnum.completed) {
      currentJobEntry.status = status;
    } else {
      throw new JobError('INCORRECT_JOB_STATUS_CHANGE', currentJobEntry.status, status);
    }
  }

  cancel() {

  }

  #scheduleRecurrently(startDateTime, endDateTime, jobDefinition) {
    let start = startDateTime? startDateTime : this.startDateTime;
    let end = endDateTime? endDateTime : this.endDateTime;
    Job.checkStartEndTime(start, end, Date.now());
    if (start < this.startDateTime) {
      start = this.startDateTime;
    }
    if (end > this.endDateTime) {
      end = this.endDateTime;
    }
    const maxTimeout = 2147483; // setTimeout has the max waiting time of 2147483647ms, about 2147483s
    if (end - start > maxTimeout) {
      end = end.setSeconds(start.getSeconds() + maxTimeout);
    }
    let cronOption = { ...this.startCondition.cronOption };
    cronOption.currentDate = start;
    cronOption.endDate = end;
    try {
      let interval = CronParser.parseExpression(this.startCondition.cronString, cronOption);
      while (true) {
        try {
          let occurrenceTime = interval.next();
          let lastReadyOccurrence = JobOccurrence.getLastReadyOccurrenceOfJob(this.name);
          if (occurrenceTime > lastReadyOccurrence.scheduledDateTime) {
            new JobOccurrence(jobDefinition, start);
          }
        } catch (e) {
          break;
        }
      }
    } catch (err) {
      throw new JobError('GENERIC_ERROR', err);
    }
  }

}
