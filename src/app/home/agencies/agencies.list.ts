import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Agency } from '@data/models/agency.interface';

@Component({
  selector: 'stk-agencies',
  templateUrl: './agencies.list.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgenciesList implements OnInit {
  @Input() agencies: Agency[] = [];
  @Output() refresh = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
}
