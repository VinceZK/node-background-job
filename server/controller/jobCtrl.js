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
      const job = new Job(req.body);
      if (process.env.USE_DB === 'true') {
        job.createJobDB()
          .then(r => res.json([message.report('job', 'JOB_IS_SAVED', 'S', req.body.name)]))
          .catch(errors => res.json(errors));
      } else {
        res.json([message.report('job', 'JOB_IS_SAVED', 'S', req.body.name)]);
      }
    } catch (e) {
      res.json([e.message]);
    }
  }

  static changeJob(req, res) {
    Job.changeJob(req.body)
      .then( r => res.json([message.report('job', 'JOB_IS_SAVED', 'S', r.name)]))
      .catch( e => {
        if (Array.isArray(e)) {
          res.json(e)
        } else {
          res.json([e.message])
        }
      });
  }

  static scheduleJobs(req, res) {
    const jobNames = req.body;
    let iterator = jobNames.map( jobName => {
      return async () => {
        await Job.getJob(jobName).instance.scheduleOccurrences();
        return jobName;
      }
    });
    Promise.all(iterator)
      .then((jobNames)=>{
        res.json(jobNames.map(j => message.report('job', 'JOB_IS_SCHEDULED', 'S', j)))
      })
      .catch(e => {
        if (Array.isArray(e)){
          res.json(e)
        } else {
          res.json([e.message])
        }
      });
  }

  static getJob(req, res) {
    let jobEntry = Job.getJob(req.params['name']);
    if (!jobEntry) { // Doesn't hit the cache, try to find it in DB
      if (process.env.USE_DB === 'true') {
        Job.getJobDB(req.params['name'])
          .then(result => res.json(result))
          .catch(errors =>{
            if (errors[0].msgName === 'INSTANCE_NOT_IDENTIFIED') {
              res.json(message.report('job', 'JOB_NOT_EXIST', 'E', req.params['name']));
            } else {
              res.json(errors);
            }
          });
      } else {
        res.json(message.report('job', 'JOB_NOT_EXIST', 'E', req.params['name']));
      }
    } else {
      // Construct a new JSON to avoid expose instance
      res.json({
        name: jobEntry.name,
        status: jobEntry.status,
        mode: jobEntry.startCondition.mode,
        description: jobEntry.description,
        identity: jobEntry.identity,
        steps: jobEntry.steps,
        startCondition: jobEntry.startCondition,
        outputSetting: jobEntry.outputSetting,
        finishedOccurrences: jobEntry.finishedOccurrences,
        failedOccurrences: jobEntry.failedOccurrences,
        canceledOccurrences: jobEntry.canceledOccurrences,
        createdBy: jobEntry.createdBy,
        createTime: jobEntry.createTime,
        lastChangedBy: jobEntry.lastChangedBy,
        lastChangeTime: jobEntry.lastChangeTime
      });
    }
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
    if (process.env.USE_DB === 'true') {
      Job.getJobsDB(filter)
        .then( result => res.json(result))
        .catch( errors => res.json(errors))
    } else {
      const jobs = Job.getJobs(filter);
      jobs.forEach( job => {
        job.mode = job.startCondition.mode;
        job.description = job.description.DEFAULT;
        delete job.instance;
      });
      res.json(jobs);
    }
  }

  static cancelJobs(req, res) {
    const jobNames = req.body;
    let iterator = jobNames.map( jobName => {
      return async () => {
        await Job.getJob(jobName).instance.cancel();
        return jobName;
      }
    });
    Promise.all(iterator)
      .then((jobNames)=>{
        res.json(jobNames.map(j => message.report('job', 'JOB_IS_CANCELED', 'S', j)))
      })
      .catch(e => {
        if (Array.isArray(e)){
          res.json(e)
        } else {
          res.json([e.message])
        }
      });
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
    if (process.env.USE_DB === 'true') {
      JobOccurrence.getOccurrencesDB(filter)
        .then( result => res.json(result))
        .catch( errors => res.json(errors))
    } else {
      const occurrences = JobOccurrence.getOccurrences(filter);
      occurrences.forEach( occurrence => {delete occurrence.instance});
      res.json(occurrences);
    }
  }

  static cancelOccurrence(req, res) {
    const occurrenceUUIDs = req.body;
    let iterator = occurrenceUUIDs.map( uuid => {
      return async () => {
        let occurrence = JobOccurrence.getOccurrences({uuid: uuid});
        await occurrence.instance.cancel();
        return occurrence;
      }
    });
    Promise.all(iterator)
      .then((occurrence)=>{
        res.json(occurrence.map(o => message.report('job', 'OCCURRENCE_IS_CANCELED', 'S', o.uuid, o.jobName)))
      })
      .catch(e => {
        if (Array.isArray(e)){
          res.json(e)
        } else {
          res.json([e.message])
        }
      });
  }

  static searchJobPrograms(req, res) {
    res.json(JobProgram.getJobPrograms(req.query.nameFilter));
  }

  static getJobProgramDefinition(req, res) {
    res.json(JobProgram.getJobProgramDefinition(req.params['name']));
  }
}
