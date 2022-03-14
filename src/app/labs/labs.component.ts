import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AgencyRange } from '@data/models/agency-range.enum';
import { AgencyStatus } from '@data/models/agency-status.enum';
import { Agency } from '@data/models/agency.interface';
import { TripKind } from '@data/models/trip-kind.enum';
import { TripStatus } from '@data/models/trip-status.enum';
import { Trip } from '@data/models/trip.interface';
import { AgenciesService } from '@data/services/agencies.service';
import { TripCalculationsService } from './trip-calculations.service';
import { WeightAbstractService } from './weight-abstract.service';

@Component({
  selector: 'stk-labs',
  templateUrl: './labs.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabsComponent implements OnInit {
  // Sample for strategy pattern for showing unit of weight
  weightWithUnits = this.weights.getWeight(10);

  constructor(
    private readonly calculations: TripCalculationsService,
    private readonly weights: WeightAbstractService,
    private readonly agencies: AgenciesService
  ) {}

  ngOnInit(): void {}

  // Samples for weight service (lazy vs common modules)
  calculateFullTripPrice() {
    const trip: Trip = {
      id: 'new_trip',
      agencyId: 'new_agency',
      agencyTripCode: 'new_trip_code',
      destination: 'New Destination',
      startDate: new Date(),
      endDate: new Date(),
      flightPrice: 100,
      stayingNightPrice: 100,
      kind: TripKind.TripOnly,
      status: TripStatus.Cancelled,
      extraLuggagePricePerKilo: 10,
      premiumFoodPrice: 10,
      places: 10,
    };
    return this.calculations.calculateFullFlightPrice(trip);
  }

  onSecurityClick() {
    const newAgency: Agency = {
      id: 'new_agency',
      name: 'New Agency',
      range: AgencyRange.Interplanetary,
      status: AgencyStatus.Active,
    };
    this.agencies.post$(newAgency).subscribe({
      next: (agency) => console.log(agency),
      error: (err) => console.log(err),
    });
  }
  onBadCallClick() {
    this.agencies.getError$().subscribe({
      next: (agencies) => console.log(agencies),
      error: (err) => console.log(err),
    });
  }
}
