import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { environment } from '@env/environment';
import { tap } from 'rxjs/operators';
import { Booking } from './booking.model';
import { BookingsStore } from './bookings.store';

@Injectable({ providedIn: 'root' })
export class BookingsService {
  private readonly apiUrl = environment.apiUrl + '/bookings';

  constructor(private bookingsStore: BookingsStore, private http: HttpClient) {}

  get() {
    this.bookingsStore.setLoading(true);
    return this.http.get<Booking[]>(this.apiUrl).pipe(
      tap({
        next: (entities) => {
          this.bookingsStore.set(entities);
          this.bookingsStore.setLoading(false);
        },
        error: (error) => {
          this.bookingsStore.setError(error);
          this.bookingsStore.setLoading(false);
        },
      })
    );
  }

  add(booking: Booking) {
    this.bookingsStore.setLoading(true);
    return this.http.post<Booking>(this.apiUrl, booking).pipe(
      tap({
        next: (booking) => {
          this.bookingsStore.add(booking);
          this.bookingsStore.setLoading(false);
        },
        error: (err) => {
          this.bookingsStore.setError(err);
          this.bookingsStore.setLoading(false);
        },
      })
    );
  }

  update(id: string, booking: Partial<Booking>) {
    this.bookingsStore.update(id, booking);
  }

  remove(id: ID) {
    this.bookingsStore.remove(id);
  }
}
