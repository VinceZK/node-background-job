import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {JobService} from '../../job.service';
import {JobOccurrence} from '../../job-types';
import {Router} from '@angular/router';
import {Message, MessageService} from 'ui-message-angular';

@Component({
  selector: 'app-job-occurrences',
  templateUrl: './job-occurrences.component.html',
  styleUrls: ['./job-occurrences.component.css']
})
export class JobOccurrencesComponent implements OnInit {
  @Input() readonly!: boolean;
  @Input() mainForm!: FormGroup;
  @Input() displayStatistics!: string;
  mode = 0;
  jobOccurrences!: JobOccurrence[];
  isSearchListShown = true;
  startDate!: Date;
  endDate!: Date;
  status = [true, true, true, true, true];
  numOfOccs = [0, 0, 0, 0, 0];
  occStatuses: string[] = [];
  occStatusColors: string[] = [];
  jobOccurrence!: JobOccurrence;

  constructor(private fb: FormBuilder,
              private router: Router,
              private messageService: MessageService,
              private jobService: JobService) {
    this.occStatuses = this.jobService.occStatuses;
    this.occStatusColors = this.jobService.occStatusColors;
  }

  ngOnInit(): void {
    this.mode = this.mainForm.get('mode')?.value;
    if (this.mode >= 2 && !this.displayStatistics) { // On set start and end dates for recursive and event-based jobs.
      const now = new Date();
      this.startDate = new Date();
      this.endDate = new Date();
      this.startDate.setDate(now.getDate() - 15);
      this.endDate.setDate(now.getDate() + 15);
    }
    switch (this.displayStatistics) {
      case 'displayFinished':
        this.status = [false, false, true, false, false];
        break;
      case 'displayFailed':
        this.status = [false, false, false, true, false];
        break;
      case 'displayCanceled':
        this.status = [false, false, false, false, true];
        break;
      default:
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
      if (this.startDate) {
        startDate = this.startDate.toISOString().slice(0, 19).replace('T', ' ');
      }
      if (this.endDate) {
        endDate = this.endDate.toISOString().slice(0, 19).replace('T', ' ');
      }
    }

    this.jobService.searchJobOccurrences(jobName, statusArray, startDate, endDate)
      .subscribe(data => {
        this.jobOccurrences = data as JobOccurrence[];
        if (this.jobOccurrences.length === 0) { return; }
        this.isSearchListShown = this.mode >= 2;
        this.numOfOccs = [0, 0, 0, 0, 0];
        this.jobOccurrences.forEach( occ => this.numOfOccs[occ.status - 1]++);
        this.showOccurrence(this.jobOccurrences[0].uuid);
      });
  }

  showOccurrence(occUUID: string): void {
    if (this.jobOccurrence?.uuid === occUUID) { return; }
    this.jobService.getOccurrence(occUUID).subscribe( data => {
      if ('uuid' in data) {
        this.jobOccurrence = data as JobOccurrence;
      } else {
        const errorMessages = data as Message[];
        errorMessages.forEach( msg => this.messageService.add(msg));
      }
    });
  }

  toLocaleString(dateStr: string | undefined): string {
    return this.jobService.toLocaleString(dateStr);
  }
}
