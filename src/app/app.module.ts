import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {JorAngularModule} from 'jor-angular';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouteReuseStrategy, RouterModule, Routes} from '@angular/router';
import {CustomReuseStrategy} from './custom.reuse.strategy';
import {MessageModule} from 'ui-message-angular';
import { JobStepsComponent } from './job-detail/job-steps/job-steps.component';
import { JobStartConditionComponent } from './job-detail/job-start-condition/job-start-condition.component';
import { JobOccurrencesComponent } from './job-detail/job-occurrences/job-occurrences.component';
import { AdminComponent } from './job-detail/admin/admin.component';
import { JobParametersComponent } from './job-detail/job-parameters/job-parameters.component';
import { JobRecursiveScheduleComponent } from './job-detail/job-start-condition/job-recursive-schedule/job-recursive-schedule.component';
import { DateDirective } from './job-detail/date.directive';

const appRoutes: Routes = [
  // {
  //   path: 'logon', component: LogonComponent,
  //   data: {
  //     title: 'Logon Portal (DH001/Dark1234)', userLabel: 'User ID', pwdLabel: 'Password', btnLabel: 'Sign In',
  //     redirectPath: environment.redirectPath, redirectUrl: environment.redirectUrl, host: environment.originalHost
  //   }
  // },
  { path: 'jobs', component: JobListComponent },
  { path: 'jobs/:name', component: JobDetailComponent },
  { path: '**', redirectTo: 'jobs', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    JobDetailComponent,
    JobStepsComponent,
    JobStartConditionComponent,
    JobOccurrencesComponent,
    AdminComponent,
    JobParametersComponent,
    JobRecursiveScheduleComponent,
    DateDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    // AppRoutingModule,
    MessageModule,
    JorAngularModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: CustomReuseStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
