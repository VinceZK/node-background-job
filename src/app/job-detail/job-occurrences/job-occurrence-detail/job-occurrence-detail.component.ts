import { Component, OnInit } from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ApplicationLog, JobOccurrence, ParameterDefinitions, Step} from '../../../job-types';
import {Message, MessageService} from 'ui-message-angular';
import {JobService} from '../../../job.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-job-occurrence-detail',
  templateUrl: './job-occurrence-detail.component.html',
  styleUrls: ['./job-occurrence-detail.component.css']
})
export class JobOccurrenceDetailComponent implements OnInit {
  occStatuses: string[] = [];
  occStatusColors: string[] = [];
  messageTypes: any;
  uuid: string | null = '';
  jobOccurrence!: JobOccurrence;
  reducedMainForm!: FormGroup;
  currentParamDefinitions!: ParameterDefinitions;
  currentJobStep!: FormGroup;
  currentOutput: string | undefined;
  currentLongMessage: string | undefined;
  isParametersModalShown = false;
  isOutputModalShown = false;
  isLongMessageShown = false;
  isStartConditionShown = false;

  get displayParametersModal(): string {return this.isParametersModalShown ? 'block' : 'none'; }
  get displayOutputModal(): string {return this.isOutputModalShown ? 'block' : 'none'; }
  get displayLongMessageModal(): string {return this.isLongMessageShown ? 'block' : 'none'; }
  get displayStartConditionModal(): string {return this.isStartConditionShown ? 'block' : 'none'; }

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private jobService: JobService,
              private messageService: MessageService) {
    this.occStatuses = this.jobService.occStatuses;
    this.occStatusColors = this.jobService.occStatusColors;
    this.messageTypes = this.jobService.messageTypes;
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.uuid = params.get('uuid');
        return this.jobService.getOccurrence(this.uuid);
      })
    ).subscribe( data => {
      if ('uuid' in data) {
        this.jobOccurrence = data as JobOccurrence;
        this.reducedMainForm = this.fb.group({
          mode: this.jobOccurrence.startCondition.mode,
          startCondition: this.fb.group({
            mode: [ {value: this.jobOccurrence.startCondition.mode, disabled: true} ],
            specificTime: this.jobOccurrence.startCondition.specificTime,
            cronString: this.jobOccurrence.startCondition.cronString,
            cronCurrentDate: this.jobOccurrence.startCondition.cronCurrentDate,
            cronEndDate: this.jobOccurrence.startCondition.cronEndDate,
            tz: this.jobOccurrence.startCondition.tz
          }),
        });
      } else {
        const errorMessages = data as Message[];
        errorMessages.forEach( msg => this.messageService.add(msg));
      }
    });
  }

  openParameters(step: Step): void {
    this.isParametersModalShown = true;
    this.jobService.getJobProgramDefinition(step.program)
      .subscribe(programDefinition => {
        if (programDefinition && programDefinition.parameterDefinitions) {
          this.currentParamDefinitions = programDefinition.parameterDefinitions;
        }
      });
    this.currentJobStep = this.fb.group({
      program: step.program,
      parameters: step.parameters,
    });
  }

  closeParameters(): void {
    this.isParametersModalShown = false;
  }

  openOutput(step: Step): void {
    this.currentOutput = step.output;
    this.isOutputModalShown = true;
  }

  closeOutput(): void {
    this.isOutputModalShown = false;
  }

  openLongMessage(log: ApplicationLog): void {
    this.currentLongMessage = log.message.msgLongText;
    this.isLongMessageShown = true;
  }

  closeLongMessage(): void {
    this.isLongMessageShown = false;
  }

  openStartCondition(): void {
    this.isStartConditionShown = true;
  }

  closeStartCondition(): void {
    this.isStartConditionShown = false;
  }

  toLocaleString(dateStr: string | undefined): string {
    return this.jobService.toLocaleString(dateStr);
  }
}
