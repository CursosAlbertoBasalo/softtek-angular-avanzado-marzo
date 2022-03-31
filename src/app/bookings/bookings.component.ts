import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'stk-bookings',
  templateUrl: './bookings.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
