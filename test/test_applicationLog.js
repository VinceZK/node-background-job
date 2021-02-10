import JobProgram from "../server/jobProgram.js";
import Job from "../server/job.js";
import JobOccurrence from "../server/jobOccurrence.js";
import ApplicationLog from "../server/applicationLog.js";

describe('Application log class tests',  () => {
  before('Register a test job program and a test job',  () => {
    JobProgram.registerJobProgram(
      'JobProgram',
      {
        className: 'JobProgram',
        parameterGroups: {
          GROUP1: { position: 1, text: { default: 'text of group'} }},
        parameterDefinitions: {
          param1: { position: 1, text: {default: 'Label1'}, group: 'GROUP1'} }
      });
    let specificTime = new Date();
    specificTime.setSeconds(specificTime.getSeconds() + 1);
    const job = new Job(  {
      name: 'applicationLog',
      description: 'job description',
      steps: [
        {program: 'JobProgram', parameters: {param1: 'gogo1'}}
      ],
      startCondition: { mode: 1, specificTime: specificTime.toString() }
    });
    job.scheduleOccurrences();
  });

  it('should fail', () => {
    try {
      new ApplicationLog('abcd');
      (1).should.eql(2);
    } catch (e) {
      e.message.msgName.should.eql('OCCURRENCE_NOT_EXIST');
    }
  });

  it('should success', () => {
    const jobOccurrenceEntry = JobOccurrence.getOccurrences({jobName: 'applicationLog'})[0];
    const appLog = jobOccurrenceEntry.instance.applicationLog;
    appLog.log('Log level: %s', 'info->general');
    appLog.info('Log level: %s', 'info');
    appLog.debug('Log level: %s', 'debug');
    appLog.error('Log level: %s', 'error');
    appLog.warn('Log level: %s', 'warn');
    appLog.infoMessage('applicationLog', 'DEFAULT', 'info message');
    appLog.successMessage('applicationLog', 'DEFAULT', 'message message');
    appLog.warningMessage('applicationLog', 'DEFAULT', 'warning message');
    appLog.errorMessage('applicationLog', 'DEFAULT', 'error message');
    jobOccurrenceEntry.applicationLog.length.should.eql(9);
    jobOccurrenceEntry.applicationLog.should.containDeep([
      { message: {
          msgShortText: 'Log level: info->general', msgLongText: 'Log level: info->general', msgType: 'I'}
      },
      { message: {
          msgShortText: 'Log level: info', msgLongText: 'Log level: info', msgType: 'I' }
      },
      { message: {
          msgShortText: 'Log level: debug', msgLongText: 'Log level: debug', msgType: 'I' }
      },
      { message: {
          msgShortText: 'Log level: error', msgLongText: 'Log level: error', msgType: 'E' }
      },
      { message: {
          msgShortText: 'Log level: warn', msgLongText: 'Log level: warn', msgType: 'W' }
      },
      { message: {
          msgShortText: 'info message', msgLongText: 'info message', msgType: 'I'}
      },
      { message: {
          msgShortText: 'message message', msgLongText: 'message message', msgType: 'S'}
      },
      { message: {
          msgShortText: 'warning message', msgLongText: 'warning message', msgType: 'W'}
      },
      { message: {
          msgShortText: 'error message', msgLongText: 'error message', msgType: 'E'}
      }]);
  })
});
