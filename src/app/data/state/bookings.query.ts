import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { BookingsState, BookingsStore } from './bookings.store';

@Injectable({ providedIn: 'root' })
export class BookingsQuery extends QueryEntity<BookingsState> {
  constructor(protected override store: BookingsStore) {
    super(store);
  }
}
