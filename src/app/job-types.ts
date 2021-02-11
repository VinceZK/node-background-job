import {Message} from 'ui-message-angular';

export class Job {
  name!: string;
  description?: Text;
  status!: number;
  identity?: Identity;
  steps!: Step[];
  startCondition!: StartCondition;
  outputSetting?: OutputSetting;
  finishedOccurrences!: number;
  failedOccurrences!: number;
  canceledOccurrences!: number;
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

export class JobProgram {
  name!: string;
  description?: Text;
  className!: string;
  parameterGroups?: ParameterGroups;
  parameterDefinitions?: ParameterDefinitions;
}

export class Identity {
  id!: string;
}

export class Step {
  program!: string;
  parameters?: Parameters;
  status?: number;
  output?: any;
}

export class Parameters {
  [key: string]: any;
}

export class StartCondition {
  mode!: number;
  specificTime?: string;
  cronString?: string;
  cronOption?: CronOption;
}

export class CronOption {
  currentDate?: string;
  endDate?: string;
  tz?: string;
}

export class OutputSetting {
  console2ApplicationLog?: boolean;
}

export class ApplicationLog {
  time!: string;
  message!: Message;
}

export class ParameterGroups {
  [key: string]: ParameterGroup;
}

export class ParameterGroup {
  position!: number;
  text?: Text;
}

export class ParameterDefinitions {
  [key: string]: ParameterDefinition;
}

export class ParameterDefinition {
  position: number | undefined;
  text?: Text;
  group: string | undefined;
  mandatory: boolean | undefined;
  dataElement?: string;
}

export class Text {
  default!: string;
  [key: string]: string;
}
