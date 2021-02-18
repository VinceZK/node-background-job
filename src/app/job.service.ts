import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Message, MessageService, messageType} from 'ui-message-angular';
import {Router} from '@angular/router';
import {formatDate} from '@angular/common';
import {Observable, of} from 'rxjs';
import {Job, JobOccurrence, JobProgram} from './job-types';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class JobService {
  private originalHost = environment.originalHost;

  constructor(private http: HttpClient,
              private messageService: MessageService,
              private router: Router) { }

  get CurrentTime(): string {
    return formatDate( new Date(), 'yyyy-MM-dd hh:mm:ss', 'en-US' );
  }

  saveJob(isNew: boolean, jobDefinition: Job): Observable<Message[]> {
    if (isNew) {
      return this.http.post<Message[]>(this.originalHost + `/api/jobs`, jobDefinition, httpOptions).pipe(
        catchError(this.handleError<any>('createJob')));
    } else {
      return this.http.put<Message[]>(this.originalHost + `/api/jobs`, jobDefinition, httpOptions).pipe(
        catchError(this.handleError<any>('changeJob')));
    }
  }

  getJob(jobName: string | null): Observable<Job | Message> {
    return this.http.get<Job | Message>(this.originalHost + `/api/jobs/${jobName}`, httpOptions).pipe(
      catchError(this.handleError<any>('getJob')));
  }

  scheduleJobs(JobNames: string[]): Observable<Message[]> {
    return this.http.post<Message[]>(this.originalHost + `/api/jobs/schedule`, JobNames, httpOptions).pipe(
      catchError(this.handleError<any>('scheduleJobs')));
  }

  cancelJobs(JobNames: string[]): Observable<Message[]> {
    return this.http.post<Message[]>(this.originalHost + `/api/jobs/cancel`, JobNames, httpOptions).pipe(
      catchError(this.handleError<any>('cancelJobs')));
  }

  searchJobs(jobName: string,
             status: number[] = [0, 1, 2, 3],
             mode: number[] = [0, 1, 2, 3],
             program?: string): Observable<Job[]> {
    let queryString = '';
    if (jobName) { queryString += `&name_includes=${jobName}`; }
    status.forEach( s => queryString += `&status=${s}`);
    mode.forEach( m => queryString += `&mode=${m}`);
    if (program) { queryString += `&program=${program}`; }
    queryString = queryString.replace('&', '?');
    return this.http.get<Job[]>(this.originalHost + `/api/jobs${queryString}`, httpOptions).pipe(
      catchError(this.handleError<any>('searchJobs')));
  }

  getJobOccurrences( jobName: string,
                     status: number[] = [0, 1, 2, 3, 4, 5],
                     uuid: string): Observable<JobOccurrence[]> {
    let queryString = '';
    status.forEach( s => queryString += `&status=${s}`);
    if (uuid) { queryString += `&uuid=${uuid}`; }
    queryString = queryString.replace('&', '?');
    return this.http.get<JobOccurrence[]>(this.originalHost + `/api/jobs/${jobName}/occurrences`, httpOptions).pipe(
      catchError(this.handleError<any>('getJobOccurrences')));
  }

  cancelJobOccurrences(uuids: string[]): Observable<Message[]> {
  return this.http.post<Message[]>(this.originalHost + `/api/jobs/occurrences`, uuids, httpOptions).pipe(
    catchError(this.handleError<any>('cancelJobOccurrences')));
  }

  searchJobPrograms(nameFilter: string): Observable<JobProgram[]> {
    return this.http.get<JobProgram[]>(this.originalHost + `/api/jobPrograms?nameFilter=${nameFilter}`, httpOptions).pipe(
      catchError(this.handleError<any>('searchJobPrograms')));
  }

  getJobProgramDefinition(name: string): Observable<JobProgram> {
    return this.http.get<JobProgram>(this.originalHost + `/api/jobPrograms/${name}`, httpOptions).pipe(
      catchError(this.handleError<any>('getJobProgramDefinition')));
  }
  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (error.status === 401) {
        this.messageService.addMessage('EXCEPTION', 'NOT_AUTHENTICATED_OR_SESSION_EXPIRED', messageType.Exception);
      } else {
        this.messageService.addMessage('EXCEPTION', 'GENERIC', messageType.Exception, operation, error.message);
      }

      this.router.navigate(['errors']);
      console.error(operation, error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
