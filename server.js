"use strict";
// const job = schedule.scheduleJob('42 * * * * *', function(date){
//   console.log('The answer to life, the universe, and everything!', date);
// });


import cluster from 'cluster';
import http from 'http';
import os from 'os';

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
//
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
