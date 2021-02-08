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
    const occurrences = JobOccurrence.getOccurrences({uuid: this.uuid});
    if (occurrences.length === 0) {
      throw new JobError('OCCURRENCE_NOT_EXIST');
    }
    this.logs = occurrences[0].applicationLog;
    if (!message) {
      const msgStore = new MsgArrayStore(msgArray);
      this.message = new Message(msgStore, 'EN');
    }
  }

  log(...data) {
    let now = new Date().toUTCString();
    super.log(`info [${now}]`, util.format(...data));
    const logEntry = {
      time: now,
      message: this.message.report('applicationLog', 'DEFAULT', 'I', util.format(...data))
    };
    this.logs.push(logEntry);
  }

  info(...data) {
    this.log(...data);
  }

  debug(...data) {
    this.log(...data);
  }

  error(...data) {
    let now = new Date().toUTCString();
    super.error(`error [${now}]`, util.format(...data));
    const logEntry = {
      time: now,
      message: this.message.report('applicationLog', 'DEFAULT', 'E', util.format(...data))
    };
    this.logs.push(logEntry);
  }

  warn(...data) {
    let now = new Date().toUTCString();
    super.warn(`warn [${now}]`, util.format(...data));
    const logEntry = {
      time: now,
      message: this.message.report('applicationLog', 'DEFAULT', 'W', util.format(...data))
    };
    this.logs.push(logEntry);
  }

  infoMessage(msgCat, msgName, ...args) {
    this.#message('I', msgCat, msgName, ...args);
  }

  successMessage(msgCat, msgName, ...args) {
    this.#message('S', msgCat, msgName, ...args);
  }

  warningMessage(msgCat, msgName, ...args) {
    this.#message('W', msgCat, msgName, ...args);
  }

  errorMessage(msgCat, msgName, ...args) {
    this.#message('E', msgCat, msgName, ...args);
  }

  #message(msgType, msgCat, msgName, ...args) {
    let now = new Date().toUTCString();
    const logEntry = {
      time: now,
      message: this.message.report(msgCat, msgName, msgType, ...args)
    };
    this.logs.push(logEntry);
  }

}
