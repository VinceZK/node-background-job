import {JobStatusEnum} from "./constants.js";
import Job from "./job.js";
import JobOccurrence from "./jobOccurrence.js";
import {JobError} from "./jobError.js";
import {EntityDB} from 'json-on-relations';

export default class Scheduler {
  static #timerHandler = null;
  static #intervalHrs = 24;
  static previousPIDs = [];

  static async getPreviousPIDs() {
    const selectSQL = 'select distinct jobNode from job where jobServer = ' + EntityDB.pool.escape(process.env.JOB_SERVER);
    return new Promise((resolve, reject) => {
      EntityDB.executeSQL(selectSQL, (errors, results)=> {
        if (errors) {
          reject(errors);
        } else {
          this.previousPIDs = results.map( data => data.jobNode );
          resolve( this.previousPIDs.length );
        }
      })
    });
  }

  static async on() {
    await this.#recoverActiveJobs();
    let now = new Date();
    let end = new Date();
    end.setHours(now.getHours() + this.#intervalHrs);
    // The persisted occurrences may already missed. For example, restarting the server after the '#intervalHrs'.
    // Thus we still need to schedule for the span from now to the end.
    // The occurrences in the overlap span won't be rescheduled.
    this.#scheduleJobOccurrences(now, end);
    this.timerHandler = setInterval(() => this.#scheduleJobOccurrences(), this.#intervalHrs * 3600000);
  }

  static async #recoverActiveJobs() {
    console.log(`(node:${process.pid}) Recovering jobs and their occurrences...`);
    await this.#updateJobPID();
    const activeJobs = await this.#getActiveJobNames();
    // TODO: Cancel those jobs(and their occurrences) that missed their schedule time
    for (const activeJob of activeJobs) {
      console.log(`(node:${process.pid}) Recovering Job ${activeJob.name} and its occurrences.`);
      try {
        const jobDefinition = await Job.getJobDB(activeJob.name);
        const job = new Job(jobDefinition);
        if (activeJob.status === JobStatusEnum.scheduled) {
          const jobOccurrences = await this.#getActiveJobOccurrence(activeJob.name);
          for (const jobOccurrence of jobOccurrences) {
            const jobOcc = new JobOccurrence(job, jobOccurrence.scheduledDateTime, jobOccurrence.INSTANCE_GUID);
            await jobOcc.setReady();
          }
        }
        console.info(`(node:${process.pid}) Job ${activeJob.name} is recovered.`);
      } catch (error) {
        console.error(`(node:${process.pid})`, error.message || error);
      }
    }
  }

  static async #updateJobPID() {
    const updateSQL = 'update job set jobNode = ' + EntityDB.pool.escape(process.pid) +
      ' where jobServer = ' +  EntityDB.pool.escape(process.env.JOB_SERVER) +
      ' and jobNode = ' + EntityDB.pool.escape(process.env.previousPID) +
      ' and status <= 1';
    return new Promise((resolve, reject) => {
      EntityDB.executeSQL(updateSQL, (error, results)=> {
        if (error) {
          reject(new JobError('GENERIC_ERROR', error));
        } else {
          console.log(`(node:${process.pid}) The jobs are updated with new PID ${process.pid}.`);
          resolve(results.length);
        }
      })
    });
  }

  static async #getActiveJobNames() {
    const selectSQL = 'select name, status from job' +
      ' where jobServer = ' +  EntityDB.pool.escape(process.env.JOB_SERVER) +
      ' and jobNode = ' + EntityDB.pool.escape(process.pid) +
      ' and status <= 1';
    return new Promise((resolve, reject) => {
      EntityDB.executeSQL(selectSQL, (error, results)=> {
        if (error) {
          reject(new JobError('GENERIC_ERROR', error));
        } else {
          console.log(`(node:${process.pid}) ${results.length} job names are returned.`);
          resolve(results);
        }
      })
    });
  }

  static async #getActiveJobOccurrence(jobName) {
    let now = new Date();
    const selectSQL = 'select scheduledDateTime, INSTANCE_GUID from jobOccurrence' +
      ' where jobName = ' +  EntityDB.pool.escape(jobName) +
      ' and scheduledDateTime >= ' +
      EntityDB.pool.escape(now.toISOString().slice(0, 19).replace('T', ' '));
    return new Promise((resolve, reject) => {
      EntityDB.executeSQL(selectSQL, (error, results)=> {
        if (error) {
          reject(new JobError('GENERIC_ERROR', error));
        } else {
          console.log(`(node:${process.pid}) Job ${jobName} has ${results.length} occurrence(s) scheduled.`);
          resolve(results);
        }
      })
    });
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
    let jobs = Job.getJobs({status : [JobStatusEnum.scheduled]});
    for (const job of jobs) {
      job.instance.scheduleOccurrences(start, end)
        .catch( error => console.error(`(node:${process.pid})`, error.message || error));
    }
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
