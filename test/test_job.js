import Job from '../server/job.js';
import JobProgram from "../server/jobProgram.js";
import JobOccurrence from "../server/jobOccurrence.js";
import {JobStatusEnum, OccurrenceStatusEnum} from "../server/constants.js";

describe.only('Job Class tests',  () => {
  before('Register a test job program and a test job',  () => {
    JobProgram.registerJobProgram('JobProgram', {className: 'JobProgram'});
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
            cronOption: {
              currentDate: 'adsfasdfs'
            }
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
            cronOption: {
              endDate: 'adsfasdfs'
            }
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
            cronOption: {
              currentDate: now.toString(),
              endDate: then.toString()
            }
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
            cronOption: {
              endDate: then.toString()
            }
          }
        });
        (0).should.equal(1);
      } catch (e) {
        e.message.msgName.should.eql('TIMESPAN_IS_PAST');
      }
    });
    it('should success: create a job instance', () => {
      let then = new Date();
      then.setSeconds(then.getSeconds() - 100);
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

  describe('Schedule immediately and specific time run', () => {
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
        job.scheduleOccurrences();
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
            { message: { msgShortText: 'application log 1', msgLongText: 'application log 1', msgType: 'I'}},
            { message: { msgShortText: 'error happened', msgLongText: 'error happened', msgType: 'E'}}]);
          (jobOccurrenceEntry.endDateTime - jobOccurrenceEntry.actualStartDateTime).should.within(1000, 1200);
          should(jobOccurrenceEntry.instance).not.be.ok;
          jobOccurrenceEntry.steps.should.containDeep([
            { program: 'JobProgram', parameters: { param1: 'gogo1' }, status: 3, output: 'JobProgram'},
            { program: 'JobProgram', parameters: { param1: 'gogo2' }, status: 4 }]);
          resolve(1);
        }, 1100);
      })
    });
    it('should run 2 parallel jobs with console2ApplicationLob active', () => {
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
        job1.scheduleOccurrences();
        job2.scheduleOccurrences();
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
          jobOccurrenceEntry1.applicationLog.length.should.eql(2);
          jobOccurrenceEntry2.applicationLog.length.should.eql(6);
          resolve(1);
        }, 1100);
      })
    });
  });

  describe('schedule recurrent job run', () => {
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
    it('should fail in evaluating start end time: end is before start', () => {
      jobDefinition.name = 'testRecurrentJob1';
      const job = new Job(jobDefinition);
      let start = new Date();
      let end = new Date();
      let now = new Date();
      start.setSeconds(now.getSeconds() + 1000);
      end.setSeconds(now.getSeconds() + 500);
      try {
        job.evaluateStartEndTime(start, end);
        (0).should.equal(1);
      } catch (e) {
        e.message.msgName.should.eql('END_DATE_BEFORE_CURRENT_DATE');
      }
    });
    it('should fail in evaluating start end time: end is before now', () => {
      jobDefinition.name = 'testRecurrentJob1';
      const job = Job.getJob('testRecurrentJob1').instance;
      let now = new Date();
      let start = new Date();
      let end = new Date();
      start.setSeconds(now.getSeconds() - 200);
      end.setSeconds(now.getSeconds() - 100);
      try {
        job.evaluateStartEndTime(start, end);
        (0).should.equal(1);
      } catch (e) {
        e.message.msgName.should.eql('TIMESPAN_IS_PAST');
      }
    });
    it('should return a cronOption: no start and no end', () => {
      const job = Job.getJob('testRecurrentJob1').instance;
      const cronOption = job.evaluateStartEndTime();
      let now = new Date();
      let end = new Date();
      end.setSeconds(now.getSeconds() + 2147483);
      (cronOption.currentDate - now).should.within(-100, 0);
      (cronOption.endDate - end).should.within(-100, 0);
    });
    it('should return a cronOption: exceed timespan of the job', () => {
      let now = new Date();
      jobDefinition.name = 'testRecurrentJob2';
      jobDefinition.startCondition.cronOption.currentDate = new Date();
      jobDefinition.startCondition.cronOption.currentDate.setSeconds(now.getSeconds() + 1000)
      jobDefinition.startCondition.cronOption.endDate = new Date();
      jobDefinition.startCondition.cronOption.endDate.setSeconds(now.getSeconds() + 2000);
      const job = new Job(jobDefinition);
      let start = new Date();
      let end = new Date();
      start.setSeconds(now.getSeconds() + 800 );
      end.setSeconds(now.getSeconds() + 2200);
      const cronOption = job.evaluateStartEndTime(start, end);
      cronOption.should.eql(jobDefinition.startCondition.cronOption);
    });
    it('should return a cronOption: end time exceeds the max(2147483)', () => {
      let now = new Date();
      jobDefinition.name = 'testRecurrentJob3';
      jobDefinition.startCondition.cronOption.currentDate = new Date();
      jobDefinition.startCondition.cronOption.currentDate.setSeconds(now.getSeconds() + 1000)
      jobDefinition.startCondition.cronOption.endDate = null;
      const job = new Job(jobDefinition);
      let start = new Date();
      let end = new Date();
      let max = new Date();
      start.setSeconds(now.getSeconds() + 2000 );
      end.setSeconds(now.getSeconds() + 3147483);
      max.setSeconds(now.getSeconds() + 2147483);
      const cronOption = job.evaluateStartEndTime(start, end);
      cronOption.currentDate.should.eql(start);
      (cronOption.endDate - max).should.within(0, 100);
    });

    it('should run a job recursively per 2 seconds', async () => {
      jobDefinition.name = 'testRecurrentJob';
      let now = new Date();
      let end = new Date();
      end.setSeconds(now.getSeconds() + 8);
      jobDefinition.startCondition.cronOption.currentDate = now;
      jobDefinition.startCondition.cronOption.endDate = end;
      try{
        const job = new Job(jobDefinition);
        let start = new Date();
        let end2 = new Date();
        start.setSeconds(now.getSeconds() + 2);
        end2.setSeconds(now.getSeconds() + 6);
        job.scheduleOccurrences(start, end2);
        job.scheduleOccurrences(end2);
      } catch (e) {
        console.log(e.message);
      }
      return new Promise( resolve => {
        setTimeout( () => {
          const jobEntry = Job.getJobs({name: 'testRecurrentJob'})[0];
          const jobOccurrences = JobOccurrence.getOccurrences({jobName: 'testRecurrentJob'});
          jobEntry.status.should.eql(JobStatusEnum.completed);
          jobEntry.finishedOccurrences.should.eql(3);
          jobEntry.failedOccurrences.should.eql(0);
          jobEntry.canceledOccurrences.should.eql(0);
          should(jobEntry.instance).not.be.ok;
          jobOccurrences.length.should.eql(3);
          (jobOccurrences[2].endDateTime - jobOccurrences[0].actualStartDateTime).should.within(4400, 4600);
          (jobOccurrences[2].actualStartDateTime - now).should.within(6000, 8000);
          resolve(1);
        }, 8500);
      })
    });
  });
});
