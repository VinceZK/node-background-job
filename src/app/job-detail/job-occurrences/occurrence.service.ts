import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OccurrenceService {
  occStatusColors = ['text-secondary', 'text-info', 'text-warning', 'text-success', 'text-danger', 'text-muted'];
  constructor() { }

  get occStatuses(): string[] {
    return ['Initial', 'Ready', 'Running', 'Finished', 'Failed', 'Canceled'];
  }
}
