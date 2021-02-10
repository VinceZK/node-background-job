import {JobStatusEnum} from "./constants.js";
import Job from "./job.js";
import {JobError} from "./jobError.js";

export default class Scheduler {
  static #timerHandler = null;
  static #intervalHrs = 24;
  static on() {
    let now = new Date();
    let end = new Date();
    end.setHours(now.getHours() + this.#intervalHrs);
    this.#scheduleJobOccurrences(now, end);
    this.timerHandler = setInterval(() => this.#scheduleJobOccurrences(), this.#intervalHrs * 3600000);
  }

  static #scheduleJobOccurrences(start, end) {
    if (!start) {
      start = new Date();
    }
    if (!end) {
      end = new Date();
      // The end is added for 1 hr buffer.
      // This is to make sure during the job scheduling, no occurrence is missing.
      // It is supposed the occurrence scheduling itself should be within 1 hour.
      end.setHours(start.getHours() + this.#intervalHrs + 1);
    }
    //TODO: Retrieve from DB for the jobs whose startDate is before end
    let jobs = Job.getJobs({status : JobStatusEnum.scheduled});
    jobs.forEach( job => job.instance.scheduleOccurrences(start, end));
  }

  static setIntervalHrs(hrs) {
    if (isNaN(hrs)) {
      throw new JobError('HOURS_IS_NOT_A_NUMBER', hrs);
    }
    const maxTimeout = 2147483; //seconds
    let intervalSeconds = hrs * 3600;
    if (intervalSeconds > maxTimeout) {
      throw new JobError('MAX_TIMEOUT', maxTimeout / 3600);
    }
    this.#intervalHrs = hrs;
  }

  static off() {
    clearInterval(this.timerHandler);
  }
}
