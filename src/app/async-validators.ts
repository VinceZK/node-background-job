import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable, timer} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {MessageService} from 'ui-message-angular';
import {JobService} from './job.service';

export function existingJobNameValidator(jobService: JobService,
                                         messageService: MessageService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return timer(500).pipe(
      switchMap( () => jobService.getJob(control.value).pipe(
        map(data => {
          // @ts-ignore
          if (data.job && data.job[0].name === control.value) {
            return {message: messageService.generateMessage('JOB', 'JOB_EXISTS',
                'E', control.value).msgShortText};
          } else {
            return null;
          }
        })
      )));
  };
}
