import Job from '../server/job.js';
import JobProgram from "../server/jobProgram.js";

describe.only('Job class tests',  () => {
  before('Register a dummy job program',  () => {
    JobProgram.registerJobProgram('JobProgram', {className: 'JobProgram'});
  });

  describe('Immediately run', () => {
    it('should success', async () => {
      const job = new Job(  {
        name: 'testJob',
        description: 'job description',
        steps: [
          {program: 'JobProgram', parameters: {param1: 'gogo1'}},
          {program: 'JobProgram', parameters: {param1: 'gogo2'}}
        ],
        startCondition: { mode: 0 }
      });
      try{
        job.scheduleOccurrences();
      } catch (e) {
        console.log(e.message);
      }
      return new Promise( resolve => {
        setTimeout( () => {resolve(1);}, 2000);
      })
    })
  })
});
