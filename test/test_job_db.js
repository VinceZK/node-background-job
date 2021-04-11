import Job from '../server/job.js';
import JobProgram from "../server/jobProgram.js";
import * as jor from 'json-on-relations';
import JobOccurrence from "../server/jobOccurrence.js";
import {JobStatusEnum, OccurrenceStatusEnum} from "../server/constants.js";

async function deleteInstance(INSTANCE_GUID) {
  return new Promise( (resolve, reject) => {
    jor.Entity.softDeleteInstanceByGUID(INSTANCE_GUID, errs => {
      if (errs) { reject(errs); }
      jor.Entity.hardDeleteByGUID(INSTANCE_GUID, errs => {
        if (errs) { reject(errs);}
        resolve(0);
      })
    })
  });
}

describe.only('Job DB Tests',  () => {

  before('Register a test job program and a test job',  () => {
    process.env.USE_DB = true;
    JobProgram.registerJobProgram('JobProgram',
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

  describe('Create an immediately-run job', () => {
    const jobDefinition = {
      name: 'testImmediateJob99',
      description: 'job description',
      steps: [
        {program: 'JobProgram', parameters: {param1: 'gogo1'}},
        {program: 'JobProgram', parameters: {param1: 'gogo2'}}
      ],
      startCondition: { mode: 0 },
      identity: { id: 'DH001'},
      outputSetting: { console2ApplicationLog: true }
    };
    let jobGuid = '';
    let occGuid = '';
    let occUUID = '';

    it('should save the job correctly', async () => {
      const job = new Job(jobDefinition);
      await job.createJobDB();
      const jobEntryInCache = Job.getJob('testImmediateJob99');
      const jobEntryInDB = await Job.getJobDB('testImmediateJob99');
      jobEntryInCache.status.should.eql(JobStatusEnum.initial);
      jobEntryInCache.name.should.eql('testImmediateJob99');
      jobEntryInDB.should.containDeep({
        name: 'testImmediateJob99',
        status: 0,
        description: { DEFAULT: 'job description' },
        identity: { id: 'DH001' },
        steps: [
          { program: 'JobProgram', parameters: '{"param1":"gogo1"}' },
          { program: 'JobProgram', parameters: '{"param1":"gogo2"}' }
        ],
        startCondition: { mode: 0 },
        outputSetting: { console2ApplicationLog: 1},
        finishedOccurrences: 0,
        failedOccurrences: 0,
        canceledOccurrences: 0
      });
    });

    it('should fail: change a non-exist job', async ()=>{
      jobDefinition.name = 'testImmediateJob98';
      try {
        await Job.changeJob(jobDefinition);
        (1).should.eql(2);
      } catch (e) {
        e.message.msgName.should.eql('JOB_NOT_EXIST');
      }
    });

    it('should success: change a job', async ()=>{
      jobDefinition.name = 'testImmediateJob99';
      jobDefinition.description = 'changed description';
      jobDefinition.steps = [{ program: 'JobProgram', parameters: { param1: 'gogo1'} }];
      await Job.changeJob(jobDefinition);
      const jobEntryInCache = Job.getJob('testImmediateJob99');
      const jobEntryInDB = await Job.getJobDB('testImmediateJob99');
      const expectResult = {
        name: 'testImmediateJob99',
        status: 0,
        description: { DEFAULT: 'changed description' },
        identity: { id: 'DH001' },
        startCondition: { mode: 0 },
        outputSetting: { console2ApplicationLog: 1},
        finishedOccurrences: 0,
        failedOccurrences: 0,
        canceledOccurrences: 0
      };
      expectResult.steps = [
        { program: 'JobProgram', parameters: { param1: 'gogo1'} }
      ];
      expectResult.outputSetting.console2ApplicationLog = true;
      jobEntryInCache.should.containDeep(expectResult);
      expectResult.steps = [
        { program: 'JobProgram', parameters: '{"param1":"gogo1"}' }
      ];
      expectResult.outputSetting.console2ApplicationLog = 1;
      jobEntryInDB.should.containDeep(expectResult);
    });

    it('should fail: change a job error in JOR', async ()=> {
      const jobInstance = Job.getJob('testImmediateJob99').instance;
      jobGuid = jobInstance.INSTANCE_GUID;
      jobInstance.INSTANCE_GUID = ''; // Clear INSTANCE_GUID to force error in jor.
      jobDefinition.description = 'job description';
      try {
        await Job.changeJob(jobDefinition);
      } catch (e) {
        jobInstance.INSTANCE_GUID = jobGuid;
        e[0].msgName.should.eql('INSTANCE_GUID_MISSING');
        const jobEntryInCache = Job.getJob('testImmediateJob99');
        jobEntryInCache.should.containDeep({
          name: 'testImmediateJob99',
          status: 0,
          description: { DEFAULT: 'changed description' },
          identity: { id: 'DH001' },
          steps: [
            { program: 'JobProgram', parameters: { param1: 'gogo1'} }
          ],
          startCondition: { mode: 0 },
          outputSetting: { console2ApplicationLog: true },
          finishedOccurrences: 0,
          failedOccurrences: 0,
          canceledOccurrences: 0
        });
      }
    });

    it('should schedule the immediate job and run successfully', async () => {
      const jobInstance = Job.getJob('testImmediateJob99').instance;
      const result = await jobInstance.scheduleOccurrences();
      result.should.eql({jobName: 'testImmediateJob99', numOcc: 1});
      const occInCache = JobOccurrence.getOccurrences(
        {jobName: 'testImmediateJob99'})[0];
      occInCache.should.containDeep({
        jobName: 'testImmediateJob99',
        status: OccurrenceStatusEnum.ready,
        steps: [ { program: 'JobProgram', parameters: { param1: 'gogo1'} } ],
        startCondition: { mode: 0 }
      });
      occGuid = occInCache.instance.INSTANCE_GUID;
      occUUID = occInCache.uuid;
      const occInDB = await JobOccurrence.getOccurrenceDB(occGuid);
      occInDB.should.containDeep({
        uuid: occInCache.uuid,
        status: OccurrenceStatusEnum.ready,
        jobName: 'testImmediateJob99',
        scheduledDateTime: occInCache.scheduledDateTime,
        actualStartDateTime: null,
        endDateTime: null,
        identity: { id: 'DH001' },
        steps: [{status: 0, program: 'JobProgram', parameters: '{"param1":"gogo1"}', output: null}],
        startCondition: {
          mode: 0, cronString: null, cronCurrentDate: null,
          cronEndDate: null, tz: null, specificTime: null
        },
        outputSetting: {console2ApplicationLog: 1}
      });
    });

    it('should has the job in running', async () => {
      return new Promise( (resolve, reject) => {
        setTimeout( async () => {
          const occInCacheThen = JobOccurrence.getOccurrence(occUUID);
          const occInDBThen = await JobOccurrence.getOccurrenceDB(occGuid);
          try {
            occInCacheThen.status.should.eql(OccurrenceStatusEnum.running);
            occInCacheThen.actualStartDateTime.should.be.ok();
            occInCacheThen.steps.should.containDeep([{status: OccurrenceStatusEnum.running}]);
            occInDBThen.status.should.eql(OccurrenceStatusEnum.running);
            occInDBThen.actualStartDateTime.should.eql(occInCacheThen.actualStartDateTime);
            resolve(0);
          } catch (e) {
            reject(e)
          }
        }, 300);
      })
    });

    it('should has the job successfully completed', async () => {
      return new Promise( (resolve, reject) => {
        setTimeout( async () => {
          const occInCacheThen = JobOccurrence.getOccurrence(occUUID);
          const occInDBThen = await JobOccurrence.getOccurrenceDB(occGuid);
          const jobInCacheThen = Job.getJob('testImmediateJob99');
          const jobInDBThen = await Job.getJobDB('testImmediateJob99');
          try{
            occInCacheThen.status.should.eql(OccurrenceStatusEnum.finished);
            occInCacheThen.endDateTime.should.be.ok();
            occInCacheThen.steps.should.containDeep([{
              status: OccurrenceStatusEnum.finished,
              output: 'JobProgram'
            }]);
            occInCacheThen.applicationLog.should.containDeep([
              { message: {
                  msgCat: 'applicationLog', msgName: 'DEFAULT', msgType: 'I',
                  msgShortText: 'start running...', msgLongText: 'start running...'}
              },
              { message: {
                  msgCat: 'applicationLog', msgName: 'DEFAULT', msgType: 'I',
                  msgShortText: "JobProgram { param1: 'gogo1' }",
                  msgLongText: "JobProgram { param1: 'gogo1' }"}
              },
              { message: {
                  msgCat: 'applicationLog', msgName: 'DEFAULT', msgType: 'I',
                  msgShortText: 'Successfully finished',
                  msgLongText: 'Successfully finished'}
              },
              { message: {
                  msgCat: 'applicationLog', msgName: 'DEFAULT', msgType: 'I',
                  msgShortText: 'finished!', msgLongText: 'finished!'}
              }
            ]);
            occInDBThen.status.should.eql(OccurrenceStatusEnum.finished);
            occInDBThen.endDateTime.should.eql(occInCacheThen.endDateTime);
            occInDBThen.steps.should.containDeep([{
              status: OccurrenceStatusEnum.finished,
              output: 'JobProgram'
            }]);
            occInDBThen.applicationLog.should.containDeep(occInCacheThen.applicationLog);
            jobInCacheThen.should.containDeep({
              status: JobStatusEnum.completed,
              finishedOccurrences: 1,
              failedOccurrences: 0,
              canceledOccurrences: 0
            });
            jobInDBThen.should.containDeep({
              status: JobStatusEnum.completed,
              finishedOccurrences: 1,
              failedOccurrences: 0,
              canceledOccurrences: 0
            });
            resolve(0);
          } catch (e) {
            reject(e)
          }
        }, 800);
      })
    });

    it('should fail: change a completed job', async ()=>{
      jobDefinition.description = 'changed description';
      try {
        await Job.changeJob(jobDefinition);
        (1).should.eql(2);
      } catch (e) {
        console.log(e);
        e.message.msgName.should.eql('JOB_CANNOT_BE_CHANGED');
      }
    });

    after('Clear DB', async () => {
      await deleteInstance(jobGuid);
      await deleteInstance(occGuid);
    })
  });

  describe('Create a specific-time job', () => {
    let jobGuid = '';
    let jobGuid2 = '';
    let occGuid = '';
    let occGuid2 = '';
    let occGuid3 = '';
    let occUUID = '';
    let jobStart = '';
    const jobDefinition = {
      name: 'testSpecificTimeJob99',
      description: 'job description',
      steps: [
        {program: 'JobProgram', parameters: {param1: 'gogo1'}},
        {program: 'JobProgram', parameters: {param1: 'gogo2'}}
      ],
      startCondition: {mode: 1, specificTime: jobStart},
      identity: {id: 'DH001'},
      outputSetting: {console2ApplicationLog: false}
    };

    it('should save the job correctly', async () => {
      jobStart = new Date();
      jobStart.setSeconds(jobStart.getSeconds() + 1);
      jobDefinition.startCondition.specificTime = jobStart;
      const job = new Job(jobDefinition);
      await job.createJobDB();
      const jobEntryInDB = await Job.getJobDB('testSpecificTimeJob99');
      const jobEntryInCache = Job.getJob('testSpecificTimeJob99');
      jobGuid = jobEntryInCache.instance.INSTANCE_GUID;
      jobEntryInCache.status.should.eql(JobStatusEnum.initial);
      jobEntryInCache.name.should.eql('testSpecificTimeJob99');
      jobEntryInDB.should.containDeep({
        name: 'testSpecificTimeJob99',
        status: 0,
        description: { DEFAULT: 'job description' },
        identity: { id: 'DH001' },
        steps: [
          { program: 'JobProgram', parameters: '{"param1":"gogo1"}' },
          { program: 'JobProgram', parameters: '{"param1":"gogo2"}' }
        ],
        startCondition: {
          mode: 1,
          specificTime: jobStart.toISOString().slice(0, 19).replace('T', ' ')
        },
        outputSetting: { console2ApplicationLog: 0},
        finishedOccurrences: 0,
        failedOccurrences: 0,
        canceledOccurrences: 0
      });
    });

    it('should schedule the specific-time job successfully', async () => {
      const jobInstance = Job.getJob('testSpecificTimeJob99').instance;
      const result = await jobInstance.scheduleOccurrences();
      result.should.eql({jobName: 'testSpecificTimeJob99', numOcc: 1});
      const occInCache = JobOccurrence.getOccurrences(
        {jobName: 'testSpecificTimeJob99'})[0];
      occInCache.should.containDeep({
        jobName: 'testSpecificTimeJob99',
        status: OccurrenceStatusEnum.ready,
        steps: [
          { program: 'JobProgram', parameters: { param1: 'gogo1'} },
          { program: 'JobProgram', parameters: { param1: 'gogo2'} }
        ],
        startCondition: {
          mode: 1,
          specificTime: jobStart.toISOString().slice(0, 19).replace('T', ' ')
        },
      });
      occGuid = occInCache.instance.INSTANCE_GUID;
      occUUID = occInCache.uuid;
      const occInDB = await JobOccurrence.getOccurrenceDB(occGuid);
      occInDB.should.containDeep({
        uuid: occInCache.uuid,
        status: OccurrenceStatusEnum.ready,
        jobName: 'testSpecificTimeJob99',
        scheduledDateTime: occInCache.scheduledDateTime,
        actualStartDateTime: null,
        endDateTime: null,
        identity: { id: 'DH001' },
        steps: [
          { status: 0, program: 'JobProgram', parameters: '{"param1":"gogo1"}', output: null },
          { status: 0, program: 'JobProgram', parameters: '{"param1":"gogo2"}', output: null }
        ],
        startCondition: {
          mode: 1, cronString: null, cronCurrentDate: null, cronEndDate: null, tz: null,
          specificTime: jobStart.toISOString().slice(0, 19).replace('T', ' ')
        },
        outputSetting: {console2ApplicationLog: 0}
      });
    });

    it('should has the job in running', async () => {
      return new Promise( (resolve, reject) => {
        setTimeout(async () => {
          const occInCacheThen = JobOccurrence.getOccurrence(occUUID);
          const occInDBThen = await JobOccurrence.getOccurrenceDB(occGuid);
          try {
            occInCacheThen.status.should.eql(OccurrenceStatusEnum.running);
            occInCacheThen.actualStartDateTime.should.be.ok();
            occInCacheThen.steps.should.containDeep([
              {program: 'JobProgram', status: OccurrenceStatusEnum.running},
              {program: 'JobProgram'}
            ]);
            occInDBThen.status.should.eql(OccurrenceStatusEnum.running);
            occInDBThen.actualStartDateTime.should.eql(occInCacheThen.actualStartDateTime);
            resolve(0);
          } catch (e) {
            reject(e)
          }
        }, 1000);
      })
    });

    it('should has the job completed with failed log', async () => {
      return new Promise( (resolve, reject) => {
        setTimeout(async () => {
          const occInCacheThen = JobOccurrence.getOccurrence(occUUID);
          const occInDBThen = await JobOccurrence.getOccurrenceDB(occGuid);
          const jobInCacheThen = Job.getJob('testSpecificTimeJob99');
          const jobInDBThen = await Job.getJobDB('testSpecificTimeJob99');
          try{
            occInCacheThen.status.should.eql(OccurrenceStatusEnum.failed);
            occInCacheThen.endDateTime.should.be.ok();
            occInCacheThen.steps.should.containDeep([
              { status: OccurrenceStatusEnum.finished, output: 'JobProgram' },
              { status: OccurrenceStatusEnum.failed }
            ]);
            occInCacheThen.applicationLog.should.containDeep([
              { message: {
                  msgCat: 'applicationLog', msgName: 'DEFAULT', msgType: 'I',
                  msgShortText: 'Successfully finished',
                  msgLongText: 'Successfully finished'}
              },
              { message: {
                  msgCat: 'applicationLog', msgName: 'DEFAULT', msgType: 'E',
                  msgShortText: 'Error happened in application log',
                  msgLongText: 'Error happened in application log'}
              },
              { message: {
                  msgCat: 'applicationLog', msgName: 'DEFAULT', msgType: 'E',
                  msgShortText: 'Error happened in exception',
                  msgLongText: 'Error happened in exception'}
              }
            ]);
            occInDBThen.status.should.eql(OccurrenceStatusEnum.failed);
            occInDBThen.endDateTime.should.eql(occInCacheThen.endDateTime);
            occInDBThen.steps.should.containDeep([
              { status: OccurrenceStatusEnum.finished, output: 'JobProgram' },
              { status: OccurrenceStatusEnum.failed }
            ]);
            occInDBThen.applicationLog.should.containDeep([
              { message: {
                  msgCat: 'applicationLog', msgName: 'DEFAULT', msgType: 'I',
                  msgShortText: 'Successfully finished',
                  msgLongText: 'Successfully finished'}
              },
              { message: {
                  msgCat: 'applicationLog', msgName: 'DEFAULT', msgType: 'E',
                  msgShortText: 'Error happened in application log',
                  msgLongText: 'Error happened in application log'}
              }
            ]);
            jobInCacheThen.should.containDeep({
              status: JobStatusEnum.completed,
              finishedOccurrences: 0,
              failedOccurrences: 1,
              canceledOccurrences: 0
            });
            jobInDBThen.should.containDeep({
              status: JobStatusEnum.completed,
              finishedOccurrences: 0,
              failedOccurrences: 1,
              canceledOccurrences: 0
            });
            resolve(0);
          } catch (e) {
            reject(e)
          }
        }, 2000);
      })
    });

    it('should success in changing a scheduled job', async () => {
      jobStart = new Date();
      jobStart.setSeconds(jobStart.getSeconds() + 5);
      jobDefinition.startCondition.specificTime = jobStart;
      jobDefinition.name = 'testSpecificTimeJob98';
      const job = new Job(jobDefinition);
      await job.createJobDB();
      jobGuid2 = job.INSTANCE_GUID;
      const result = await job.scheduleOccurrences();
      result.should.eql({jobName: 'testSpecificTimeJob98', numOcc: 1});
      const occInCache = JobOccurrence.getOccurrences({jobName: 'testSpecificTimeJob98'})[0];
      occInCache.should.containDeep({
        jobName: 'testSpecificTimeJob98',
        status: OccurrenceStatusEnum.ready
      });
      occGuid2 = occInCache.instance.INSTANCE_GUID;
      jobStart = new Date();
      jobStart.setSeconds(jobStart.getSeconds() + 2);
      jobDefinition.startCondition.specificTime = jobStart;
      jobDefinition.steps = [
        {program: 'JobProgram', parameters: {param1: 'gogo1'}}
      ];
      await Job.changeJob(jobDefinition);
      const jobEntryInDB = await Job.getJobDB('testSpecificTimeJob98');
      const jobEntryInCache = Job.getJob('testSpecificTimeJob98');
      jobEntryInCache.status.should.eql(JobStatusEnum.scheduled);
      jobEntryInCache.name.should.eql('testSpecificTimeJob98');
      jobEntryInDB.should.containDeep({
        name: 'testSpecificTimeJob98',
        status: 1,
        description: { DEFAULT: 'job description' },
        identity: { id: 'DH001' },
        steps: [
          { program: 'JobProgram', parameters: '{"param1":"gogo1"}' }
        ],
        startCondition: {
          mode: 1,
          specificTime: jobStart.toISOString().slice(0, 19).replace('T', ' ')
        },
        outputSetting: { console2ApplicationLog: 0},
        finishedOccurrences: 0,
        failedOccurrences: 0,
        canceledOccurrences: 1
      });
      occInCache.status.should.eql(OccurrenceStatusEnum.canceled);
      const newOccInCache = JobOccurrence.getOccurrences(
        {jobName: 'testSpecificTimeJob98', status: [OccurrenceStatusEnum.ready]})[0];
      occGuid3 = newOccInCache.instance.INSTANCE_GUID;
      newOccInCache.should.containDeep({
        jobName: 'testSpecificTimeJob98',
        status: OccurrenceStatusEnum.ready
      });
    });

    after('Clear DB', async () => {
      await deleteInstance(jobGuid);
      await deleteInstance(jobGuid2);
      await deleteInstance(occGuid);
      await deleteInstance(occGuid2);
      await deleteInstance(occGuid3);
    })
  });

  describe('Create a recursive job', () => {
    let jobGuid = '';
    let occGUIDs = [];
    let occUUIDs = [];
    let now = '';
    let end = '';
    const jobDefinition = {
      name: 'testRecursiveTimeJob99',
      description: 'job description',
      steps: [
        {program: 'JobProgram', parameters: {param1: 'gogo1'}}
      ],
      startCondition: {mode: 2},
      identity: {id: 'DH001'},
      outputSetting: {console2ApplicationLog: true}
    };

    it('should save the job correctly', async () => {
      jobDefinition.startCondition.cronString = '*/2 * * * * *';
      now = new Date();
      end = new Date();
      end.setSeconds(now.getSeconds() + 5);
      jobDefinition.startCondition.cronCurrentDate = now;
      jobDefinition.startCondition.cronEndDate = end;
      const job = new Job(jobDefinition);
      await job.createJobDB();
      const jobEntryInDB = await Job.getJobDB('testRecursiveTimeJob99');
      const jobEntryInCache = Job.getJob('testRecursiveTimeJob99');
      jobGuid = jobEntryInCache.instance.INSTANCE_GUID;
      jobEntryInCache.status.should.eql(JobStatusEnum.initial);
      jobEntryInCache.name.should.eql('testRecursiveTimeJob99');
      now = now.toISOString().slice(0, 19).replace('T', ' ');
      end = end.toISOString().slice(0, 19).replace('T', ' ');
      jobEntryInDB.should.containDeep({
        name: 'testRecursiveTimeJob99',
        status: 0,
        description: { DEFAULT: 'job description' },
        identity: { id: 'DH001' },
        steps: [
          { program: 'JobProgram', parameters: '{"param1":"gogo1"}' }
        ],
        startCondition: {
          mode: 2, cronString: '*/2 * * * * *',
          cronCurrentDate: now,
          cronEndDate: end
        },
        outputSetting: { console2ApplicationLog: 1 },
        finishedOccurrences: 0,
        failedOccurrences: 0,
        canceledOccurrences: 0
      });
    });

    it('should schedule the recursive job and run successfully', async () => {
      const jobInstance = Job.getJob('testRecursiveTimeJob99').instance;
      const result = await jobInstance.scheduleOccurrences();
      const occInCache = JobOccurrence.getOccurrences({jobName: 'testRecursiveTimeJob99'});
      result.jobName.should.eql( 'testRecursiveTimeJob99');
      result.numOcc.should.aboveOrEqual(2);
      occInCache.length.should.eql(result.numOcc);
      occInCache[0].should.containDeep({
        jobName: 'testRecursiveTimeJob99',
        steps: [
          { program: 'JobProgram', parameters: { param1: 'gogo1'} }
        ],
        startCondition: {
          mode: 2, cronString: '*/2 * * * * *',
          cronCurrentDate: now,
          cronEndDate: end
        },
      });
      occGUIDs = occInCache.map( occ => occ.instance.INSTANCE_GUID);
      occUUIDs = occInCache.map( occ => occ.uuid);
      let occInDB = await JobOccurrence.getOccurrenceDB(occGUIDs[0]);
      const expectResult = {
        uuid: occUUIDs[0],
        jobName: 'testRecursiveTimeJob99',
        scheduledDateTime: occInCache[0].scheduledDateTime,
        actualStartDateTime: null,
        endDateTime: null,
        identity: { id: 'DH001' },
        steps: [
          { program: 'JobProgram', parameters: '{"param1":"gogo1"}', output: null }
        ],
        startCondition: {
          mode: 2, cronString: '*/2 * * * * *',
          cronCurrentDate: now,
          cronEndDate: end
        },
        outputSetting: {console2ApplicationLog: 1}
      };
      occInDB.should.containDeep(expectResult);
      occInDB = await JobOccurrence.getOccurrenceDB(occGUIDs[1]);
      expectResult.uuid = occInCache[1].uuid;
      expectResult.scheduledDateTime = occInCache[1].scheduledDateTime;
      occInDB.should.containDeep(expectResult);
      console.log(now);
      for (const occ of occInCache) {
        console.log(occ.scheduledDateTime);
      }
      console.log(end);
    });

    it('should has the first occurrence running', async () => {
      const timeout = occUUIDs.length === 2 ? 1450: 700;
      console.log(occUUIDs.length, timeout);
      return new Promise( (resolve, reject) => {
        setTimeout( async () => {
          const occInCacheThen = JobOccurrence.getOccurrence(occUUIDs[0]);
          const occInDBThen = await JobOccurrence.getOccurrenceDB(occGUIDs[0]);
          try {
            occInCacheThen.status.should.eql(OccurrenceStatusEnum.running);
            occInCacheThen.actualStartDateTime.should.be.ok();
            occInCacheThen.steps.should.containDeep([
              { program: 'JobProgram', status: OccurrenceStatusEnum.running }
            ]);
            occInDBThen.status.should.eql(OccurrenceStatusEnum.running);
            occInDBThen.actualStartDateTime.should.eql(occInCacheThen.actualStartDateTime);
            resolve(0);
          } catch (e) {
            reject(e);
          }
        }, timeout);
      })
    });

    it('should has the first occurrence finished', async () => {
      return new Promise( (resolve, reject) => {
        setTimeout(async () => {
          const occInCacheThen = JobOccurrence.getOccurrence(occUUIDs[0]);
          const occInDBThen = await JobOccurrence.getOccurrenceDB(occGUIDs[0]);
          const jobInCacheThen = Job.getJob('testRecursiveTimeJob99');
          const jobInDBThen = await Job.getJobDB('testRecursiveTimeJob99');
          try {
            occInCacheThen.status.should.eql(OccurrenceStatusEnum.finished);
            occInCacheThen.endDateTime.should.be.ok();
            occInCacheThen.steps.should.containDeep([
              {status: OccurrenceStatusEnum.finished, output: 'JobProgram'}
            ]);
            occInCacheThen.applicationLog.should.containDeep([
              {
                message: {
                  msgCat: 'applicationLog', msgName: 'DEFAULT', msgType: 'I',
                  msgShortText: 'start running...', msgLongText: 'start running...'
                }
              },
              {
                message: {
                  msgCat: 'applicationLog', msgName: 'DEFAULT', msgType: 'I',
                  msgShortText: "JobProgram { param1: 'gogo1' }",
                  msgLongText: "JobProgram { param1: 'gogo1' }"
                }
              },
              {
                message: {
                  msgCat: 'applicationLog', msgName: 'DEFAULT', msgType: 'I',
                  msgShortText: 'Successfully finished',
                  msgLongText: 'Successfully finished'
                }
              },
              {
                message: {
                  msgCat: 'applicationLog', msgName: 'DEFAULT', msgType: 'I',
                  msgShortText: 'finished!', msgLongText: 'finished!'
                }
              }
            ]);
            occInDBThen.status.should.eql(OccurrenceStatusEnum.finished);
            occInDBThen.endDateTime.should.eql(occInCacheThen.endDateTime);
            occInDBThen.steps.should.containDeep([
              {status: OccurrenceStatusEnum.finished, output: 'JobProgram'}
            ]);
            occInDBThen.applicationLog.should.containDeep(occInCacheThen.applicationLog);
            jobInCacheThen.should.containDeep({
              status: JobStatusEnum.scheduled,
              finishedOccurrences: 1,
              failedOccurrences: 0,
              canceledOccurrences: 0
            });
            jobInDBThen.should.containDeep({
              status: JobStatusEnum.scheduled,
              finishedOccurrences: 1,
              failedOccurrences: 0,
              canceledOccurrences: 0
            });
            resolve(0);
          } catch (e) {
            reject(e);
          }
        }, 1800);
      })
    });

    it('should has the second occurrence finished', async () => {
      return new Promise( (resolve, reject) => {
        setTimeout(async () => {
          const occInCacheThen = JobOccurrence.getOccurrence(occUUIDs[1]);
          const occInDBThen = await JobOccurrence.getOccurrenceDB(occGUIDs[1]);
          const jobInCacheThen = Job.getJob('testRecursiveTimeJob99');
          const jobInDBThen = await Job.getJobDB('testRecursiveTimeJob99');
          try {
            occInCacheThen.status.should.eql(OccurrenceStatusEnum.finished);
            occInCacheThen.endDateTime.should.be.ok();
            occInCacheThen.steps.should.containDeep([
              {status: OccurrenceStatusEnum.finished, output: 'JobProgram'}
            ]);
            occInDBThen.status.should.eql(OccurrenceStatusEnum.finished);
            occInDBThen.endDateTime.should.eql(occInCacheThen.endDateTime);
            occInDBThen.steps.should.containDeep([
              {status: OccurrenceStatusEnum.finished, output: 'JobProgram'}
            ]);
            occInDBThen.applicationLog.should.containDeep(occInCacheThen.applicationLog);
            jobInCacheThen.should.containDeep({
              status: occGUIDs.length === 2? JobStatusEnum.completed : JobStatusEnum.scheduled,
              finishedOccurrences: 2,
              failedOccurrences: 0,
              canceledOccurrences: 0
            });
            jobInDBThen.should.containDeep({
              status: occGUIDs.length === 2? JobStatusEnum.completed : JobStatusEnum.scheduled,
              finishedOccurrences: 2,
              failedOccurrences: 0,
              canceledOccurrences: 0
            });
            resolve(0);
          } catch (e) {
            reject(e);
          }
        }, 3000);
      })
    });

    after('Clear DB', async () => {
      await deleteInstance(jobGuid);
      for (const guid of occGUIDs) {
        await deleteInstance(guid);
      }
    })
  });

  after('Close the MDB', (done) => {
    jor.EntityDB.closeMDB(done);
  });
});
