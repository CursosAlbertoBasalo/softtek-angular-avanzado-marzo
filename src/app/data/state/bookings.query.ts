import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { BookingsStore, BookingsState } from './bookings.store';

@Injectable({ providedIn: 'root' })
export class BookingsQuery extends QueryEntity<BookingsState> {

  constructor(protected store: BookingsStore) {
    super(store);
  }

}
