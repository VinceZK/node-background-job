import JobProgram from '../server/jobProgram.js';

describe.only('Job program super class tests', function () {

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
        .should.containDeep({ className: 'TestProgram',
                                   description: {DEFAULT: 'testProgram'},
                                   parameterDefinitions: {}  });
      JobProgram.registerJobProgram('testProgram', {
        className: 'JobProgram',
        description: 'Super class of a job program'
      });
      JobProgram.getJobProgramDefinition('testProgram')
        .should.containDeep({ className: 'JobProgram',
                                  description: { DEFAULT: 'Super class of a job program' },
                                  parameterDefinitions: {} });
    });
    it('should fail: NO_PARAMETERS_IN_GROUP', () => {
      try {
        JobProgram.registerJobProgram('testProgram2', {
          className: 'JobProgram',
          description: { EN: 'description of job program' },
          parameterDefinitions: { GROUP1: { text: 'text of group' }}
        });
        (1).should.eql(2);
      } catch (e) {
        e.message.msgName.should.eql('NO_PARAMETERS_IN_GROUP');
      }
    });
    it('should fail: INVALID_PARAMETER_TYPE', () => {
      try {
        JobProgram.registerJobProgram('testProgram2', {
          className: 'JobProgram',
          description: { EN: 'description of job program' },
          parameterDefinitions: {
            GROUP1: {
              text: 'text of group',
              parameters: { PARAM1: {type: 99} }
            }}
        });
        (1).should.eql(2);
      } catch (e) {
        e.message.msgName.should.eql('INVALID_PARAMETER_TYPE');
      }
    });
    it('should fail: INVALID_DEFAULT_RADIO_OPTION', () => {
      try {
        JobProgram.registerJobProgram('testProgram2', {
          className: 'JobProgram',
          description: { EN: 'description of job program' },
          parameterDefinitions: {
            GROUP1: {
              text: 'text of group',
              parameters: {
                PARAM1: {
                  type: 1,
                  radioButtons: {
                    option1: {DEFAULT: true},
                    option2: {DEFAULT: true}
                  }
                }
              }
            }}
        });
        (1).should.eql(2);
      } catch (e) {
        e.message.msgName.should.eql('INVALID_DEFAULT_RADIO_OPTION');
      }
    });
    it('should fail: DUPLICATE_JOB_PARAMETERS', () => {
      try {
        JobProgram.registerJobProgram('testProgram2', {
          className: 'JobProgram',
          description: { EN: 'description of job program' },
          parameterDefinitions: {
            GROUP1: {
              text: 'text of group1',
              parameters: {
                PARAM1: {type: 1}
              }
            },
            GROUP2: {
              text: 'text of group2',
              parameters: {
                PARAM1: {type: 1}
              }
            }
          }
        });
        (1).should.eql(2);
      } catch (e) {
        e.message.msgName.should.eql('DUPLICATE_JOB_PARAMETERS');
      }
    });
    it('should success: register the job program with complex definition', () => {
      JobProgram.registerJobProgram('testProgram2', {
        className: 'JobProgram',
        description: 'description of job program',
        parameterDefinitions: {
          GROUP1: {
            text: 'text of group',
            parameters: {
              PARAM1: {
                type: 1,
                radioButtons: {
                  option1: {DEFAULT: true},
                  option2: {text: 'text of option2'}
                }
              },
              PARAM2: {
                dataElement: 'JOB_NAME',
                text: {EN: 'text of param2'},
                multiple: true,
                mandatory: true,
                hidden: false
              }
            }
          },
          GROUP2: {
            text: { DEFAULT: 'text of group2'},
            parameters: {
              PARAM3: {}
            }
          },
        }
      });
      JobProgram.getJobProgramDefinition('testProgram2')
        .should.containDeep({
        className: 'JobProgram',
        description: { DEFAULT: 'description of job program'},
        parameterDefinitions: {
          GROUP1: {
            text: {DEFAULT: 'text of group'},
            parameters: {
              PARAM1: {
                type: 1,
                radioButtons: {
                  option1: {DEFAULT: true, text: {DEFAULT: 'option1'}},
                  option2: {text: {DEFAULT: 'text of option2'}}
                }
              },
              PARAM2: {
                dataElement: 'JOB_NAME',
                text: {EN: 'text of param2'},
                multiple: true,
                mandatory: true,
                hidden: false
              }
            }
          },
          GROUP2: {
            text: { DEFAULT: 'text of group2'},
            parameters: {
              PARAM3: {text: {DEFAULT: 'PARAM3'}}
            }
          },
        }
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
        JobProgram.checkParameters('testProgram2', {PARAM1: 'VALUE1', PARAM2: ''});
        (1).should.eql(2);
      } catch (e) {
        e.message.msgName.should.eql('MANDATORY_PARAMETER_VALUE_MISSING');
      }
    });
    it('should pass the check', () => {
      should(JobProgram.checkParameters(
        'testProgram2', {PARAM1: 'VALUE1', PARAM2: 'VALUE2'})
      ).not.throw();
    });
  });
});
