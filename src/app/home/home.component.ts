import { Component, OnInit } from '@angular/core';
import { Trip } from '@data/models/trip.interface';
import { HomeService } from './home.service';

@Component({
  selector: 'stk-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  agencies$ = this.service.getAgencies$();
  trips$ = this.service.getTrips$();
  trips: Trip[] = [];

  constructor(private service: HomeService) {}

  ngOnInit(): void {}

  loadAgencies() {
    this.agencies$ = this.service.getAgencies$();
  }
  loadTrips() {
    this.trips$ = this.service.getTrips$();
  }
  onDataLoaded(trips: unknown) {
    this.trips = trips as Trip[];
  }
}
