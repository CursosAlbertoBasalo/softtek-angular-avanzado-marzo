import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Booking } from './booking.model';

export interface BookingsState extends EntityState<Booking> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'bookings' })
export class BookingsStore extends EntityStore<BookingsState> {

  constructor() {
    super();
  }

}
