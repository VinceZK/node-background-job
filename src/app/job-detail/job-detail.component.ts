import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {JobService} from '../job.service';
import {DialogService} from '../dialog.service';
import {MessageService, Message} from 'ui-message-angular';
import {switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Job} from '../job-types';
import {existingJobNameValidator} from '../async-validators';
import {JobStartConditionComponent} from './job-start-condition/job-start-condition.component';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  mainForm!: FormGroup;
  textForm!: FormGroup;
  readonly = true;
  isNewMode = false;
  action!: string | null;
  originalValue!: Job;
  changedValue!: Job;
  tabStrip = 1;
  workInProgress = false;
  jobStatuses: string[];
  jobStatusColors: string[];
  showScheduleConfirmation = false;
  showChangeConfirmation = false;
  showCancelConfirmation = false;
  displayStatistics = '';

  @ViewChild(JobStartConditionComponent)
  jobStartConditionComponent!: JobStartConditionComponent;

  get numberOfSteps(): number {
    const stepsArray = this.mainForm.get('steps') as FormArray;
    return stepsArray.length;
  }

  get displayScheduleConfirmation(): string {return this.showScheduleConfirmation ? 'block' : 'none'; }
  get displayChangeConfirmation(): string {return this.showChangeConfirmation ? 'block' : 'none'; }
  get displayCancelConfirmation(): string {return this.showCancelConfirmation ? 'block' : 'none'; }

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private dialogService: DialogService,
              private jobService: JobService,
              private messageService: MessageService) {
    this.jobStatuses = this.jobService.jobStatuses;
    this.jobStatusColors = this.jobService.jobStatusColors;
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.action = params.get('action');
        if (this.action === 'new') {
          this.isNewMode = true;
          return this._createNewEntity();
        } else {
          this.isNewMode = false;
          if (this.action === 'displayFinished' || this.action === 'displayFailed' || this.action === 'displayCanceled') {
            this.tabStrip = 3;
            this.displayStatistics = this.action;
          }
          return this.jobService.getJob(params.get('name'));
        }
      })
    ).subscribe( data => {
      if ('name' in data) {
        this._generateMainForm(data as Job);
        if (this.isNewMode || this.action === 'change') {
          this._switch2EditMode();
        } else {
          this._switch2DisplayMode();
        }
      } else {
        // @ts-ignore
        const errorMessages = data as Message[];
        if (errorMessages && Array.isArray(errorMessages)) {
          errorMessages.forEach( msg => this.messageService.add(msg));
        }
      }
    });
  }

  switchTabStrip(tabStripID: number): void {
    if (this.tabStrip === 2) {
      this.jobStartConditionComponent.updateMainForm();
      if (this.mainForm.invalid) {
        this.messageService.reportMessage('JOB', 'INVALID', 'E');
        return;
      }
    }
    this.tabStrip = tabStripID;
  }

  return2List(): void {
    this.router.navigate(['jobs']);
  }

  refresh(): void {
    this.messageService.clearMessages();
    this.jobService.getJobStatus(this.originalValue.name)
      .subscribe( status => {
        const currentStatus = this.mainForm.get('status')?.value;
        if (status !== null && currentStatus === 1) {
          this.mainForm.get('status')?.setValue(status);
          if (this.tabStrip === 3) {
            this.tabStrip = 0;
            setTimeout( () => { this.tabStrip = 3; }, 200);
          }
        }
      });
  }

  switchEditDisplay(): void {
    if (this.readonly ) {
      this._switch2EditMode();
    } else {
      if (this.mainForm.dirty) {
        this.dialogService.confirm('Discard changes?').subscribe(confirm => {
          if (confirm) {
            this.mainForm.reset(this.originalValue);
            this._switch2DisplayMode();
          }
        });
      } else {
        this._switch2DisplayMode();
      }
    }
    this.messageService.clearMessages();
  }

  _switch2DisplayMode(): void {
    this.readonly = true;
    this.isNewMode = false;

    const jobNameCtrl = this.mainForm.get('name') as FormControl;
    jobNameCtrl.clearAsyncValidators();
    const startConditionCtrl = this.mainForm.get('startCondition') as FormGroup;
    startConditionCtrl.get('mode')?.disable();
    const outputSettingCtrl = this.mainForm.get('outputSetting') as FormGroup;
    outputSettingCtrl.get('console2ApplicationLog')?.disable();

    this.mainForm.markAsPristine();
    // Replace the URL from change to display
    window.history.replaceState({}, '', `/jobs/${jobNameCtrl.value};action=display`);
  }

  _switch2EditMode(): void {
    this.readonly = false;

    const jobNameCtrl = this.mainForm.get('name') as FormControl;
    if (this.isNewMode) {
      jobNameCtrl.setAsyncValidators(
        existingJobNameValidator(this.jobService, this.messageService));
    }
    const startConditionCtrl = this.mainForm.get('startCondition') as FormGroup;
    startConditionCtrl.get('mode')?.enable();
    const outputSettingCtrl = this.mainForm.get('outputSetting') as FormGroup;
    outputSettingCtrl.get('console2ApplicationLog')?.enable();

    // Replace the URL from to display
    if (this.action === 'display') {this.action = 'change'; }
    window.history.replaceState({}, '', `/jobs/${jobNameCtrl.value};action=` + this.action);
  }

  _createNewEntity(): Observable<Job> {
    const jobDetail = {
      name: '', status: 0, mode: 0,
      description: {DEFAULT: ''},
      identity: {id: ''},
      steps: [],
      startCondition: {mode: 0, specificTime: null, cronString: null, cronCurrentDate: null, cronEndDate: null,
        tz: Intl.DateTimeFormat().resolvedOptions().timeZone},
      outputSetting: { console2ApplicationLog: false }
    };
    return of(jobDetail);
  }

  _generateMainForm(data: Job): void {
    this.mainForm = this.fb.group({
      name: [data.name, [Validators.required]],
      status: [data.status],
      mode: [data.mode],
      finishedOccurrences: [data.finishedOccurrences],
      failedOccurrences: [data.failedOccurrences],
      canceledOccurrences: [data.canceledOccurrences],
      createdBy: [data.createdBy],
      createTime: [this.jobService.toLocaleString(data.createTime)],
      lastChangedBy: [data.lastChangedBy],
      lastChangeTime: [this.jobService.toLocaleString(data.lastChangeTime)],
      startCondition: this.fb.group({
        mode: [data.startCondition.mode],
        specificTime: [data.startCondition.specificTime],
        cronString: [data.startCondition.cronString],
        cronCurrentDate: [data.startCondition.cronCurrentDate],
        cronEndDate: [data.startCondition.cronEndDate],
        tz: [data.startCondition.tz],
      }),
      outputSetting: this.fb.group({
        console2ApplicationLog: [data.outputSetting?.console2ApplicationLog]
      })
    });

    this.textForm = this.fb.group({});
    if (!data.description) {
      data.description = {DEFAULT: ''};
    }
    for ( const[key, value] of Object.entries(data.description) ) {
      this.textForm.addControl(key, this.fb.control(value));
    }
    this.mainForm.addControl('description', this.textForm);

    this.mainForm.addControl('identity', this.fb.group({
      id: [data.identity ? data.identity.id : '']
    }));

    this.mainForm.addControl('steps',
      // @ts-ignore
      this.fb.array(data.steps.map(step => this.fb.group({
        program: [step.program],
        parameters: [step.parameters]
      }))));
    this.originalValue = this.mainForm.getRawValue();
  }

  save(needConfirm: boolean = true): void {
    this.messageService.clearMessages();
    if (needConfirm && !this.isNewMode ) {
      this.showChangeConfirmation = true;
      return;
    }
    this.workInProgress = true;
    if (this._composeChanges()) {
      this.jobService.saveJob(this.isNewMode, this.changedValue).subscribe( data => {
        const messages = data as Message[];
        messages.forEach( msg => this.messageService.add(msg));
        if (messages[0].msgName === 'JOB_IS_SAVED') {
          this._retrieveUpdatedValue();
          if (this.isNewMode) {
            this.showScheduleConfirmation = true;
          }
        }
        this.workInProgress = false;
      });
    }
  }

  change(): void {
    this.save(false);
    this.showChangeConfirmation = false;
  }

  cancelChange(): void {
    this.showChangeConfirmation = false;
  }

  schedule(): void {
    this.messageService.clearMessages();
    this.workInProgress = true;
    this.jobService.scheduleJobs([this.mainForm.get('name')?.value]).subscribe( data => {
      const messages = data as Message[];
      messages.forEach( msg => this.messageService.add(msg));
      if (messages[0].msgName === 'JOB_IS_SCHEDULED') {
        this._retrieveUpdatedValue();
      }
      this.workInProgress = false;
      this.showScheduleConfirmation = false;
    });
  }

  cancelSchedule(): void {
    this.showScheduleConfirmation = false;
  }

  cancelJob(): void {
    this.showCancelConfirmation = true;
  }

  cancelCancelJob(): void {
    this.showCancelConfirmation = false;
  }

  confirmCancelJob(): void {
    this.jobService.cancelJobs([this.mainForm.get('name')?.value])
      .subscribe( data => {
        this.showCancelConfirmation = false;
        const messages = data as Message[];
        messages.forEach( msg => this.messageService.add(msg));
        this.refresh();
      });
  }

  _composeChanges(): boolean {
    this.jobStartConditionComponent?.updateMainForm();
    if (this.mainForm.invalid) {
      this.messageService.reportMessage('JOB', 'INVALID', 'E');
      return false;
    }

    if (!this.mainForm.dirty) {
      this.messageService.reportMessage('JOB', 'NO_CHANGE', 'W');
      return false;
    }

    const stepsFormArray = this.mainForm.get('steps') as FormArray;
    if (stepsFormArray.length === 0) {
      this.messageService.reportMessage('JOB', 'NO_STEPS', 'E');
      return false;
    }
    this.changedValue = this.mainForm.getRawValue();
    // console.log(this.changedValue);
    return true;
  }

  _retrieveUpdatedValue(): void {
    // tslint:disable-next-line:no-shadowed-variable
    this.jobService.getJob(this.mainForm.get('name')?.value).subscribe(data => {
      if (data instanceof Message) {
        this.messageService.add(data);
      } else {
        this._switch2DisplayMode();
        this.originalValue = data as Job;
        this.mainForm.reset(this.originalValue);
      }
    });
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.isNewMode || (this.mainForm && this.mainForm.dirty)) {
      return this.dialogService.confirm('Discard changes?');
    } else {
      return true;
    }
  }
}
