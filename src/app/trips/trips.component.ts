import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Trip } from '@data/models/trip.interface';
import { TripCalculationsService } from './trip-calculations.service';

@Component({
  selector: 'stk-trips',
  templateUrl: './trips.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripsComponent implements OnInit {
  fullTripPrice(trip: Trip) {
    return this.calculations.calculateFullFlightPrice(trip);
  }

  constructor(private calculations: TripCalculationsService) {}

  ngOnInit(): void {}
}
