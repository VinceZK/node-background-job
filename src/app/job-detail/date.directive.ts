import {Input, Output, EventEmitter, Directive, HostBinding, HostListener} from '@angular/core';
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'input[type=datetime-local]',
})
export class DateDirective {
  @Input() set date(d: Date) { this.dateStr = this.toDateString(d); }
  @Output() dateChange: EventEmitter<Date>;
  @HostBinding('value') dateStr = '';

  constructor() {
    this.date = new Date();
    this.dateChange = new EventEmitter();
  }

  private toDateString(date: Date): string {
    return date ? (date.getFullYear().toString() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + (date.getDate())).slice(-2)
      + 'T' + date.toTimeString().slice(0, 5)) : '';
  }

  private parseDateString(date: string): Date {
    date = date.replace('T', '-');
    const parts = date.split('-');
    const timeParts = parts[3].split(':');
    return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]), Number(timeParts[0]), Number(timeParts[1]));
  }

  @HostListener('change', ['$event.target.value']) onDateChange(value: string): void {
    if (value !== this.dateStr) {
      const parsedDate = this.parseDateString(value);
      if (!isNaN(parsedDate.getTime())) {
        this.dateStr = value;
        this.dateChange.emit(parsedDate);
      }
    }
  }
}
