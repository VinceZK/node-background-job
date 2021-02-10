import express from "express";
import JobCtrl from "./controller/jobCtrl.js";
export const router = express.Router();

// Entity Instance Service
router.post('/api/jobs', JobCtrl.createJob);
router.get('/api/jobs/:name', JobCtrl.getJob);
router.post('/api/jobs/schedule', JobCtrl.scheduleJob);
router.get('/api/jobs', JobCtrl.getJobs);
router.get('/api/jobs/:name/occurrences', JobCtrl.getJobOccurrences);
router.get('/api/jobPrograms', JobCtrl.getJobPrograms);
router.get('/api/jobPrograms/:name', JobCtrl.getJobProgramDefinition);
