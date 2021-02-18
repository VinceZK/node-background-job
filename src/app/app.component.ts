import { Component } from '@angular/core';
import {MessageService} from 'ui-message-angular';
import {JobService} from './job.service';
import {msgStore} from './msgStore';
import {EntityService} from 'jor-angular';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private jobService: JobService,
              private entityService: EntityService,
              private messageService: MessageService) {
    this.entityService.setOriginalHost(environment.originalHost);
    this.messageService.setMessageStore(msgStore, 'EN');
  }
}
