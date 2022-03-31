import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Booking } from '@data/state/booking.model';
import { BookingsQuery } from '@data/state/bookings.query';
import { BookingsService } from '@data/state/bookings.service';
import { BookingsStore } from '@data/state/bookings.store';
import { Observable } from 'rxjs';

@Component({
  selector: 'stk-bookings',
  templateUrl: './bookings.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingsComponent implements OnInit {
  bookings$: Observable<Booking[]> = this.bookingsQuery.selectAll();

  error$: Observable<any> = this.bookingsQuery.selectError();
  loading$: Observable<boolean> = this.bookingsQuery.selectLoading();

  totalBookings$: Observable<number> = this.bookingsQuery.selectTotalBookings();
  totalPassengers$: Observable<number> = this.bookingsQuery.selectTotalPassengers();

  constructor(
    private readonly bookingsStore: BookingsStore,
    private readonly bookingsQuery: BookingsQuery,
    private readonly bookingsService: BookingsService
  ) {}

  ngOnInit(): void {
    this.bookingsService.get().subscribe();
  }

  onAddNewBookingClicked() {
    const newBooking: Booking = {
      id: 'space-y-mars-2-' + Math.random(),
      clientId: 'Random' + Math.floor(Math.random() * 5),
      passengers: Math.floor(Math.random() * 10),
      tripId: 'space-y-mars-2',
    };
    // this.bookingsStore.add(newBooking);
    this.bookingsService.add(newBooking).subscribe();
  }
  onAddRepeatedBookingClicked() {
    const newBooking: Booking = {
      id: 'space-y-mars-2-warren',
      clientId: 'Warren',
      passengers: 1,
      tripId: 'space-y-mars-2',
    };
    // this.bookingsStore.add(newBooking);
    this.bookingsService.add(newBooking).subscribe();
  }
}
