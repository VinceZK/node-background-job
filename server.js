"use strict";
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import {router} from "./server/routes.js";
import TestJobProgram from "./server/jobPrograms/testJobProgram.js";
import Job from "./server/job.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(compression());

app.use('/', router);

new Job(  {
  name: 'testImmediateJob',
  description: 'immediate job',
  steps: [
    {program: 'testJobProgram', parameters: {param1: 'value1'}}
  ],
  startCondition: { mode: 0 }
});
let now = new Date();
let specificTime = new Date();
specificTime.setSeconds(now.getSeconds() + 2);
new Job(  {
  name: 'testSpecTimeJob',
  description: 'specific time job',
  steps: [
    {program: 'testJobProgram', parameters: {param1: 'value2'}}
  ],
  startCondition: { mode: 1, specificTime:  specificTime.toString() }
});
let end = new Date();
end.setSeconds(now.getSeconds() + 8);
new Job(  {
  name: 'testRecursiveJob',
  description: 'specific time job',
  steps: [
    {program: 'testJobProgram', parameters: {param1: 'value2'}}
  ],
  startCondition: {
    mode: 2,
    cronString: '*/2 * * * * *',
    cronOption: {}
  }
});

process.on('SIGINT',function(){
  console.log("Closing.....");
  process.exit()
});

app.listen(8000, () => console.log('Example app listening on port 8000!'));

// if (cluster.isMaster) {
//   console.log(`Master ${process.pid} is running`);
//
//   // Keep track of http requests
//   let numReqs = 0;
//   // setInterval(() => {
//   //   console.log(`numReqs = ${numReqs}`);
//   // }, 10000);
//
//   // Count requests
//   function messageHandler(msg) {
//     if (msg.cmd && msg.cmd === 'notifyRequest') {
//       numReqs += 1;
//     }
//   }
//
//   // Start workers and listen for messages containing notifyRequest
//   const numCPUs = 2;
//   for (let i = 0; i < numCPUs; i++) {
//     let worker = cluster.fork({server: process.env.server});
//     console.log(`worker ${worker.id}/${worker.process.pid} is generated`);
//   }
//
//   for (const id in cluster.workers) {
//     cluster.workers[id].on('message', messageHandler);
//   }
//
//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`worker ${worker.id}/${worker.process.pid} is dead:, ${worker.isDead()}`);
//     const newWorker = cluster.fork();
//     console.log(`new worker ${newWorker.id}/${newWorker.process.pid}  is generated:`);
//     // console.log(cluster.workers);
//   });
//
// } else {
//   // Worker processes have a http server.
//   http.Server((req, res) => {
//     res.writeHead(200);
//     res.end('hello world\n');
//     console.log('server: ', process.env.server);
//     // Notify master about the request
//     // process.send({ cmd: 'notifyRequest' });
//     process.kill(process.pid);
//   }).listen(8000);
// }
