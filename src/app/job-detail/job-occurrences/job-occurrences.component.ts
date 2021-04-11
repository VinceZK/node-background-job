import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AttributeControlService} from 'jor-angular';
import {JobService} from '../../job.service';
import {JobOccurrence} from '../../job-types';
import {OccurrenceService} from './occurrence.service';

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
  occStatuses: string[] = [];
  occStatusColors: string[] = [];

  constructor(private fb: FormBuilder,
              private attributeControlService: AttributeControlService,
              private occurrenceService: OccurrenceService,
              private jobService: JobService) {
    this.occStatuses = this.occurrenceService.occStatuses;
    this.occStatusColors = this.occurrenceService.occStatusColors;
  }

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
    this.jobService.searchJobOccurrences(this.mainForm.get('name')?.value, [])
      .subscribe(data => {
        this.jobOccurrences = data as JobOccurrence[];
      });
  }

  onSelect(jobOcc: JobOccurrence): void {
    console.log(jobOcc);
  }
}
