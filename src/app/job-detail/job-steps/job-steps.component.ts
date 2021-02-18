import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {SearchHelp, SearchHelpComponent, SearchHelpMethod} from 'jor-angular';
import {JobService} from '../../job.service';
import {Observable} from 'rxjs';
import {MessageService} from 'ui-message-angular';
import {ParameterDefinitions} from '../../job-types';
import {JobParametersComponent} from '../job-parameters/job-parameters.component';

@Component({
  selector: 'app-job-steps',
  templateUrl: './job-steps.component.html',
  styleUrls: ['./job-steps.component.css']
})
export class JobStepsComponent implements OnInit {
  @Input() readonly!: boolean;
  @Input() mainForm!: FormGroup;
  jobStepFormArray!: FormArray;
  currentJobStep!: FormGroup;
  currentParamDefinitions?: ParameterDefinitions;
  currentJobProgramDesc?: string;
  isAddProgramModalShown = false;
  isNewProgram = true;
  programSearchHelp!: SearchHelp;

  @ViewChild(JobParametersComponent, { static: false })
  private jobParametersComponent!: JobParametersComponent;
  @ViewChild(SearchHelpComponent, { static: true })
  private searchHelpComponent!: SearchHelpComponent;

  get displayAddProgramModal(): string {return this.isAddProgramModalShown ? 'block' : 'none'; }
  constructor(private fb: FormBuilder,
              private messageService: MessageService,
              private jobService: JobService) { }

  ngOnInit(): void {
    this.jobStepFormArray = this.mainForm.get('steps') as FormArray;
  }

  castFormGroup(ctrl: AbstractControl): FormGroup {
    return ctrl as FormGroup;
  }

  add(): void {
    this.currentJobStep = this.fb.group({
      program: '',
      parameters: ''
    });
    this.onChangeProgram();
    this.isAddProgramModalShown = true;
    this.isNewProgram = true;
  }

  onSearchHelp(): void {
    if (!this.programSearchHelp) {
      this.programSearchHelp = new SearchHelp();
      this.programSearchHelp.OBJECT_NAME = 'Data Domain';
      // tslint:disable-next-line:only-arrow-functions
      this.programSearchHelp.METHOD = function(jobService: JobService): SearchHelpMethod {
        return (searchTerm: string): Observable<object[]> => jobService.searchJobPrograms(searchTerm);
      }(this.jobService);
      this.programSearchHelp.BEHAVIOUR = 'A';
      this.programSearchHelp.MULTI = false;
      this.programSearchHelp.FUZZY_SEARCH = true;
      this.programSearchHelp.FIELDS = [
        // tslint:disable-next-line:max-line-length
        {FIELD_NAME: 'name', LIST_HEADER_TEXT: 'Program', IE_FIELD_NAME: 'program', IMPORT: true, EXPORT: true, LIST_POSITION: 1, FILTER_POSITION: 0},
        {FIELD_NAME: 'description', LIST_HEADER_TEXT: 'Description', IMPORT: true, EXPORT: true, LIST_POSITION: 2, FILTER_POSITION: 0}
      ];
      this.programSearchHelp.READ_ONLY = this.readonly;
    }
    // tslint:disable-next-line:only-arrow-functions typedef
    const afterExportFn = function(context: any) {
      return () => context.onChangeProgram();
    }(this).bind(this);
    this.searchHelpComponent.openSearchHelpModal(this.programSearchHelp, this.currentJobStep, afterExportFn);
  }

  onChangeProgram(): void {
    this.currentParamDefinitions = {};
    this.currentJobProgramDesc = '';
    const programName = this.currentJobStep.get('program')?.value;
    if (!programName) { return; }

    this.jobService.getJobProgramDefinition(programName)
      .subscribe(programDefinition => {
        if (!programDefinition) { return; }
        this.currentJobProgramDesc = programDefinition.description?.DEFAULT;
        this.currentParamDefinitions = programDefinition.parameterDefinitions;
      });
  }

  close(): void {
    this.isAddProgramModalShown = false;
  }

  confirm(): void {
    if (!this.currentJobStep.get('program')?.value) {
      this.messageService.reportMessage('JOB', 'INVALID_OR_MISSING_JOB_PROGRAM', 'E');
      return;
    }
    this.jobParametersComponent.generateParamValues();
    if (this.isNewProgram) {
      this.jobStepFormArray.push(this.currentJobStep);
    }
    this.isAddProgramModalShown = false;
  }

  delete(index: number): void {
    this.jobStepFormArray.removeAt(index);
    this.jobStepFormArray.markAsDirty();
  }

  up(index: number): void {
    if (index > 0) {
      const jobSteps = this.jobStepFormArray.value;
      const newJobSteps = this._swap(jobSteps, index - 1, index);
      this.jobStepFormArray.setValue(newJobSteps);
      this.jobStepFormArray.markAsDirty();
    }
  }

  down(index: number): void {
    const jobSteps = this.jobStepFormArray.value;
    if (index < jobSteps.length - 1) {
      const newJobSteps = this._swap(jobSteps, index, index + 1);
      this.jobStepFormArray.setValue(newJobSteps);
      this.jobStepFormArray.markAsDirty();
    }
  }

  _swap(arr: any[], index1: number, index2: number): any[] {
    arr = [...arr];
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
  }

  adjust(index: number): void {
    this.currentJobStep = this.jobStepFormArray.at(index) as FormGroup;
    this.onChangeProgram();
    this.isAddProgramModalShown = true;
    this.isNewProgram = false;
  }
}
