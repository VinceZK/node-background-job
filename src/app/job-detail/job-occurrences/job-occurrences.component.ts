import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {AttributeBase, AttributeControlService, RelationMeta} from 'jor-angular';
import {JobService} from '../../job.service';
import {JobOccurrence, StartCondition, Step} from '../../job-types';

@Component({
  selector: 'app-job-occurrences',
  templateUrl: './job-occurrences.component.html',
  styleUrls: ['./job-occurrences.component.css']
})
export class JobOccurrencesComponent implements OnInit {
  @Input() readonly!: boolean;
  @Input() mainForm!: FormGroup;
  jobOccurrences!: JobOccurrence[];
  isSearchListShown = true;
  startDate!: Date;
  endDate!: Date;
  attrCtrls!: AttributeBase[];
  occStatuses = ['Initial', 'Ready', 'Running', 'Finished', 'Failed', 'Canceled'];
  occStatusColors = ['text-secondary', 'text-info', 'text-warning', 'text-success', 'text-danger', 'text-muted'];

  constructor(private fb: FormBuilder,
              private attributeControlService: AttributeControlService,
              private jobService: JobService) { }

  ngOnInit(): void {
    this.search();
  }

  onChangeStartDate(newDate: Date | null): void {

  }

  onChangeEndDate(newDate: Date | null): void {

  }

  search(): void {
    const jobName = this.mainForm.get('name')?.value;
    if (!jobName) { return; }
    this.jobService.getJobOccurrences(this.mainForm.get('name')?.value, [])
      .subscribe(data => {
        this.jobOccurrences = data as JobOccurrence[];
      });
  }

  onSelect(jobOcc: JobOccurrence): void {

  }
}
