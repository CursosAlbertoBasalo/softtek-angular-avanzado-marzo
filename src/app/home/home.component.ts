import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { HomeService } from './home.service';

@Component({
  selector: 'stk-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  agencies$ = this.service.getAgencies$().pipe(
    tap({
      error: (err) => this.agenciesError$.next(err),
    })
  );
  agenciesError$ = new BehaviorSubject('');
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
