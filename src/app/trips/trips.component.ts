import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Trip } from '@data/models/trip.interface';
import { TripCalculationsService } from './trip-calculations.service';
import { WeightAbstractService } from './weight-abstract.service';

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
  totalWeight = this.weights.getWeight(10);

  constructor(
    private calculations: TripCalculationsService,
    private weights: WeightAbstractService
  ) {}

  ngOnInit(): void {}
}
