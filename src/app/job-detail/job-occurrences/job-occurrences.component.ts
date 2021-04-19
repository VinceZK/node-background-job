import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AttributeControlService} from 'jor-angular';
import {JobService} from '../../job.service';
import {JobOccurrence} from '../../job-types';
import {Router} from '@angular/router';
import {JobOccurrenceDetailComponent} from './job-occurrence-detail/job-occurrence-detail.component';

@Component({
  selector: 'app-job-occurrences',
  templateUrl: './job-occurrences.component.html',
  styleUrls: ['./job-occurrences.component.css']
})
export class JobOccurrencesComponent implements OnInit {
  @Input() readonly!: boolean;
  @Input() mainForm!: FormGroup;
  mode = 0;
  jobOccurrences!: JobOccurrence[];
  isSearchListShown = true;
  startDate!: Date;
  endDate!: Date;
  status = [true, true, true, true, true];
  occStatuses: string[] = [];
  occStatusColors: string[] = [];

  constructor(private fb: FormBuilder,
              private router: Router,
              private attributeControlService: AttributeControlService,
              private jobService: JobService) {
    this.occStatuses = this.jobService.occStatuses;
    this.occStatusColors = this.jobService.occStatusColors;
  }

  ngOnInit(): void {
    this.mode = this.mainForm.get('mode')?.value;
    if (this.mode >= 2) { // On set start and end dates for recursive and event-based jobs.
      const now = new Date();
      this.startDate = new Date();
      this.endDate = new Date();
      this.startDate.setDate(now.getDate() - 15);
      this.endDate.setDate(now.getDate() + 15);
    }
    this.search();
  }

  search(): void {
    const jobName = this.mainForm.get('name')?.value;
    if (!jobName) { return; }
    const statusArray: number[] = [];
    let startDate = '';
    let endDate = '';

    if (this.mode >= 2) {
      this.status.forEach( (value, index) => {
        if (value) { statusArray.push(index + 1); }
      });
      startDate = this.startDate.toISOString().slice(0, 19).replace('T', ' ');
      endDate = this.endDate.toISOString().slice(0, 19).replace('T', ' ');
    }

    this.jobService.searchJobOccurrences(jobName, statusArray, startDate, endDate)
      .subscribe(data => {
        this.jobOccurrences = data as JobOccurrence[];
        if (this.jobOccurrences.length === 0) { return; }
        this.isSearchListShown = this.mode >= 2;
        this.router.navigate(['jobs', this.jobOccurrences[0].jobName, 'occurrences', this.jobOccurrences[0].uuid]);
      });
  }

  toLocaleString(dateStr: string | undefined): string {
    return this.jobService.toLocaleString(dateStr);
  }
}
