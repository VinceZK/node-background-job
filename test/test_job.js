import Job from '../server/job.js';
import JobProgram from "../server/jobProgram.js";
import JobOccurrence from "../server/jobOccurrence.js";
import {JobStatusEnum, OccurrenceStatusEnum} from "../server/constants.js";
import CronParser from "cron-parser";
import Scheduler from "../server/scheduler.js";

describe('Job Class tests',  () => {
  before('Register a test job program and a test job',  () => {
    JobProgram.registerJobProgram(
      'JobProgram',
      {
        className: 'JobProgram',
        parameterDefinitions: {
          GROUP1: {
            text: { default: 'text of group'},
            parameters: {
              param1: {
                type: 1,
                text: {default: 'Label1'},
                mandatory: true,
              }
            }
          }
        }
      });
  });

  describe('Create a Job instance', () => {
    it('should fail: missing job name', () => {
      try {
        new Job({
          name: ''
        });
        (0).should.equal(1);
      } catch (e) {
        e.message.msgName.should.eql('MISSING_JOB_NAME');
      }
    });
    it('should fail: duplicate job name', () => {
      new Job({
        name: 'testJob',
        description: 'job description',
        steps: [
          {program: 'JobProgram', parameters: {param1: 'gogo1'}}
        ],
        startCondition: { mode: 0}
      });
      try {
        new Job({
          name: 'testJob'
        });
        (0).should.equal(1);
      } catch (e) {
        e.message.msgName.should.eql('JOB_NAME_DUPLICATE');
      }
    });
    it('should fail: missing job program', () => {
      try {
        new Job({
          name: 'testJob1',
          steps: {program: ''}
        });
        (0).should.equal(1);
      } catch (e) {
        e.message.msgName.should.eql('MISSING_JOB_PROGRAM');
      }
    });
    it('should fail: invalid job program', () => {
      try {
        new Job({
          name: 'testJob1',
          steps: [{program: 'JobProgram1', parameters:{}}]
        });
        (0).should.equal(1);
      } catch (e) {
        e.message.msgName.should.eql('INVALID_JOB_PROGRAM');
      }
    });
    it('should fail: missing start condition', () => {
      try {
        new Job({
          name: 'testJob1',
          steps: {program: 'JobProgram'}
        });
        (0).should.equal(1);
      } catch (e) {
        e.message.msgName.should.eql('MISSING_JOB_START_CONDITION');
      }
    });
    it('should fail: missing job mode', () => {
      try {
        new Job({
          name: 'testJob1',
          steps: {program: 'JobProgram'},
          startCondition: {
          }
        });
        (0).should.equal(1);
      } catch (e) {
        e.message.msgName.should.eql('MISSING_JOB_MODE');
      }
    });
    it('should fail: unsupported job mode', () => {
      try {
        new Job({
          name: 'testJob1',
          steps: {program: 'JobProgram'},
          startCondition: {
            mode: 'xx'
          }
        });
        (0).should.equal(1);
      } catch (e) {
        e.message.msgName.should.eql('UNSUPPORTED_JOB_MODE');
      }
    });
    it('should fail: missing specific time', () => {
      try {
        new Job({
          name: 'testJob1',
          steps: {program: 'JobProgram'},
          startCondition: {
            mode: 1,
          }
        });
        (0).should.equal(1);
      } catch (e) {
        e.message.msgName.should.eql('MISSING_SPECIFIC_TIME');
      }
    });
    it('should fail: invalid date string', () => {
      try {
        new Job({
          name: 'testJob1',
          steps: {program: 'JobProgram'},
          startCondition: {
            mode: 1,
            specificTime: '124d3243dfdsa'
          }
        });
        (0).should.equal(1);
      } catch (e) {
        e.message.msgName.should.eql('INVALID_DATE_STRING');
      }
    });
    it('should fail: scheduled in the past', () => {
      try {
        new Job({
          name: 'testJob1',
          steps: {program: 'JobProgram'},
          startCondition: {
            mode: 1,
            specificTime: '2020/01/01 12:00:00'
          }
        });
        (0).should.equal(1);
      } catch (e) {
        e.message.msgName.should.eql('SCHEDULED_DATE_PAST');
      }
    });
    it('should fail: invalid date string in cron currentDate', () => {
      try {
        new Job({
          name: 'testJob1',
          steps: {program: 'JobProgram'},
          startCondition: {
            mode: 2,
            cronCurrentDate: 'adsfasdfs'
          }
        });
        (0).should.equal(1);
      } catch (e) {
        e.message.msgName.should.eql('INVALID_DATE_STRING');
      }
    });
    it('should fail: invalid date string in cron endDate', () => {
      try {
        new Job({
          name: 'testJob1',
          steps: {program: 'JobProgram'},
          startCondition: {
            mode: 2,
            cronEndDate: 'adsfasdfs'
          }
        });
        (0).should.equal(1);
      } catch (e) {
        e.message.msgName.should.eql('INVALID_DATE_STRING');
      }
    });
    it('should fail: endDate is before current date', () => {
      let now = new Date();
      let then = new Date();
      now.setSeconds(now.getSeconds() + 200);
      then.setSeconds(then.getSeconds() + 100);
      try {
        new Job({
          name: 'testJob1',
          steps: {program: 'JobProgram'},
          startCondition: {
            mode: 2,
            cronCurrentDate: now.toString(),
            cronEndDate: then.toString()
          }
        });
        (0).should.equal(1);
      } catch (e) {
        e.message.msgName.should.eql('END_DATE_BEFORE_CURRENT_DATE');
      }
    });
    it('should fail: endDate is in the past', () => {
      let then = new Date();
      then.setSeconds(then.getSeconds() - 100);
      try {
        new Job({
          name: 'testJob1',
          steps: {program: 'JobProgram'},
          startCondition: {
            mode: 2,
            cronEndDate: then
          }
        });
        (0).should.equal(1);
      } catch (e) {
        e.message.msgName.should.eql('TIMESPAN_IS_PAST');
      }
    });
    it('should success: create a job instance', () => {
      new Job({
        name: 'testJob1',
        steps: {program: 'JobProgram'},
        startCondition: {
          mode: 2
        }
      });
      Job.getJob('testJob1').should.be.ok;
    });
  });

  describe('Schedule immediately job run', () => {
    it('should run testJob immediately', async () => {
      try{
        let job = new Job(  {
          name: 'testImmediateJob',
          description: 'job description',
          steps: [
            {program: 'JobProgram', parameters: {param1: 'gogo1'}},
            {program: 'JobProgram', parameters: {param1: 'gogo2'}}
          ],
          startCondition: { mode: 0 }
        });
        await job.scheduleOccurrences();
      } catch (e) {
        console.error(e.message);
      }
      return new Promise( resolve => {
        setTimeout( () => {
          const jobEntry = Job.getJobs({name: 'testImmediateJob'})[0];
          const jobOccurrenceEntry = JobOccurrence.getOccurrences({jobName: 'testImmediateJob'})[0];
          jobEntry.status.should.eql(JobStatusEnum.completed);
          jobEntry.finishedOccurrences.should.eql(0);
          jobEntry.failedOccurrences.should.eql(1);
          jobEntry.canceledOccurrences.should.eql(0);
          should(jobEntry.instance).not.be.ok;
          jobOccurrenceEntry.status.should.eql(OccurrenceStatusEnum.failed);
          jobOccurrenceEntry.applicationLog.should.containDeep([
            { message: { msgShortText: 'Successfully finished', msgLongText: 'Successfully finished', msgType: 'I'}},
            { message: { msgShortText: 'Error happened in application log', msgLongText: 'Error happened in application log', msgType: 'E'}}]);
          (new Date(jobOccurrenceEntry.endDateTime) - new Date(jobOccurrenceEntry.actualStartDateTime))
            .should.within(1000, 1200);
          should(jobOccurrenceEntry.instance).not.be.ok;
          jobOccurrenceEntry.steps.should.containDeep([
            { program: 'JobProgram', parameters: { param1: 'gogo1' }, status: 3, output: 'JobProgram'},
            { program: 'JobProgram', parameters: { param1: 'gogo2' }, status: 4 }]);
          resolve(1);
        }, 1100);
      })
    });
    it('should run 2 parallel jobs with console2ApplicationLob active', async () => {
      try {
        let job1 = new Job({
          name: 'testImmediateJob1',
          description: 'job description',
          steps: [
            {program: 'JobProgram', parameters: {param1: 'gogo1'}},
            {program: 'JobProgram', parameters: {param1: 'gogo2'}}
          ],
          startCondition: { mode: 0 },
        });
        let job2 = new Job(  {
          name: 'testImmediateJob2',
          description: 'job description',
          steps: [
            {program: 'JobProgram', parameters: {param1: 'gogo1'}}
          ],
          startCondition: { mode: 0 },
          outputSetting: { console2ApplicationLog: true }
        });
        await job1.scheduleOccurrences();
        await job2.scheduleOccurrences();
      } catch (e) {
        console.error(e.message);
      }
      return new Promise( resolve => {
        setTimeout( () => {
          const jobEntry1 = Job.getJobs({name: 'testImmediateJob1'})[0];
          const jobEntry2 = Job.getJobs({name: 'testImmediateJob2'})[0];
          const jobOccurrenceEntry1 = JobOccurrence.getOccurrences({jobName: 'testImmediateJob1'})[0];
          const jobOccurrenceEntry2 = JobOccurrence.getOccurrences({jobName: 'testImmediateJob2'})[0];
          jobEntry1.status.should.eql(JobStatusEnum.completed);
          jobEntry1.finishedOccurrences.should.eql(0);
          jobEntry1.failedOccurrences.should.eql(1);
          jobEntry1.canceledOccurrences.should.eql(0);
          jobEntry2.status.should.eql(JobStatusEnum.completed);
          jobEntry2.finishedOccurrences.should.eql(1);
          jobEntry2.failedOccurrences.should.eql(0);
          jobEntry2.canceledOccurrences.should.eql(0);
          jobOccurrenceEntry1.applicationLog.length.should.eql(3);
          jobOccurrenceEntry2.applicationLog.length.should.within(6, 8);
          resolve(1);
        }, 1100);
      })
    });
  });

  describe('Schedule specific time job run', () => {
    it('should not schedule the job as the start data is in future', async () => {
      let now = new Date();
      let jobStart = new Date();
      let occEnd = new Date();
      jobStart.setSeconds(now.getSeconds() + 2);
      occEnd.setSeconds(now.getSeconds() + 1);
      try{
        let job = new Job(  {
          name: 'testSpecTimeJob',
          description: 'job description',
          steps: [
            {program: 'JobProgram', parameters: {param1: 'gogo1'}},
            {program: 'JobProgram', parameters: {param1: 'gogo2'}}
          ],
          startCondition: { mode: 1, specificTime: jobStart}
        });
        await job.scheduleOccurrences(occEnd);
      } catch (e) {
        console.error(e.message);
      }
      return new Promise(resolve => {
        setTimeout( () => {
          const jobEntry = Job.getJobs({name: 'testSpecTimeJob'})[0];
          const jobOccurrences = JobOccurrence.getOccurrences({jobName: 'testSpecTimeJob'});
          jobEntry.status.should.eql(JobStatusEnum.scheduled);
          jobEntry.finishedOccurrences.should.eql(0);
          jobEntry.failedOccurrences.should.eql(0);
          jobEntry.canceledOccurrences.should.eql(0);
          jobEntry.instance.should.be.ok();
          jobOccurrences.length.should.eql(0);
          resolve(1);
        }, 2100);
      })
    });
    it('should schedule the job after 2 seconds', async () => {
      let now = new Date();
      let occStart = new Date();
      let occEnd = new Date();
      occStart.setSeconds(now.getSeconds() - 2);
      occEnd.setSeconds(now.getSeconds() + 2);
      try{
        const job  = Job.getJob('testSpecTimeJob').instance;
        await job.scheduleOccurrences(occEnd);
      } catch (e) {
        console.error(e.message);
      }
      return new Promise(resolve => {
        setTimeout( () => {
          const jobEntry = Job.getJobs({name: 'testSpecTimeJob'})[0];
          const jobOccurrence = JobOccurrence.getOccurrences({jobName: 'testSpecTimeJob'})[0];
          jobEntry.status.should.eql(JobStatusEnum.completed);
          jobEntry.finishedOccurrences.should.eql(0);
          jobEntry.failedOccurrences.should.eql(1);
          jobEntry.canceledOccurrences.should.eql(0);
          should(jobEntry.instance).not.be.ok();
          jobOccurrence.status.should.eql(OccurrenceStatusEnum.failed);
          jobOccurrence.applicationLog.should.containDeep([
            { message: { msgShortText: 'Successfully finished', msgLongText: 'Successfully finished', msgType: 'I'}},
            { message: { msgShortText: 'Error happened in application log', msgLongText: 'Error happened in application log', msgType: 'E'}}]);
          // (new Date(jobOccurrence.actualStartDateTime + ' UTC') - now).should.within(-1000, 0);
          (new Date(jobOccurrence.endDateTime) - new Date(jobOccurrence.actualStartDateTime))
            .should.within(1000, 1200);
          should(jobOccurrence.instance).not.be.ok;
          jobOccurrence.steps.should.containDeep([
            { program: 'JobProgram', parameters: { param1: 'gogo1' }, status: 3, output: 'JobProgram'},
            { program: 'JobProgram', parameters: { param1: 'gogo2' }, status: 4 }]);
          resolve(1);
        }, 2100);
      })
    });
  });

  describe('Schedule recurrent job run', () => {
    const jobDefinition = {
      name: 'testRecurrentJob',
      description: 'A recurrent job',
      steps: [
        {program: 'JobProgram', parameters: {param1: 'gogo1'}}
      ],
      startCondition: {
        mode: 2,
        cronString: '*/2 * * * * *',
        cronOption: {}
      }
    };
    it('should fail in evaluating start end time: end is in the past', () => {
      jobDefinition.name = 'testRecurrentJob1';
      const job = new Job(jobDefinition);
      let now = new Date();
      let end = new Date();
      end.setSeconds(now.getSeconds() - 100);
      try {
        job.generateCronOption(end);
        (0).should.equal(1);
      } catch (e) {
        e.message.msgName.should.eql('END_DATE_BEFORE_CURRENT_DATE');
      }
    });
    it('should return a cronOption: no start and no end', () => {
      const job = Job.getJob('testRecurrentJob1').instance;
      const cronOption = job.generateCronOption();
      let now = new Date();
      let end = new Date();
      end.setHours(now.getHours() + Scheduler.intervalHrs);
      (cronOption.currentDate - now).should.within(-100, 0);
      (cronOption.endDate - end).should.within(-100, 0);
    });
    it('should return a cronOption: exceed timespan of the job', () => {
      let now = new Date();
      jobDefinition.name = 'testRecurrentJob2';
      jobDefinition.startCondition.cronCurrentDate = new Date();
      jobDefinition.startCondition.cronCurrentDate.setSeconds(now.getSeconds() + 1000);
      jobDefinition.startCondition.cronEndDate = new Date();
      jobDefinition.startCondition.cronEndDate.setSeconds(now.getSeconds() + 2000);
      const job = new Job(jobDefinition);
      let end = new Date();
      end.setSeconds(now.getSeconds() + 2200);
      const cronOption = job.generateCronOption(end);
      cronOption.should.eql({
        currentDate: jobDefinition.startCondition.cronCurrentDate,
        endDate: jobDefinition.startCondition.cronEndDate,
        tz: 'UTC'
      });
    });
    it('should return a cronOption: end time exceeds the next intervalHrs', () => {
      let now = new Date();
      jobDefinition.name = 'testRecurrentJob3';
      jobDefinition.startCondition.cronCurrentDate = new Date();
      jobDefinition.startCondition.cronCurrentDate.setSeconds(now.getSeconds() + 1000);
      jobDefinition.startCondition.cronEndDate = null;
      const job = new Job(jobDefinition);
      let end = new Date();
      let max = new Date();
      end.setSeconds(now.getSeconds() + 3147483);
      max.setHours(now.getHours() + Scheduler.intervalHrs);
      const cronOption = job.generateCronOption(end);
      cronOption.currentDate.should.eql(jobDefinition.startCondition.cronCurrentDate);
      (cronOption.endDate - max).should.within(0, 100);
    });
    it('should fail: end date is before the last scheduled occurrence', async () => {
      let now = new Date();
      jobDefinition.name = 'testRecurrentJob4';
      jobDefinition.startCondition.cronString = '*/1 * * * * *'; // every 3 seconds
      jobDefinition.startCondition.cronCurrentDate = new Date();
      jobDefinition.startCondition.cronEndDate = new Date();
      jobDefinition.startCondition.cronEndDate.setSeconds(now.getSeconds() + 3);
      try {
        const job = new Job(jobDefinition);
        await job.scheduleOccurrences();
        const occurrences = JobOccurrence.getOccurrences({jobName: 'testRecurrentJob4'});
        for (let occurrence of occurrences) {
          console.log(occurrence.scheduledDateTime);
        }
        await occurrences[1].instance.cancel();
        let end = new Date();
        job.generateCronOption(end);
        (1).should.eql(2);
      } catch (e) {
        e.message.msgName.should.eql('END_DATE_BEFORE_CURRENT_DATE');
      }
    });
    it('should run a job recursively per 2 seconds', async () => {
      jobDefinition.name = 'testRecurrentJob';
      jobDefinition.startCondition.cronString = '*/2 * * * * *';
      let now = new Date();
      let end = new Date();
      end.setSeconds(now.getSeconds() + 8);
      jobDefinition.startCondition.cronCurrentDate = now;
      jobDefinition.startCondition.cronEndDate = end;
      try{
        const job = new Job(jobDefinition);
        let end2 = new Date();
        end2.setSeconds(now.getSeconds() + 6);
        await job.scheduleOccurrences(end2);
        await job.scheduleOccurrences();
      } catch (e) {
        console.log(e.message);
      }
      return new Promise( resolve => {
        setTimeout( () => {
          const jobEntry = Job.getJobs({name: 'testRecurrentJob'})[0];
          const jobOccurrences = JobOccurrence.getOccurrences({jobName: 'testRecurrentJob'});
          jobEntry.status.should.eql(JobStatusEnum.completed);
          jobEntry.finishedOccurrences.should.eql(4);
          jobEntry.failedOccurrences.should.eql(0);
          jobEntry.canceledOccurrences.should.eql(0);
          should(jobEntry.instance).not.be.ok();
          jobOccurrences.length.should.eql(4);
          (new Date(jobOccurrences[3].endDateTime) - new Date(jobOccurrences[0].actualStartDateTime))
            .should.within(6000, 6600);
          (new Date(jobOccurrences[3].actualStartDateTime + ' UTC') - now).should.within(6000, 8000);
          resolve(1);
        }, 8500);
      })
    });
  });

  describe.skip('Cron test', () => {

    it('should return occurrences date', () => {
      let now = new Date();
      let end = new Date();
      end.setDate(now.getDate() + 30);
      console.log('from', now.toISOString(), 'to', end.toISOString());
      const cronOption = {
        currentDate: now,
        endDate: end,
        tz: 'UTC'
      };
      let interval = CronParser.parseExpression('0 0 12 10,20,30 * *', cronOption);
      while (true) {
        try {
          let occurrenceTime = interval.next();
          console.log(occurrenceTime.toISOString());
        } catch (e) {
          break;
        }
      }
    });

  })
});
