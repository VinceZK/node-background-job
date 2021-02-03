import {JobError} from './jobError.js';
import JobProgram from "./jobProgram.js";
import { v4 as uuid } from 'uuid';

const OccurrenceStatusEnum = {"initial":0, "ready":1, "running":2, "finished":3, "failed":4, "cancel":5 };
Object.freeze(OccurrenceStatusEnum);

export default class JobOccurrence {
  static #occurrences = [];
  static getLastReadyOccurrenceOfJob(jobName) {
    let lastReadyScheduledTime = 0;
    this.#occurrences.forEach( occurrence => {
      if (occurrence.jobName === jobName) {
        if(occurrence.scheduledDateTime > lastReadyScheduledTime) {
          lastReadyScheduledTime = occurrence.scheduledDateTime;
        }
      }
    });
    return this.#occurrences.find( occurrence => occurrence.job === jobName && occurrence.scheduledDateTime === lastReadyScheduledTime)
  }

  constructor(jobDefinition, scheduledDateTime) {
    this.uuid = uuid();
    this.jobName = jobDefinition.name;
    this.description = jobDefinition.description;
    this.identity = jobDefinition.identity;
    this.steps = jobDefinition.steps;
    this.startCondition = jobDefinition.startCondition;
    this.outputSettings = jobDefinition.outputSettings;
    this.scheduledDateTime = scheduledDateTime;
    const occurrenceEntry = {
      uuid: this.uuid,
      jobName: this.jobName,
      status: OccurrenceStatusEnum.ready,
      steps: this.steps,
      scheduledDateTime: scheduledDateTime,
      actualDateTime: 0,
      finishedDateTime: 0,
      output: '',
      instance: this
    };
    JobOccurrence.#occurrences.push(occurrenceEntry);
    this.timerHandler = this.#setReady();
  }

  getStatus() {
    const occurrenceEntry = JobOccurrence.#occurrences.find( occurrence => occurrence.uuid = this.uuid );
    return occurrenceEntry? occurrenceEntry.status : OccurrenceStatusEnum.initial;
  }

  #updateStatus(status) {
    const occurrenceEntry = JobOccurrence.#occurrences.find( occurrence => occurrence.uuid = this.uuid );
    if (!occurrenceEntry) {
      throw new JobError('INITIAL_JOB_OCCURRENCE_STATUS');
    }
    if (status >= occurrenceEntry.status && occurrenceEntry.status < OccurrenceStatusEnum.finished) {
      if (status === OccurrenceStatusEnum.cancel && occurrenceEntry.status !== OccurrenceStatusEnum.ready) {
        // You can only cancel job occurrence with status 'Ready'
        throw new JobError('INCORRECT_JOB_OCCURRENCE_STATUS_CHANGE', occurrenceEntry.status, status);
      } else {
        occurrenceEntry.status = status;
      }
    } else {
      throw new JobError('INCORRECT_JOB_OCCURRENCE_STATUS_CHANGE', occurrenceEntry.status, status);
    }
  }

  #setReady() {
    this.#updateStatus(OccurrenceStatusEnum.ready);
    let now = Date.now();
    let then = this.scheduledDateTime.getTime();
    return setTimeout(() => {
      this.#runSteps().catch(e => {throw e});
    }, (then < now? 0 : then - now));
  }

  async #runSteps() {
    this.#updateStatus(OccurrenceStatusEnum.running);
    for (const step of this.steps) {
      step.status = OccurrenceStatusEnum.running;
      const theClass = JobProgram.getJobProgramDefinition(step.program).class;
      if (!theClass) {
        throw new JobError('JOB_PROGRAM_NOT_EXIST', step.program);
      }
      try {
        const jobProgramInstance = new theClass(step.program, step.parameters);
        await jobProgramInstance.run();
        step.status = OccurrenceStatusEnum.finished;
      } catch (e) {
        step.status = OccurrenceStatusEnum.failed;
        this.#updateStatus(OccurrenceStatusEnum.failed);
        // console.log('Job Occurrence Status: ', this.getStatus());
        // console.log(JobOccurrence.#occurrences[0].steps);
        throw e;
      }
    }
    this.#updateStatus(OccurrenceStatusEnum.finished);
  }

  stop() {

  }

  cancel() {
    this.#updateStatus(OccurrenceStatusEnum.cancel);
    clearTimeout(this.timerHandler);
  }
}
