import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { map, Observable } from 'rxjs';
import { BookingsState, BookingsStore } from './bookings.store';

@Injectable({ providedIn: 'root' })
export class BookingsQuery extends QueryEntity<BookingsState> {
  constructor(protected override store: BookingsStore) {
    super(store);
  }

  selectTotalBookings(): Observable<number> {
    return this.selectAll().pipe(map((bookings) => bookings.length));
  }

  selectTotalPassengers(): Observable<number> {
    return this.selectAll().pipe(
      map((bookings) =>
        bookings.reduce((totalPassengers, booking) => totalPassengers + booking.passengers, 0)
      )
    );
  }
}
