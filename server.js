"use strict";
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import {router} from "./server/routes.js";
import TestJobProgram from "./server/jobPrograms/testJobProgram.js";
import HttpRequest from "./server/jobPrograms/httpRequest.js";
import Job from "./server/job.js";
import * as jor from 'json-on-relations';
import * as path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, 'app')));
app.get('/', (req, res) => { // The default index.html
  res.sendFile(path.join(__dirname, 'app/job/index.html'));
});

app.use(cors());
app.use(express.json());
app.use(compression());

// Get the default router
if (process.env.USE_DB === 'true') {
  router.use(jor.Routes); // JOR Routes
  router.get('/jor/*', (req, res) => { // Open the jor page
    res.sendFile(path.join(__dirname, 'app/jor/index.html'));
  });
}
router.get('/job/*', (req, res) => { // The default index.html
  res.sendFile(path.join(__dirname, 'app/job/index.html'));
});

app.use('/', router);

import cluster from 'cluster';
import Scheduler from './server/scheduler.js';
import os from 'os';
Scheduler.getPreviousPIDs()
  .catch( errors => console.error(errors))
  .then((prevNumNodes) => {
    const numNodes = process.env.NUM_NODES || os.cpus().length;
    // TODO: if preNumNodes !== numNodes, then apply redistribution of jobs.
    if (cluster.isMaster) {
      for (let i = 0; i < numNodes; i++) {
        let worker = cluster.fork({previousPID: Scheduler.previousPIDs[i] || 0});
        console.log(`worker ${worker.id}/${worker.process.pid} is generated`);
      }

      cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.id}/${worker.process.pid} is dead:, ${worker.isDead()}`);
        const newWorker = cluster.fork();
        console.log(`new worker ${newWorker.id}/${newWorker.process.pid}  is generated:`);
      });
    } else {
      Scheduler.on()
        .then( () => {app.listen(3000, () => console.log('Example app listening on port 3000!'));})
        .catch( error => console.error(`PID ${process.pid}: `, error.message || error));
    }
  });
