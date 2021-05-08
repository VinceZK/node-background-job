import {JobStatusEnum, OccurrenceStatusEnum} from "./constants.js";
import Job from "./job.js";
import JobOccurrence from "./jobOccurrence.js";
import {JobError} from "./jobError.js";
import {EntityDB} from 'json-on-relations';

export default class Scheduler {
  static #timerHandler = null;
  static intervalHrs = 24;
  static previousPIDs = [];

  /**
   * Get previous process IDs on the server.
   * @returns {Promise<unknown>}
   */
  static async getPreviousPIDs() {
    if (process.env.USE_DB === 'true') {
      const selectSQL = 'select distinct jobNode from job ' +
        'where jobServer = ' + EntityDB.pool.escape(process.env.JOB_SERVER) +
        ' and status <= 1';
      return new Promise((resolve, reject) => {
        EntityDB.executeSQL(selectSQL, (errors, results) => {
          if (errors) {
            reject(errors);
          } else {
            this.previousPIDs = results.map(data => data.jobNode);
            resolve(this.previousPIDs.length);
          }
        })
      });
    } else {
      return new Promise( resolve => resolve([0]));
    }
  }

  /**
   * Switch on the scheduler
   * @returns {Promise<void>}
   */
  static async on() {
    if (process.env.USE_DB === 'true') {
      await this.#recoverActiveJobs();
    }
    let end = new Date();
    end.setHours(end.getHours() + this.intervalHrs + 1); // Add 1 hr buffer
    // The persisted occurrences may already missed. For example, restarting the server after the 'intervalHrs'.
    // Thus we still need to schedule for the span from now to the end.
    // The occurrences in the overlap span won't be rescheduled.
    this.#scheduleJobOccurrences(end);
    this.timerHandler = setInterval(() => this.#scheduleJobOccurrences(), this.intervalHrs * 3600000);
  }

  static async #recoverActiveJobs() {
    console.log(`(node:${process.pid}) Recovering jobs and their occurrences...`);
    await this.#updateJobPID();
    const activeJobs = await this.#getActiveJobNames();
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    for (const activeJob of activeJobs) {
      console.log(`(node:${process.pid}) Recovering Job ${activeJob.name} and its occurrences.`);
      try {
        const jobDefinition = await Job.getJobDB(activeJob.name);
        const job = new Job(jobDefinition);
        if (activeJob.status === JobStatusEnum.scheduled) {
          const jobOccurrences = await this.#getActiveJobOccurrence(activeJob.name, now);
          for (const jobOccurrence of jobOccurrences) {
            const scheduledDateTime = new Date(jobOccurrence.scheduledDateTime + ' UTC');
            const jobOcc = new JobOccurrence(job, scheduledDateTime, jobOccurrence.INSTANCE_GUID, jobOccurrence.uuid);
            await jobOcc.setReady();
          }
          const canceledOccNum = await this.#cancelPassedOccurrences(activeJob.name, now);
          if (canceledOccNum > 0) {
            await this.#updateCanceledOccNum(activeJob.name, now, canceledOccNum, false);
          }
        }
        console.info(`(node:${process.pid}) Job ${activeJob.name} is recovered.`);
      } catch (error) {
        if (error.message.msgName === 'SCHEDULED_DATE_PAST' ||
            error.message.msgName === 'TIMESPAN_IS_PAST') {
          const canceledOccNum = await this.#cancelPassedOccurrences(activeJob.name, now);
          await this.#updateCanceledOccNum(activeJob.name, now, canceledOccNum, true);
          console.info(`(node:${process.pid})`,
            `Job(${activeJob.name}) is set to "Cancel" as its scheduled date passed!`);
        } else {
          console.error(`(node:${process.pid})`, error.message || error);
        }
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

  static async #getActiveJobOccurrence(jobName, now) {
    const selectSQL = 'select scheduledDateTime, INSTANCE_GUID, uuid from jobOccurrence' +
      ' where jobName = ' +  EntityDB.pool.escape(jobName) +
      '   and status = ' + EntityDB.pool.escape(OccurrenceStatusEnum.ready) +
      '   and scheduledDateTime >= ' + EntityDB.pool.escape(now);
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

  static async #cancelPassedOccurrences(jobName, now) {
    const updateSQL1 = 'update jobOccurrence set status = ' + EntityDB.pool.escape(OccurrenceStatusEnum.canceled) +
      ' where jobName = ' +  EntityDB.pool.escape(jobName) +
      '   and scheduledDateTime < ' + EntityDB.pool.escape(now) +
      '   and ( status = ' + EntityDB.pool.escape(OccurrenceStatusEnum.ready) +
      '      or status = ' + EntityDB.pool.escape(OccurrenceStatusEnum.running) + ' )';
    return new Promise((resolve, reject) => {
      EntityDB.executeSQL(updateSQL1, (error, results)=> {
        if (error) {
          reject(new JobError('GENERIC_ERROR', error));
        } else {
          resolve(results.changedRows);
        }
      })
    });
  }

  static async #updateCanceledOccNum(jobName, now, canceledOccNum, isCompleted) {
    let updateSQL = 'update job ' +
      'set canceledOccurrences = canceledOccurrences + ' + EntityDB.pool.escape(canceledOccNum);
    if (isCompleted) {
      updateSQL += ', status = ' + EntityDB.pool.escape(JobStatusEnum.completed);
    }
    updateSQL += ' where name = ' +  EntityDB.pool.escape(jobName);
    return new Promise((resolve, reject) => {
      EntityDB.executeSQL(updateSQL, (error, results)=> {
        if (error) {
          reject(new JobError('GENERIC_ERROR', error));
        } else {
          resolve(results);
        }
      })
    });
  }

  static #scheduleJobOccurrences(end) {
    let start = new Date();
    if (!end) {
      end = new Date();
      // If the next occurrence is a little before the time when scheduling is running,
      // then it will be skipped. By adding 1 hr is to make sure there is no missing occurrence.
      end.setHours(start.getHours() + this.intervalHrs + 1);
    }
    let jobs = Job.getJobs({status : [JobStatusEnum.scheduled]});
    console.info(`(node:${process.pid})`,
      `Scheduling job occurrences from ${start.toISOString()} to ${end.toISOString()} for ${jobs.length} job(s)`);
    for (const job of jobs) {
      console.info(`(node:${process.pid})`,
        `Scheduling job(${job.name}) from ${start.toISOString()} to ${end.toISOString()}`);
      const now = new Date();
      if (job.endDateTime < now) {
        // If the job is running, the below statement updates the job to "Completed" in DB.
        // In the cache, the job's status is still "Scheduled".
        // Only after the job is finished or failed, the cache got updated to "Completed".
        this.#updateCanceledOccNum(job.name,
          now.toISOString().slice(0, 19).replace('T', ' '),
          0, true)
          .then( result => {
            console.info(`(node:${process.pid})`,
              `Job(${job.name}) is set to "Completed" as its endDateTime already passed.`);
          })
          .catch( error => {
            console.error(`(node:${process.pid})`, error.message || error);
          })
      } else {
        job.instance.scheduleOccurrences(end)
          .then( result => {
            console.info(`(node:${process.pid})`,
              `Job(${result.jobName}) has ${result.numOcc} occurrence(s) scheduled.`);
          })
          .catch( error => {
            if (error.message?.msgName === 'END_DATE_BEFORE_CURRENT_DATE') {
              console.info(`(node:${process.pid})`,
                `Job(${job.name}) has occurrence(s) already scheduled after ${end.toISOString()}.`);
            } else {
              console.error(`(node:${process.pid})`, error.message || error);
            }
          });
      }
    }
  }

  /**
   * Because the function setTimeout(maxTimeout) has the max waiting time of 2147483647ms, about 2147483s
   * @param hrs
   */
  static setIntervalHrs(hrs) {
    if (isNaN(hrs)) {
      throw new JobError('HOURS_IS_NOT_A_NUMBER', hrs);
    }
    const maxTimeout = 2147483; //seconds
    let intervalSeconds = hrs * 3600;
    if (intervalSeconds > maxTimeout) {
      throw new JobError('MAX_TIMEOUT', maxTimeout / 3600);
    }
    this.intervalHrs = hrs;
  }

  static off() {
    clearInterval(this.timerHandler);
  }
}
