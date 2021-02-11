import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import {FormsModule} from '@angular/forms';
import {RouteReuseStrategy, RouterModule, Routes} from '@angular/router';
import {CustomReuseStrategy} from './custom.reuse.strategy';
import {MessageModule} from 'ui-message-angular';

const appRoutes: Routes = [
  // {
  //   path: 'logon', component: LogonComponent,
  //   data: {
  //     title: 'Logon Portal (DH001/Dark1234)', userLabel: 'User ID', pwdLabel: 'Password', btnLabel: 'Sign In',
  //     redirectPath: environment.redirectPath, redirectUrl: environment.redirectUrl, host: environment.originalHost
  //   }
  // },
  { path: 'jobs', component: JobListComponent },
  { path: '**', redirectTo: 'jobs', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    JobDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    // AppRoutingModule,
    MessageModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: CustomReuseStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
