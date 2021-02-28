import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {AttributeBase, AttributeControlService, RelationMeta} from 'jor-angular';

@Component({
  selector: 'app-job-occurrences',
  templateUrl: './job-occurrences.component.html',
  styleUrls: ['./job-occurrences.component.css']
})
export class JobOccurrencesComponent implements OnInit {
  @Input() readonly!: boolean;
  @Input() mainForm!: FormGroup;
  jobOccurrence!: FormArray;
  isSearchListShown = true;
  startDate!: Date;
  endDate!: Date;
  attrCtrls!: AttributeBase[];

  constructor(private attributeControlService: AttributeControlService) { }

  ngOnInit(): void {

  }
  onChangeStartDate(newDate: Date | null): void {

  }

  onChangeEndDate(newDate: Date | null): void {

  }

  search(): void {

  }
}
