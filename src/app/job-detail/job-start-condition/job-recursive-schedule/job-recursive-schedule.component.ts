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
  cronString = '';
  cronCurrentDate!: Date;
  cronEndDate!: Date;
  tz: null;

  @Input() startConditionForm!: FormGroup;
  @Input() readonly!: boolean;
  @ViewChild('cronForm')
  cronForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.cronString = this.startConditionForm.get('cronString')?.value || '* * * * * *';
    if (this.startConditionForm.get('cronCurrentDate')?.value) {
      // @ts-ignore
      this.cronCurrentDate = new Date(this.startConditionForm.get('cronCurrentDate')?.value + ' UTC');
    }
    if (this.startConditionForm.get('cronEndDate')?.value) {
      // @ts-ignore
      this.cronEndDate = new Date(this.startConditionForm.get('cronEndDate')?.value + ' UTC');
    }
    this.tz = this.startConditionForm.get('tz')?.value;
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

  onChangeCurrentDate(newDate: Date | null): void {
    const mySQLDateStr = newDate ? this._convert2MySQLDateTime(newDate) : null;
    this.startConditionForm.get('cronCurrentDate')?.setValue(mySQLDateStr);
    this.startConditionForm.get('cronCurrentDate')?.markAsDirty();
  }

  onChangeEndDate(newDate: Date | null): void {
    const mySQLDateStr = newDate ? this._convert2MySQLDateTime(newDate) : null;
    this.startConditionForm.get('cronEndDate')?.setValue(mySQLDateStr);
    this.startConditionForm.get('cronEndDate')?.markAsDirty();
  }

  _convert2MySQLDateTime(date: Date): string {
    return date.toISOString().slice(0, 19).replace('T', ' ');
  }

  updateMainForm(): void {
    if (!this.cronForm.dirty || this.cronForm.pristine) { return; }

    if (this.cronForm.invalid) {
      this.startConditionForm.setErrors({message: 'Errors in start condition'});
      return;
    }

    const cronStringCtrl = this.startConditionForm.get('cronString');
    const tzCtrl = this.startConditionForm.get('tz');
    if (cronStringCtrl && this.cronString !== this.startConditionForm.get('cronString')?.value) {
      cronStringCtrl.setValue(this.cronString);
      cronStringCtrl.markAsDirty();
    }
    if (tzCtrl && this.tz !== this.startConditionForm.get('tz')?.value) {
      tzCtrl.setValue(this.tz);
      tzCtrl.markAsDirty();
    }
  }
}
