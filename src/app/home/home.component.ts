import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
  tripsData: Trip[] = [];

  constructor(private service: HomeService, private title: Title, private meta: Meta) {
    this.title.setTitle('🔥🚧⏰✨✅♻️🔚');
    this.meta.updateTag({ name: 'description', content: 'Sample application for Softtek' });
  }

  ngOnInit(): void {}

  loadAgencies() {
    this.agencies$ = this.service.getAgencies$();
  }
  loadTrips() {
    this.trips$ = this.service.getTrips$();
  }
  onTripsLoaded(data: unknown) {
    this.tripsData = data as Trip[];
  }
}
