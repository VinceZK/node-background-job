export const msgArray = [
// Job program errors:
  { msgCat: "jobProgram",
    msgName: "MISSING_JOB_PROGRAM_NAME",
    msgText: {
      EN: {shortText: "Job program name is missing", longText: "dummy"}
    }
  },
  { msgCat: "jobProgram",
    msgName: "EMPTY_JOB_PROGRAM_NAME",
    msgText: {
      EN: {shortText: "Job program name is empty", longText: "dummy"}
    }
  },
  { msgCat: "jobProgram",
    msgName: "MISSING_JOB_PROGRAM_DEFINITION",
    msgText: {
      EN: {shortText: "Job program definition is missing", longText: "dummy"}
    }
  },
  { msgCat: "jobProgram",
    msgName: "INVALID_JOB_PROGRAM",
    msgText: {
      EN: {shortText: "Job program %s is invalid", longText: "dummy"}
    }
  },
  { msgCat: "jobProgram",
    msgName: "MISSING_JOB_CLASS_NAME",
    msgText: {
      EN: {shortText: "Job class(javascript class) is missing", longText: "dummy"}
    }
  },
  { msgCat: "jobProgram",
    msgName: "INVALID_JOB_PROGRAM_CLASS",
    msgText: {
      EN: {shortText: "Job program class %s is invalid", longText: "dummy"}
    }
  },
  { msgCat: "jobProgram",
    msgName: "NO_PARAMETERS_IN_GROUP",
    msgText: {
      EN: {shortText: "There is no parameter in the group %s", longText: "dummy"}
    }
  },
  { msgCat: "jobProgram",
    msgName: "INVALID_PARAMETER_TYPE",
    msgText: {
      EN: {shortText: "%s is an invalid parameter type", longText: "dummy"}
    }
  },
  { msgCat: "jobProgram",
    msgName: "DUPLICATE_JOB_PARAMETERS",
    msgText: {
      EN: {shortText: "Parameter %s is duplicated", longText: "dummy"}
    }
  },
  { msgCat: "jobProgram",
    msgName: "INVALID_PARAMETER",
    msgText: {
      EN: {shortText: "Parameter %s is invalid", longText: "dummy"}
    }
  },
  { msgCat: "jobProgram",
    msgName: "MANDATORY_PARAMETER_VALUE_MISSING",
    msgText: {
      EN: {shortText: "Mandatory parameter %s has no value assigned", longText: "dummy"}
    }
  },
  { msgCat: "jobProgram",
    msgName: "INVALID_DISPLAY_IN",
    msgText: {
      EN: {shortText: "%s is not an allowed value for displayIn", longText: "dummy"}
    }
  },
  { msgCat: "jobProgram",
    msgName: "INVALID_DISPLAY_AS",
    msgText: {
      EN: {shortText: "%s is not an allowed value for displayAs", longText: "dummy"}
    }
  },
  { msgCat: "jobProgram",
    msgName: "INVALID_COLUMN_SPAN",
    msgText: {
      EN: {shortText: "%s is not an allowed value for columnSpan in parameter %s", longText: "dummy"}
    }
  },

// Job errors:
  { msgCat: "job",
    msgName: "GENERIC_ERROR",
    msgText: {
      EN: {shortText: "%s", longText: "dummy"}
    }
  },
  { msgCat: "job",
    msgName: "JOB_NAME_DUPLICATE",
    msgText: {
      EN: {shortText: "Job name '%s' is already used", longText: "dummy"}
    }
  },
  { msgCat: "job",
    msgName: "SCHEDULED_DATE_PAST",
    msgText: {
      EN: {shortText: "Scheduled date is before", longText: "dummy"}
    }
  },
  { msgCat: "job",
    msgName: "END_DATE_BEFORE_CURRENT_DATE",
    msgText: {
    EN: {shortText: "End date is before the start date", longText: "dummy"}
    }
  },
  { msgCat: "job",
    msgName: "TIMESPAN_IS_PAST",
    msgText: {
      EN: {shortText: "Timespan is in past", longText: "dummy"}
    }
  },
  { msgCat: "job",
    msgName: "INCORRECT_JOB_STATUS_CHANGE",
    msgText: {
      EN: {shortText: "Job status is not allowed for the change from %s to %s", longText: "dummy"}
    }
  },
  { msgCat: "job",
    msgName: "JOB_PROGRAM_NOT_EXIST",
    msgText: {
      EN: {shortText: "Job program '%s' doesn't exist!", longText: "dummy"}
    }
  },
  { msgCat: "job",
    msgName: "INCORRECT_JOB_OCCURRENCE_STATUS_CHANGE",
    msgText: {
      EN: {shortText: "Job occurrence status is not allowed for the change from %s to %s", longText: "dummy"}
    }
  },
  { msgCat: "job",
    msgName: "JOB_OCCURRENCE_NOT_READY_FOR_RUN",
    msgText: {
      EN: {shortText: "Job occurrence is not ready for run, the current status is %s", longText: "dummy"}
    }
  },
  { msgCat: "job",
    msgName: "MISSING_JOB_NAME",
    msgText: {
      EN: {shortText: "Job name is missing", longText: "dummy"}
    }
  },
  { msgCat: "job",
    msgName: "MISSING_JOB_MODE",
    msgText: {
      EN: {shortText: "Job mode is missing", longText: "dummy"}
    }
  },
  { msgCat: "job",
    msgName: "UNSUPPORTED_JOB_MODE",
    msgText: {
      EN: {shortText: "Unsupported job mode", longText: "dummy"}
    }
  },
  { msgCat: "job",
    msgName: "MISSING_SPECIFIC_TIME",
    msgText: {
      EN: {shortText: "The specific time is missing", longText: "dummy"}
    }
  },
  { msgCat: "job",
    msgName: "INVALID_DATE_STRING",
    msgText: {
      EN: {shortText: "The date string %s is invalid", longText: "dummy"}
    }
  },
  { msgCat: "job",
    msgName: "MISSING_JOB_START_CONDITION",
    msgText: {
      EN: {shortText: "Missing job start condition", longText: "dummy"}
    }
  },
  { msgCat: "job",
    msgName: "MISSING_JOB_PROGRAM",
    msgText: {
      EN: {shortText: "Job program is missing", longText: "dummy"}
    }
  },
  { msgCat: "job",
    msgName: "INVALID_JOB_PROGRAM",
    msgText: {
      EN: {shortText: "Job program %s is invalid", longText: "dummy"}
    }
  },
  { msgCat: "job",
    msgName: "JOB_NOT_EXIST",
    msgText: {
      EN: {shortText: "Job %s doesn't exist", longText: "dummy"}
    }
  },
  { msgCat: "job",
    msgName: "OCCURRENCE_NOT_EXIST",
    msgText: {
      EN: {shortText: "Job occurrence doesn't exist", longText: "dummy"}
    }
  },
  { msgCat: "job",
    msgName: "MAX_TIMEOUT",
    msgText: {
      EN: {shortText: "You cannot schedule at %n hours later", longText: "dummy"}
    }
  },
  { msgCat: "job",
    msgName: "HOURS_IS_NOT_A_NUMBER",
    msgText: {
      EN: {shortText: "Hours given %s is not a number", longText: "dummy"}
    }
  },

  // Success Message
  { msgCat: "job",
    msgName: "JOB_IS_SAVED",
    msgText: {
      EN: {shortText: "Job %s is saved", longText: "dummy"}
    }
  },
  { msgCat: "job",
    msgName: "JOB_IS_SCHEDULED",
    msgText: {
      EN: {shortText: "Job %s is scheduled", longText: "dummy"}
    }
  },
  { msgCat: "job",
    msgName: "JOB_IS_CANCELED",
    msgText: {
      EN: {shortText: "Job %s is canceled", longText: "dummy"}
    }
  },
  { msgCat: "job",
    msgName: "OCCURRENCE_IS_CANCELED",
    msgText: {
      EN: {shortText: "Occurrence %s of Job %s is canceled", longText: "dummy"}
    }
  },
  { msgCat: "job",
    msgName: "JOB_CANNOT_BE_CHANGED",
    msgText: {
      EN: {shortText: "Job in status %s cannot be changed", longText: "dummy"}
    }
  }
];
