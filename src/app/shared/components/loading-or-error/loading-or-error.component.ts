import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'stk-loading-or-error',
  templateUrl: './loading-or-error.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingOrErrorComponent implements OnInit {
  @Input() error$!: Observable<string>;
  constructor() {}

  ngOnInit(): void {
    this.error$.pipe();
  }
}
