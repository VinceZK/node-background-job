/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import {Job} from '../job-types';
import {Message, MessageService} from 'ui-message-angular';
import {Router} from '@angular/router';
import {JobService} from '../job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobName = '';
  program = '';
  jobs: Job[] = [];
  status = [true, true, true, true];
  mode = [true, true, true, false];
  showCancelConfirmation = false;
  toBeCanceledJobName = '';

  get displayCancelConfirmation() {return this.showCancelConfirmation ? 'block' : 'none'; }

  constructor(private jobService: JobService,
              private messageService: MessageService,
              private router: Router) { }

  ngOnInit() {
  }

  search() {
    this.messageService.clearMessages();
    this.jobs = [];
    this.jobName = this.jobName ? this.jobName.trim() : '';
    this.program = this.program ? this.program.trim() : '';
    let statusArray: number[]  = [];
    this.status.forEach( (value, index) => {
      if (value) { statusArray.push(index) }
    });
    if (statusArray.length === 0) {
      this.messageService.reportMessage('JOB', 'AT_LEAST_ONE_JOB_STATUS', 'E');
      return;
    }
    let modeArray: number[] = [];
    this.mode.forEach( (value, index) => {
      if (value) { modeArray.push(index) }
    });
    if (modeArray.length === 0 || statusArray.length === 0) {
      this.messageService.reportMessage('JOB', 'AT_LEAST_ONE_JOB_MODE', 'E');
      return;
    }
    this.jobService.searchJobs(this.jobName, statusArray, modeArray, this.program)
      .subscribe(data => {
        this.jobs = (data as Job[]);
      }
    );
  }

  enterSearch($event: { keyCode: number; }): void {
    if ($event.keyCode === 13 ) {
      this.search();
    }
  }

  new(): void {
    this.router.navigate(['jobs', '/', {action: 'new'}]);
  }

  display(jobName: string): void {
    this.router.navigate(['jobs', jobName, {action: 'display'}]);
  }

  change(jobName: string): void {
    this.router.navigate(['jobs', jobName, {action: 'change'}]);
  }

  cancel(jobName: string): void {
    this.toBeCanceledJobName = jobName;
    this.showCancelConfirmation = true;
  }

  cancelCancel(): void {
    this.showCancelConfirmation = false;
  }

  confirmCancel(): void {
    this.jobService.cancelJobs([this.toBeCanceledJobName])
      .subscribe( data => {
        this.showCancelConfirmation = false;
        const messages = <Message[]>data;
        messages.forEach( msg => this.messageService.add(msg));
        this.search();
    });
  }

}
