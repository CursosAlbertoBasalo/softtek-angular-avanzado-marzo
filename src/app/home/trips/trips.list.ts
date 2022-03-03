import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Trip } from '@data/models/trip.interface';

@Component({
  selector: 'stk-trips',
  templateUrl: './trips.list.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripsList implements OnInit {
  @Input() trips: Trip[] = [];
  @Output() refresh = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
}
