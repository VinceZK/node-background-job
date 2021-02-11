import { Component } from '@angular/core';
import {MessageService} from 'ui-message-angular';
import {JobService} from './job.service';
import {msgStore} from './msgStore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private jobService: JobService,
              private messageService: MessageService) {
    this.messageService.setMessageStore(msgStore, 'EN');
  }
}
