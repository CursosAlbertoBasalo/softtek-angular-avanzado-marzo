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

  constructor(
    private readonly bookingsStore: BookingsStore,
    private readonly bookingsQuery: BookingsQuery,
    private readonly bookingsService: BookingsService
  ) {}

  ngOnInit(): void {
    this.bookingsService.get().subscribe();
  }
}
