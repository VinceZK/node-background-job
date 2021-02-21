import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-job-recursive-schedule',
  templateUrl: './job-recursive-schedule.component.html',
  styleUrls: ['./job-recursive-schedule.component.css']
})
export class JobRecursiveScheduleComponent implements OnInit, OnChanges {
  currentSection = 0; // 0: seconds, 1: minutes, 2: hours, 3: day of month, 4: month, 5: day of week
  isDocumentationOpen = false;
  cronArray!: string[];
  cronArrayAt = ['*', '*', '*', '*', '*', '*'];
  cronArrayEvery = [0, 0, 0, 0, 0, 0];
  cronCurrentDate = '';
  cronEndDate = '';
  tz = '';
  @Input() cronString!: string;
  @Input() cronOption: any;
  @ViewChild('cronForm')
  cronForm!: FormGroup;
  @ViewChild('f')
  textForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this._convertCronString2Array();
  }

  _convertCronString2Array(): void {
    this.cronArray = this.cronString.split(` `);
    for (let i = 0; i < 6; i++) {
      const sectionArray = this.cronArray[i].split(`/`);
      this.cronArrayAt[i] = sectionArray[0];
      this.cronArrayEvery[i] = +sectionArray[1] || 0;
    }
  }

  onOpenSection(section: number): void {
    if ( !this.cronForm.valid ) {
      return;
    }
    this.currentSection = section;
  }

  onOpenDocumentation(): void {
    this.isDocumentationOpen = !this.isDocumentationOpen;
  }

  copyCronString(inputElement: HTMLInputElement): void {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  pasteCronString(): void {
    navigator.clipboard.readText()
      .then(text => {
        this.cronString = text;
        this._convertCronString2Array();
      });
  }

  onKeyup(section: number): void {
    this.cronArray[section] = this.cronArrayEvery[section] ?
      `${this.cronArrayAt[section]}/${this.cronArrayEvery[section]}` : this.cronArrayAt[section];
    this.cronString = this.cronArray.join(` `);
  }

  onKeydown(e: any): boolean {
    return e.keyCode !== 32;
  }
}
