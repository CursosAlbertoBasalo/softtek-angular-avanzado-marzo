import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Booking } from './booking.model';
import { BookingsStore } from './bookings.store';

@Injectable({ providedIn: 'root' })
export class BookingsService {

  constructor(private bookingsStore: BookingsStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<Booking[]>('https://api.com').pipe(tap(entities => {
      this.bookingsStore.set(entities);
    }));
  }

  add(booking: Booking) {
    this.bookingsStore.add(booking);
  }

  update(id, booking: Partial<Booking>) {
    this.bookingsStore.update(id, booking);
  }

  remove(id: ID) {
    this.bookingsStore.remove(id);
  }

}
