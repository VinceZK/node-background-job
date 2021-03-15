import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {JobService} from '../job.service';
import {
  AttributeBase,
  AttributeControlService,
  EntityService,
  RelationMeta,
  UiMapperService
} from 'jor-angular';
import {DialogService} from '../dialog.service';
import {MessageService, Message} from 'ui-message-angular';
import {switchMap} from 'rxjs/operators';
import {forkJoin, Observable, of} from 'rxjs';
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
  relationMetas!: RelationMeta[];
  jobAttrCtrls!: AttributeBase[];
  jobTextCtrls!: AttributeBase[];
  readonly = true;
  isNewMode = false;
  action!: string | null;
  originalValue!: Job;
  changedValue!: Job;
  tabStrip = 3;

  @ViewChild(JobStartConditionComponent)
  jobStartConditionComponent!: JobStartConditionComponent;

  get numberOfSteps(): number {
    const stepsArray = this.mainForm.get('steps') as FormArray;
    return stepsArray.length;
  }

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private dialogService: DialogService,
              private jobService: JobService,
              private attributeControlService: AttributeControlService,
              private entityService: EntityService,
              private uiMapperService: UiMapperService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.action = params.get('action');
        if (this.action === 'new') {
          this.isNewMode = true;
          return forkJoin([
            this.entityService.getRelationMetaOfEntity('job'),
            this._createNewEntity()
          ]);
        } else {
          this.isNewMode = false;
          return forkJoin([
            this.entityService.getRelationMetaOfEntity('job'),
            this.jobService.getJob(params.get('name'))
          ]);
        }
      })
    ).subscribe( data => {
      this.relationMetas = data[0] as RelationMeta[];
      this.jobAttrCtrls = this.attributeControlService.toAttributeControl(
        // @ts-ignore
        this.relationMetas.find( relationMeta => relationMeta.RELATION_ID === 'job').ATTRIBUTES);
      this.jobTextCtrls = this.attributeControlService.toAttributeControl(
        // @ts-ignore
        this.relationMetas.find( relationMeta => relationMeta.RELATION_ID === 'r_text').ATTRIBUTES);
      if ('name' in data[1]) {
        this._generateMainForm(data[1] as Job);
        if (this.isNewMode || this.action === 'change') {
          this._switch2EditMode();
        } else {
          this._switch2DisplayMode();
        }
      } else {
        // @ts-ignore
        const errorMessages = data[1] as Message[];
        errorMessages.forEach( msg => this.messageService.add(msg));
      }
    });
  }

  getJobAttrCtrlFromID(fieldName: string): AttributeBase {
    // @ts-ignore
    return this.jobAttrCtrls.find( attrCtrl => attrCtrl.name === fieldName);
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
      startCondition: {mode: 0, specificTime: null, cronString: null, cronCurrentDate: null, cronEndDate: null, tz: null},
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
      createTime: [data.createTime],
      lastChangedBy: [data.lastChangedBy],
      lastChangeTime: [data.lastChangeTime],
      startCondition: this.fb.group({
        mode: [data.startCondition.mode],
        specificTime: [data.startCondition.specificTime],
        cronString: [data.startCondition.cronString],
        cronCurrentDate: [data.startCondition.cronCurrentDate],
        cronEndDate: [data.startCondition.cronEndDate],
        tz: [data.startCondition.tz],
      })
    });
    if (data.description) {
      this.textForm = this.fb.group({});
      for ( const[key, value] of Object.entries(data.description) ) {
        this.textForm.addControl(key, this.fb.control(value));
      }
      this.mainForm.addControl('description', this.textForm);
    }
    if (data.identity) {
      this.mainForm.addControl('identity', this.fb.group({
        id: [data.identity.id]
      }));
    }
    this.mainForm.addControl('steps',
      // @ts-ignore
      this.fb.array(data.steps.map(step => this.fb.group({
        program: [step.program],
        parameters: [step.parameters]
      }))));
    this.originalValue = this.mainForm.getRawValue();
  }

  save(): void {
    this.messageService.clearMessages();
    if (this._composeChanges()) {
      this.jobService.saveJob(this.isNewMode, this.changedValue).subscribe( data => {
        const messages = data as Message[];
        messages.forEach( msg => this.messageService.add(msg));
        if (messages[0].msgName === 'JOB_IS_SAVED') {
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
      });
    }
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

  canDeactivate(): Observable<boolean> | boolean {
    if (this.isNewMode || (this.mainForm && this.mainForm.dirty)) {
      return this.dialogService.confirm('Discard changes?');
    } else {
      return true;
    }
  }

  schedule(): void {
    this.jobService.scheduleJobs([this.mainForm.get('name')?.value]).subscribe( data => {
      const messages = data as Message[];
      messages.forEach( msg => this.messageService.add(msg));
    });
  }
}
