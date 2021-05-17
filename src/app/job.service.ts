import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Message, MessageService, messageType} from 'ui-message-angular';
import {formatDate} from '@angular/common';
import {Observable, of} from 'rxjs';
import {Job, JobOccurrence, JobProgram, StartCondition} from './job-types';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class JobService {
  jobStatuses = ['Initial', 'Ready', 'Completed'];
  jobStatusColors = ['text-secondary', 'text-warning', 'text-info'];
  occStatuses = ['Initial', 'Ready', 'Running', 'Finished', 'Failed', 'Canceled'];
  occStatusColors = ['text-secondary', 'text-info', 'text-warning', 'text-success', 'text-danger', 'text-muted'];
  jobModes = ['Immediately', 'Specific-time', 'Recursively', 'Event-based'];
  messageTypes = {
    S: { text: 'Success', color: 'text-success' },
    W: { text: 'Warning', color: 'text-warning' },
    E: { text: 'Error', color: 'text-danger' },
    I: { text: 'Information', color: 'text-info' },
    X: { text: 'Exception', color: 'text-danger' }
  };
  private originalHost = environment.originalHost;

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  get CurrentTime(): string {
    return formatDate( new Date(), 'yyyy-MM-dd hh:mm:ss', 'en-US' );
  }

  toLocaleString(dateStr: string | undefined): string {
    if (dateStr) {
      // to support Safari and Firefox, the dateStr format 'yyyy-MM-dd HH:mm:ss' needs to be converted to 'yyyy/MM/dd HH:mm:ss'
      const dateStrConverted = dateStr.replace(/-/g, '/');
      return formatDate( new Date(dateStrConverted + ' UTC'), 'yyyy-MM-dd HH:mm:ss', 'en-US')
    } else {
      return '';
    }
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

  getJob(jobName: string | null): Observable<Job | Message[]> {
    return this.http.get<Job | Message[]>(this.originalHost + `/api/jobs/${jobName}`, httpOptions).pipe(
      catchError(this.handleError<any>('getJob')));
  }

  getJobStatus(jobName: string | null): Observable<number> {
    return this.http.get<number>(this.originalHost + `/api/jobs/${jobName}/status`, httpOptions).pipe(
      catchError(this.handleError<any>('getJobStatus')));
  }

  simulateRecurrences(startCondition: StartCondition): Observable<string[] | Message> {
    return this.http.post<string[] | Message>(this.originalHost + `/api/simulate/recurrences`, startCondition, httpOptions).pipe(
      catchError(this.handleError<any>('simulateRecurrences')));
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

  searchJobOccurrences(jobName: string, status: number[] = [0, 1, 2, 3, 4, 5],
                       startDate?: string, endDate?: string): Observable<JobOccurrence[]> {
    let queryString = '';
    status.forEach( s => queryString += `&status=${s}`);
    if (startDate) { queryString += `&startDate=${startDate}`; }
    if (endDate) { queryString += `&endDate=${endDate}`; }
    queryString = queryString.replace('&', '?');
    return this.http.get<JobOccurrence[]>(this.originalHost + `/api/jobs/${jobName}/occurrences` + queryString, httpOptions).pipe(
      catchError(this.handleError<any>('searchJobOccurrences')));
  }

  getOccurrence(uuid: string | null): Observable<JobOccurrence | Message[]> {
    return this.http.get<JobOccurrence | Message[]>(this.originalHost + `/api/occurrences/${uuid}`, httpOptions).pipe(
      catchError(this.handleError<any>('getOccurrence')));
  }

  cancelOccurrences(uuids: string[]): Observable<Message[]> {
    return this.http.post<Message[]>(this.originalHost + `/api/occurrences/cancel`, uuids, httpOptions).pipe(
      catchError(this.handleError<any>('cancelOccurrences')));
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

      // this.router.navigate(['errors']);
      console.error(operation, error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
