import Job from "../job.js";
import JobOccurrence from "../jobOccurrence.js";
import JobProgram from "../jobProgram.js";
import {Message, MsgArrayStore} from "ui-message";
import {msgArray} from "../../data/message_job_server.js";

const msgStore = new MsgArrayStore(msgArray);
export const message = new Message(msgStore, 'EN');

export default class JobCtrl{
  static createJob(req, res) {
    try {
      new Job(req.body);
    } catch (e) {
      res.json(e.message);
    }
    res.json(message.report('job', 'JOB_IS_SAVED', 'S', req.body.name));
  }

  static scheduleJobs(req, res) {
    const jobNames = req.body;
    const messages = [];
    try {
      jobNames.forEach( jobName => {
        Job.getJob(jobName).instance.scheduleOccurrences();
        messages.push(message.report('job', 'JOB_IS_SCHEDULED', 'S', jobName))
      });
    } catch (e) {
      messages.push(e.message);
    }
    res.json(messages);
  }

  static getJob(req, res) {
    let jobEntry = Job.getJob(req.params['name']);
    if (!jobEntry) {
      res.json(message.report('job', 'JOB_NOT_EXIST', 'E', req.params['name']));
    }
    res.json({
      name: jobEntry.name,
      status: jobEntry.status,
      identity: jobEntry.identity,
      steps: jobEntry.steps,
      startCondition: jobEntry.startCondition,
      outputSetting: jobEntry.outputSetting,
      finishedOccurrences: jobEntry.finishedOccurrences,
      failedOccurrences: jobEntry.failedOccurrences,
      canceledOccurrences: jobEntry.canceledOccurrences,
    });
  }

  static searchJobs(req, res) {
    let filter = {};
    if (req.query.name_includes) {
      filter.name_includes = req.query.name_includes;
    }
    if (req.query.status) {
      filter.status = [];
      let statusS = Array.isArray(req.query.status)? req.query.status : [req.query.status];
      statusS.forEach( s => filter.status.push(parseInt(s, 10)));
    }
    if (req.query.mode) {
      filter.mode = [];
      let modes = Array.isArray(req.query.mode)? req.query.mode : [req.query.mode];
      modes.forEach( m => filter.mode.push(parseInt(m, 10)));
    }
    if (req.query.program) {
      filter.program = req.query.program;
    }
    filter = Object.keys(filter).length === 0? null : filter;
    const jobs = Job.getJobs(filter);
    jobs.forEach( job => {delete job.instance});
    res.json(jobs);
  }

  static cancelJobs(req, res) {
    const jobNames = req.body;
    const messages = [];
    try {
      jobNames.forEach( jobName => {
        Job.getJob(jobName).instance.cancel();
        messages.push(message.report('job', 'JOB_IS_CANCELED', 'S', jobName))
      });
    } catch (e) {
      messages.push(e.message);
    }
    res.json(messages);
  }

  static getJobOccurrences(req, res) {
    let filter = {jobName: req.params['name']};
    if(req.query.uuid) {
      filter.uuid = req.query.uuid;
    }
    if (req.query.status) {
      filter.status = [];
      let statusS = Array.isArray(req.query.status)? req.query.status : [req.query.status];
      statusS.forEach( s => filter.status.push(parseInt(s, 10)));
    }
    const occurrences = JobOccurrence.getOccurrences(filter);
    occurrences.forEach( occurrence => {delete occurrence.instance});
    res.json(occurrences);
  }

  static cancelOccurrence(req, res) {
    const occurrenceUUIDs = req.body;
    const messages = [];
    try {
      occurrenceUUIDs.forEach( uuid => {
        let occurrence = JobOccurrence.getOccurrences({uuid: uuid}).instance;
        occurrence.cancel();
        messages.push(message.report('job', 'OCCURRENCE_IS_CANCELED', 'S', uuid, occurrence.jobName));
      });
    } catch (e) {
      messages.push(e.message);
    }
    res.json(messages);
  }

  static searchJobPrograms(req, res) {
    res.json(JobProgram.getJobPrograms(req.query.nameFilter));
  }

  static getJobProgramDefinition(req, res) {
    res.json(JobProgram.getJobProgramDefinition(req.params['name']));
  }
}
