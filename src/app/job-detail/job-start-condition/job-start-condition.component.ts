import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {JobRecursiveScheduleComponent} from './job-recursive-schedule/job-recursive-schedule.component';

@Component({
  selector: 'app-job-start-condition',
  templateUrl: './job-start-condition.component.html',
  styleUrls: ['./job-start-condition.component.css']
})
export class JobStartConditionComponent implements OnInit {
  jobStartConditionFormGroup!: FormGroup;
  specificTime!: Date;
  @Input() readonly!: boolean;
  @Input() mainForm!: FormGroup;
  @ViewChild(JobRecursiveScheduleComponent)
  jobRecursiveScheduleComponent!: JobRecursiveScheduleComponent;

  constructor() { }

  ngOnInit(): void {
    this.jobStartConditionFormGroup = this.mainForm.get('startCondition') as FormGroup;
    this.specificTime = new Date(this.jobStartConditionFormGroup.get('specificTime')?.value + ' UTC');
  }

  updateMainForm(): void {
    const modeCtrl = this.jobStartConditionFormGroup.get('mode');
    if (modeCtrl?.value === 2) {
      this.jobRecursiveScheduleComponent.updateMainForm();
    }
  }

  onChangeSpecificDate(newDate: Date): void {
    const mySQLDateStr = newDate.toISOString().slice(0, 19).replace('T', ' ');

    this.jobStartConditionFormGroup.get('specificTime')?.setValue(mySQLDateStr);
    this.jobStartConditionFormGroup.get('specificTime')?.markAsDirty();
  }

  onChangeMode(): void {
    const modeCtrl = this.jobStartConditionFormGroup.get('mode');
    this.mainForm.get('mode')?.setValue(modeCtrl?.value);
    switch (modeCtrl?.value) {
      case 0:
        this.jobStartConditionFormGroup.get('specificTime')?.setValue(null);
        this.jobStartConditionFormGroup.get('cronString')?.setValue(null);
        this.jobStartConditionFormGroup.get('cronCurrentDate')?.setValue(null);
        this.jobStartConditionFormGroup.get('cronEndDate')?.setValue(null);
        this.jobStartConditionFormGroup.get('tz')?.setValue(null);
        break;
      case 1:
        this.jobStartConditionFormGroup.get('cronString')?.setValue(null);
        this.jobStartConditionFormGroup.get('cronCurrentDate')?.setValue(null);
        this.jobStartConditionFormGroup.get('cronEndDate')?.setValue(null);
        this.jobStartConditionFormGroup.get('tz')?.setValue(null);
        break;
      case 2:
        this.jobStartConditionFormGroup.get('specificTime')?.setValue(null);
        break;
      case 3:
        break;
    }
  }
}
