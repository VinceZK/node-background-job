import HttpRequest from '../server/jobPrograms/httpRequest.js';
import JobProgram from "../server/jobProgram.js";
import Job from "../server/job.js";
import JobOccurrence from "../server/jobOccurrence.js";
import {JobStatusEnum, OccurrenceStatusEnum} from "../server/constants.js";

describe('HTTP Request tests', () => {
  it('should raise an successful GET request', async () => {
    let job = new Job(  {
      name: 'httpGetRequestJob',
      steps: [
        { program: 'httpRequest',
          parameters: {
            METHOD: 'GET',
            URL: 'http://localhost:3000/api/jobPrograms?filter=test',
            TYPE: 'NO_AUTH',
            HEADERS: 'Accept: */*\nCache-Control: no-cache\nContent-Type: application/json'
          }
        }
      ],
      startCondition: { mode: 0 }
    });
    await job.scheduleOccurrences();

    return new Promise( resolve => {
      setTimeout( () => {
        const jobEntry = Job.getJobs({name: 'httpGetRequestJob'})[0];
        const jobOccurrenceEntry = JobOccurrence.getOccurrences({jobName: 'httpGetRequestJob'})[0];
        jobEntry.status.should.eql(JobStatusEnum.completed);
        jobEntry.finishedOccurrences.should.eql(1);
        jobEntry.failedOccurrences.should.eql(0);
        jobEntry.canceledOccurrences.should.eql(0);
        jobOccurrenceEntry.status.should.eql(OccurrenceStatusEnum.finished);
        jobOccurrenceEntry.applicationLog.length.should.eql(2);
        JSON.parse(jobOccurrenceEntry.steps[0].output).should.containDeep([
          { name: 'testJobProgram', description: 'description of job program' },
          { name: 'testJobProgram2', description: 'description of job program'}
          ]);
        resolve(0);
      }, 1000);
    })
  });

  it('should raise an successful POST request', async () => {
    let job = new Job(  {
      name: 'httpPostRequestJob',
      steps: [
        { program: 'httpRequest',
          parameters: {
            METHOD: 'POST',
            URL: 'http://localhost:3000/api/jobs',
            TYPE: 'NO_AUTH',
            HEADERS: 'Accept: */*\nCache-Control: no-cache\nContent-Type: application/json',
            BODY: `{
              "name": "testSpecTimeJob",
              "steps": [{
                 "program": "testJobProgram",
                 "parameters": { "PARAMX": "value1" }
              }],
              "startCondition": { "mode": 0 }
            }`
          }
        }
      ],
      startCondition: { mode: 0 }
    });
    await job.scheduleOccurrences();

    return new Promise( resolve => {
      setTimeout( () => {
        const jobEntry = Job.getJobs({name: 'httpPostRequestJob'})[0];
        const jobOccurrenceEntry = JobOccurrence.getOccurrences({jobName: 'httpPostRequestJob'})[0];
        jobEntry.status.should.eql(JobStatusEnum.completed);
        jobEntry.finishedOccurrences.should.eql(1);
        jobEntry.failedOccurrences.should.eql(0);
        jobEntry.canceledOccurrences.should.eql(0);
        jobOccurrenceEntry.status.should.eql(OccurrenceStatusEnum.finished);
        jobOccurrenceEntry.applicationLog.length.should.eql(2);
        JSON.parse(jobOccurrenceEntry.steps[0].output).should.containDeep([
          {
            msgCat: 'jobProgram',
            msgName: 'INVALID_PARAMETER',
            msgShortText: 'Parameter PARAMX is invalid',
            msgLongText: 'dummy',
            msgType: 'E'
          }
        ]);
        resolve(0);
      }, 1000);
    })
  });

  it('should raise an error GET request', async () => {
    let job = new Job(  {
      name: 'httpGetRequestFailJob',
      steps: [
        { program: 'httpRequest',
          parameters: {
            METHOD: 'GET',
            URL: 'http://localhost:3000/api/xxxx',
            TYPE: 'NO_AUTH',
            HEADERS: 'Accept: */*\nCache-Control: no-cache\nContent-Type: application/json'
          }
        }
      ],
      startCondition: { mode: 0 }
    });
    await job.scheduleOccurrences();

    return new Promise( resolve => {
      setTimeout( () => {
        const jobEntry = Job.getJobs({name: 'httpGetRequestFailJob'})[0];
        const jobOccurrenceEntry = JobOccurrence.getOccurrences({jobName: 'httpGetRequestFailJob'})[0];
        jobEntry.status.should.eql(JobStatusEnum.completed);
        jobEntry.finishedOccurrences.should.eql(0);
        jobEntry.failedOccurrences.should.eql(1);
        jobEntry.canceledOccurrences.should.eql(0);
        jobOccurrenceEntry.status.should.eql(OccurrenceStatusEnum.failed);
        jobOccurrenceEntry.applicationLog.length.should.eql(5);
        resolve(0);
      }, 1000);
    })
  });
});
