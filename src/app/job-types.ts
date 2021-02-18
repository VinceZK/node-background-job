import {Message} from 'ui-message-angular';

export class Job {
  name!: string;
  description?: Text;
  status!: number;
  mode!: number;
  identity?: Identity;
  steps!: Step[];
  startCondition!: StartCondition;
  outputSetting?: OutputSetting;
  finishedOccurrences?: number;
  failedOccurrences?: number;
  canceledOccurrences?: number;
  createdBy?: string;
  createTime?: string;
  lastChangedBy?: string;
  lastChangeTime?: string;
}

export class JobOccurrence {
  uuid!: string;
  jobName!: string;
  status!: number;
  steps!: Step[];
  startCondition!: StartCondition;
  scheduledDateTime!: string;
  actualStartDateTime?: string;
  endDateTime?: string;
  applicationLog?: ApplicationLog[];
}

export class Identity {
  id!: string;
}

export class Step {
  program!: string;
  parameters?: ParameterValueParis;
  status?: number;
  output?: any;
}

export class ParameterValueParis {
  [key: string]: any;
}

export class StartCondition {
  mode!: number;
  specificTime?: string | null;
  cronString?: string | null;
  cronCurrentDate?: string | null;
  cronEndDate?: string | null;
  tz?: string | null;
}

export class OutputSetting {
  console2ApplicationLog?: boolean;
}

export class ApplicationLog {
  time!: string;
  message!: Message;
}

export class JobProgram {
  name!: string;
  className!: string;
  description?: Text;
  parameterDefinitions?: ParameterDefinitions;
}

export class ParameterDefinitions {
  [key: string]: ParameterDefinition;
}

export class ParameterDefinition {
  text?: Text;
  parameters!: Parameters;
}

export class Parameter {
  type?: number;
  dataElement?: string;
  text?: Text;
  defaultValue?: string;
  multiple = false;
  mandatory = false;
  hidden = false;
}

export class Parameters {
  [key: string]: Parameter;
}

export class Text {
  DEFAULT!: string;
  [key: string]: string;
}
