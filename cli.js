#!/usr/bin/env node

import JobProgram from "./server/jobProgram.js";
import TestJobProgram from "./server/jobPrograms/testJobProgram.js";
import Job from "./server/job.js";
import {JobStatusEnum} from "./server/constants.js";
import http from "http";
import JobOccurrence from "./server/jobOccurrence.js";

const [, , ...args] = process.argv;

console.log(`Hello World ${args}`);

