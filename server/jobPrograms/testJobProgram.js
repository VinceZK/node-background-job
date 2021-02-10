import JobProgram from "../jobProgram.js";

export default class TestJobProgram extends JobProgram {

  async run(applicationLog) {
    console.log("start running testJobProgram...");
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        console.log(this.name, this.parameters);
        if (this.parameters.param1 === 'value1'){
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

JobProgram.registerJobProgram('testJobProgram', {
  className: 'TestJobProgram',
  class: TestJobProgram,
  description: { EN: 'description of job program' },
  parameterGroups: {
    GROUP1: { position: 1, text: 'text of group' },
    GROUP2: { position: 2 }},
  parameterDefinitions: {
    param1: { position: 1, text: {default: 'Label1'}, group: 'GROUP1', mandatory: true},
    PARAM2: { position: 2, group: 'GROUP2'}}
});
