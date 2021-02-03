import {Message, MsgArrayStore} from "ui-message";
import {msgArray} from "../data/message_job_server.js";

const msgStore = new MsgArrayStore(msgArray);
export const message = new Message(msgStore, 'EN');

export class JobError extends Error {
  constructor(msgName, ...args) {
    super(msgName);
    this.message = message.report('job', msgName, 'E', ...args);
  }
}

export class JobProgramError extends Error {
  constructor(msgName, ...args) {
    super(msgName);
    this.message = message.report('jobProgram', msgName, 'E', ...args);
  }
}


