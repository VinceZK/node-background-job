import JobProgram from "../jobProgram.js";

export default class TestJobProgram2 extends JobProgram {

  async run(applicationLog) {
    console.log("start running testJobProgram...");
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        console.log(this.name, this.parameters);
        if (this.parameters.PARAM1 === 'value1'){
          applicationLog.info('application log 1');
          reject(new Error('error happened in testJobProgram'));
        } else {
          console.log('testJobProgram finished!');
        }
        resolve(this.name);
      }, 500);
    })
  }
}

JobProgram.registerJobProgram('testJobProgram2', {
  className: 'TestJobProgram2',
  class: TestJobProgram2,
  description: {
    DEFAULT: 'description of job program',
    EN: 'description of job program'
  },
  parameterDefinitions: {
    GROUP1: {
      text: 'Group One',
      parameters: {
        PARAM1: {
          type: 1,
          text: 'Label1',
          mandatory: true,
        },
        PARAM2: {
          dataElement: 'USER_ID',
        }
      }
    }
  }
});
