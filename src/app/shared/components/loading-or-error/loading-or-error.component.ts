import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stk-loading-or-error',
  templateUrl: './loading-or-error.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingOrErrorComponent implements OnInit {
  @Input() error: string | null = '';
  constructor() {}

  ngOnInit(): void {}
}
