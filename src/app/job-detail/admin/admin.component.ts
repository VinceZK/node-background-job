import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AttributeBase, AttributeControlService, RelationMeta} from 'jor-angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @Input() mainForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
