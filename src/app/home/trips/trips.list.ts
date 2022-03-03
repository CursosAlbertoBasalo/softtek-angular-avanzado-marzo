import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'stk-trips',
  templateUrl: './trips.list.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripsList implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
