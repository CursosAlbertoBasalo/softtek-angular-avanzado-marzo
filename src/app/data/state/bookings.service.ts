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
          this.bookingsStore.setLoading(false);
          this.bookingsStore.set(entities);
        },
        error: (error) => {
          this.bookingsStore.setLoading(false);
          this.bookingsStore.setError(error);
        },
      })
    );
  }

  add(booking: Booking) {
    this.bookingsStore.add(booking);
  }

  update(id: string, booking: Partial<Booking>) {
    this.bookingsStore.update(id, booking);
  }

  remove(id: ID) {
    this.bookingsStore.remove(id);
  }
}
