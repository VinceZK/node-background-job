import express from "express";
import JobCtrl from "./controller/jobCtrl.js";
export const router = express.Router();

// Entity Instance Service
router.post('/api/jobs', JobCtrl.createJob);
router.get('/api/jobs/:name', JobCtrl.getJob);
router.post('/api/jobs/schedule', JobCtrl.scheduleJobs);
router.post('/api/jobs/cancel', JobCtrl.cancelJobs);
router.get('/api/jobs', JobCtrl.searchJobs);
router.get('/api/jobs/:name/occurrences', JobCtrl.getJobOccurrences);
router.delete('/api/jobs/occurrences', JobCtrl.cancelOccurrence);
router.get('/api/jobPrograms', JobCtrl.searchJobPrograms);
router.get('/api/jobPrograms/:name', JobCtrl.getJobProgramDefinition);
