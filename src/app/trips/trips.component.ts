import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Trip } from '@data/models/trip.interface';
import { TripsService } from '@data/services/trips.service';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  Observable,
  shareReplay,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'stk-trips',
  templateUrl: './trips.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripsComponent implements OnInit {
  @ViewChild('searchInput', { static: true }) searchInput!: ElementRef;

  searchInput$!: Observable<string>;
  tripsResult$!: Observable<Trip[]>;
  constructor(private readonly trips: TripsService) {}

  ngOnInit(): void {
    this.searchInput$ = fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      map((event) => (event as any).target.value)
    );
    this.tripsResult$ = this.searchInput$.pipe(
      debounceTime(500),
      filter((text) => text.length >= 2),
      distinctUntilChanged(),
      switchMap((searchTerm) => this.trips.getByText$(searchTerm)),
      shareReplay()
    );
  }
}
