import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'stk-list',
  templateUrl: './list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  @Input() data: unknown[] = [];
  @Input() dataName = '';
  @Output() refresh = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
}
