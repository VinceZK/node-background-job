import JobProgram from '../server/jobProgram.js';

describe('Job program super class tests', function () {

  before('Register a dummy job program', () => {
    JobProgram.registerJobProgram('testProgram', {className: 'TestProgram'});
  });

  describe('#registerJobProgram', () => {
    it('should fail: missing job program name', () => {
      try {
        JobProgram.registerJobProgram('', {});
        (1).should.eql(2);
      } catch (e) {
        e.message.msgName.should.eql('MISSING_JOB_PROGRAM_NAME');
      }
    });
    it('should fail: job program name are all white spaces', () => {
      try {
        JobProgram.registerJobProgram(`       `, {});
        (1).should.eql(2);
      } catch (e) {
        e.message.msgName.should.eql('EMPTY_JOB_PROGRAM_NAME');
      }
    });
    it('should fail: program definition is missing', () => {
      try {
        JobProgram.registerJobProgram(`testProgram`);
        (1).should.eql(2);
      } catch (e) {
        e.message.msgName.should.eql('MISSING_JOB_PROGRAM_DEFINITION');
      }
    });
    it('should fail: Classname is missing', () => {
      try {
        JobProgram.registerJobProgram(`testProgram`, {className: ''});
        (1).should.eql(2);
      } catch (e) {
        e.message.msgName.should.eql('MISSING_JOB_CLASS_NAME');
      }
    });
    it('should success: register the job program with definition', () => {
      JobProgram.getJobProgramDefinition('testProgram')
        .should.containEql({ className: 'TestProgram',
                                  parameterGroups: {},
                                  parameterDefinitions: {}  });
      JobProgram.registerJobProgram('testProgram', {
        className: 'JobProgram',
        description: 'Super class of a job program'
      });
      JobProgram.getJobProgramDefinition('testProgram')
        .should.containEql({ className: 'JobProgram',
                                  description: { default: 'Super class of a job program' },
                                  parameterGroups: {},
                                  parameterDefinitions: {} });
    });
    it('should fail: group position is missing', () => {
      try {
        JobProgram.registerJobProgram('testProgram2', {
          className: 'JobProgram2',
          description: { EN: 'description of job program' },
          parameterGroups: { GROUP1: { text: 'text of group' }}
        });
        (1).should.eql(2);
      } catch (e) {
        e.message.msgName.should.eql('MISSING_POSITION');
      }
    });
    it('should fail: group position is incorrect', () => {
      try {
        JobProgram.registerJobProgram('testProgram2', {
          className: 'JobProgram2',
          description: { EN: 'description of job program' },
          parameterGroups: { GROUP1: { position: 'a', text: 'text of group' }}
        });
        (1).should.eql(2);
      } catch (e) {
        e.message.msgName.should.eql('POSITION_IS_NOT_NUMBER');
      }
    });
    it('should fail: parameter position is missing', () => {
      try {
        JobProgram.registerJobProgram('testProgram2', {
          className: 'JobProgram2',
          description: { EN: 'description of job program' },
          parameterGroups: { GROUP1: { position: 1, text: 'text of group' }},
          parameterDefinitions: { PARAM1: { text: 'Label1'}}
        });
        (1).should.eql(2);
      } catch (e) {
        e.message.msgName.should.eql('MISSING_POSITION');
      }
    });
    it('should fail: parameter position is incorrect', () => {
      try {
        JobProgram.registerJobProgram('testProgram2', {
          className: 'JobProgram2',
          description: { EN: 'description of job program' },
          parameterGroups: { GROUP1: { position: 1, text: 'text of group' }},
          parameterDefinitions: { PARAM1: { position: 'a', text: 'Label1' }}
        });
        (1).should.eql(2);
      } catch (e) {
        e.message.msgName.should.eql('POSITION_IS_NOT_NUMBER');
      }
    });
    it('should fail: parameter misses group assignment', () => {
      try {
        JobProgram.registerJobProgram('testProgram2', {
          className: 'JobProgram2',
          description: { EN: 'description of job program' },
          parameterGroups: { GROUP1: { position: 1, text: 'text of group' }},
          parameterDefinitions: { PARAM1: { position: 1, text: 'Label1' }}
        });
        (1).should.eql(2);
      } catch (e) {
        e.message.msgName.should.eql('MISSING_GROUP_ASSIGNMENT');
      }
    });
    it('should fail: parameter is assigned with an invalid group', () => {
      try {
        JobProgram.registerJobProgram('testProgram2', {
          className: 'JobProgram2',
          description: { EN: 'description of job program' },
          parameterGroups: { GROUP1: { position: 1, text: 'text of group' }},
          parameterDefinitions: { PARAM1: { position: 1, text: 'Label1', group: 'xxx' }}
        })
        (1).should.eql(2);
      } catch (e) {
        e.message.msgName.should.eql('INVALID_GROUP');
      }
    });
    it('should success: register the job program with definition', () => {
      JobProgram.registerJobProgram('testProgram2', {
        className: 'JobProgram2',
        description: { EN: 'description of job program' },
        parameterGroups: {
          GROUP1: { position: 1, text: 'text of group' },
          GROUP2: { position: 2 }},
        parameterDefinitions: {
          PARAM1: { position: 1, text: {default: 'Label1'}, group: 'GROUP1', mandatory: true},
          PARAM2: { position: 2, group: 'GROUP2'}}
      });
      JobProgram.getJobProgramDefinition('testProgram2')
        .should.containDeep({
        className: 'JobProgram2',
        description: { EN: 'description of job program' },
        parameterGroups: {
          GROUP1: { position: 1, text: { default: 'text of group'} },
          GROUP2: { position: 2, text: { default: 'GROUP2'} }},
        parameterDefinitions: {
          PARAM1: { position: 1, text: {default: 'Label1'}, group: 'GROUP1', mandatory: true},
          PARAM2: { position: 2, text: {default: 'PARAM2'}, group: 'GROUP2'}}
      })
    });
    it('should fail: invalid parameter', () => {
      try {
        JobProgram.checkParameters('testProgram2', {PARAM1: 'VALUE1', PARAMX: 'VALUEX'});
        (1).should.eql(2);
      } catch (e) {
        e.message.msgName.should.eql('INVALID_PARAMETER');
      }
    });
    it('should fail: mandatory parameter value is missing', () => {
      try {
        JobProgram.checkParameters('testProgram2', {PARAM1: '', PARAM2: 'PARAM2'});
        (1).should.eql(2);
      } catch (e) {
        e.message.msgName.should.eql('MANDATORY_PARAMETER_VALUE_MISSING');
      }
    });
    it('should pass the check', () => {
      should(JobProgram.checkParameters(
        'testProgram2', {PARAM1: 'PARAM1', PARAM2: 'PARAM2'})
      ).not.throw();
    });
  });
});
