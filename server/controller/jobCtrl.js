import Job from "../job.js";
import JobOccurrence from "../jobOccurrence.js";
import JobProgram from "../jobProgram.js";

export default class JobCtrl{
  static createJob(req, res) {
    try {
      new Job(req.body);
    } catch (e) {
      res.json(e.message);
    }
    res.json('success');
  }

  static scheduleJob(req, res) {
    const jobNames = req.body;
    try {
      jobNames.forEach( jobName => {
        console.log(jobName);
        Job.getJob(jobName).instance.scheduleOccurrences();
      });
    } catch (e) {
      res.json(e.message);
    }
    res.json('success');
  }

  static getJob(req, res) {
    let jobEntry = Job.getJob(req.params['name']);
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

  static getJobs(req, res) {
    const jobs = Job.getJobs(JSON.parse(req.query.filter));
    jobs.forEach( job => {delete job.instance});
    res.json(jobs);
  }

  static getJobOccurrences(req, res) {
    let filterCopy = { };
    if (req.query.filter) {
      const filter = JSON.parse(req.query.filter);
      filterCopy = { ...filter };
    }
    filterCopy.jobName = req.params['name'];
    const occurrences = JobOccurrence.getOccurrences(filterCopy);
    occurrences.forEach( occurrence => {delete occurrence.instance});
    res.json(occurrences);
  }

  static getJobPrograms(req, res) {
    res.json(JobProgram.getJobPrograms(req.query.filter));
  }

  static getJobProgramDefinition(req, res) {
    res.json(JobProgram.getJobProgramDefinition(req.params['name']));
  }
}
