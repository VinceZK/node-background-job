import JobOccurrence from "./jobOccurrence.js";
import {Message, MsgArrayStore} from "ui-message";
import util from 'util';
import {JobError} from "./jobError.js";

const msgArray = [
  { msgCat: "applicationLog",
    msgName: "DEFAULT",
    msgText: {
      EN: {shortText: "%s", longText: "%s1"}
    }
  }
];

export default class ApplicationLog extends console.Console {
  constructor(uuid, message) {
    super(process.stdout, process.stderr);
    this.uuid = uuid;
    const occurrence = JobOccurrence.getOccurrence(this.uuid);
    if (!occurrence) {
      throw new JobError('OCCURRENCE_NOT_EXIST');
    }
    this.logs = occurrence.applicationLog;
    if (!message) {
      const msgStore = new MsgArrayStore(msgArray);
      this.message = new Message(msgStore, 'EN');
    }
  }

  log(...data) {
    let now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    super.log(`info [${now}]`, util.format(...data));
    this.#message('I', 'applicationLog', 'DEFAULT', now, util.format(...data));
  }

  info(...data) {
    this.log(...data);
  }

  success(...data) {
    let now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    super.log(`success [${now}]`, util.format(...data));
    this.#message('S', 'applicationLog', 'DEFAULT', now, util.format(...data));
  }

  debug(...data) {
    let now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    super.log(`debug [${now}]`, util.format(...data));
    this.#message('I', 'applicationLog', 'DEFAULT', now, util.format(...data));
  }

  error(...data) {
    let now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    super.error(`error [${now}]`, util.format(...data));
    this.#message('E', 'applicationLog', 'DEFAULT', now, util.format(...data));
  }

  warn(...data) {
    let now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    super.warn(`warn [${now}]`, util.format(...data));
    this.#message('W', 'applicationLog', 'DEFAULT', now, util.format(...data));
  }

  infoMessage(msgCat, msgName, ...args) {
    this.#message('I', msgCat, msgName, null, ...args);
  }

  successMessage(msgCat, msgName, ...args) {
    this.#message('S', msgCat, msgName, null, ...args);
  }

  warningMessage(msgCat, msgName, ...args) {
    this.#message('W', msgCat, msgName, null, ...args);
  }

  errorMessage(msgCat, msgName, ...args) {
    this.#message('E', msgCat, msgName, null, ...args);
  }

  #message(msgType, msgCat, msgName, time, ...args) {
    let now = time ? time : new Date().toISOString().slice(0, 19).replace('T', ' ');
    const logEntry = {
      time: now,
      message: this.message.report(msgCat, msgName, msgType, ...args)
    };
    if (logEntry.message.msgShortText.length > 200) {
      // The DB has the maximum 200 for the short text
      logEntry.message.msgShortText = logEntry.message.msgShortText.substring(0, 200);
    }
    this.logs.push(logEntry);
  }

}
