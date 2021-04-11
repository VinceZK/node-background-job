import { Component, OnInit } from '@angular/core';
import {OccurrenceService} from '../occurrence.service';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {forkJoin} from 'rxjs';
import {RelationMeta} from 'jor-angular';
import {Job, JobOccurrence} from '../../../job-types';
import {Message, MessageService} from 'ui-message-angular';
import {JobService} from '../../../job.service';

@Component({
  selector: 'app-job-occurrence-detail',
  templateUrl: './job-occurrence-detail.component.html',
  styleUrls: ['./job-occurrence-detail.component.css']
})
export class JobOccurrenceDetailComponent implements OnInit {
  occStatuses: string[] = [];
  occStatusColors: string[] = [];
  uuid: string | null = '';
  jobOccurrence!: JobOccurrence;

  constructor(private route: ActivatedRoute,
              private jobService: JobService,
              private messageService: MessageService,
              private occurrenceService: OccurrenceService) {
    this.occStatuses = this.occurrenceService.occStatuses;
    this.occStatusColors = this.occurrenceService.occStatusColors;
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.uuid = params.get('uuid');
        return this.jobService.getOccurrence(this.uuid);
      })
    ).subscribe( data => {
      if ('uuid' in data) {
        console.log(data);
        this.jobOccurrence = data as JobOccurrence;
        console.log(this.jobOccurrence);
      } else {
        const errorMessages = data as Message[];
        errorMessages.forEach( msg => this.messageService.add(msg));
      }
    });
  }

}
