import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HomeService } from './home.service';

@Component({
  selector: 'stk-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  agencies$ = this.service.getAgencies$();
  trips$ = this.service.getTrips$();
  tripsError$ = new BehaviorSubject('');

  constructor(private service: HomeService) {}

  ngOnInit(): void {}

  loadAgencies() {
    this.agencies$ = this.service.getAgencies$();
  }
  loadTrips() {
    this.trips$ = this.service.getTrips$();
  }
}
