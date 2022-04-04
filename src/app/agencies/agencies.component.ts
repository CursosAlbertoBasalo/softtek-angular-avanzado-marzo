import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Agency } from '@data/models/agency.interface';
import { Trip } from '@data/models/trip.interface';
import { TripsService } from '@data/services/trips.service';
import { forkJoin, map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'stk-agencies',
  templateUrl: './agencies.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgenciesComponent implements OnInit {
  agencies: { data?: Agency[]; error?: string } = { data: [], error: '' };
  trips$!: Observable<Trip[]>;
  totalPlaces$!: Observable<number>;
  constructor(
    private route: ActivatedRoute,
    private readonly router: Router,
    private trips: TripsService,
    private readonly title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.agencies = this.route.snapshot.data['agencies'];
    this.title.setTitle('Agencias: ' + this.agencies.data?.length);
    this.meta.updateTag({
      name: 'description',
      content: `There are ${this.agencies.data?.length} agencies`,
    });
    this.trips$ = this.route.queryParamMap.pipe(
      map((params) => params.get('agencyId')),
      switchMap((agencyId) => this.trips.getByAgencyId$(agencyId))
      // mergeMap((agencyId) => this.tripsService.getByAgencyId$(agencyId))
    );
    const agencies = this.agencies.data || [];

    this.totalPlaces$ = forkJoin(
      agencies.map((agency: Agency) => this.trips.getByAgencyId$(agency.id))
    ).pipe(
      map((agenciesTrips: Trip[][]) => agenciesTrips.flat()),
      map((allTrips: Trip[]) => allTrips.reduce((acc, trip) => acc + trip.places, 0))
    );
  }
  changeAgencyParam(agency: Agency) {
    this.router.navigate([], { relativeTo: this.route, queryParams: { agencyId: agency.id } });
  }
}
