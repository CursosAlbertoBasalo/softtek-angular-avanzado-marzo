import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Component({
  selector: 'stk-async-wrapper',
  templateUrl: './async-wrapper.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncWrapperComponent implements OnInit {
  private _data$!: Observable<unknown>;

  @Input() set data$(value: Observable<unknown>) {
    if (!value) return;
    this._data$ = value.pipe(
      tap({
        error: (err) => this.error$.next(err),
      })
    );
  }
  get data$(): Observable<unknown> {
    return this._data$;
  }
  error$ = new BehaviorSubject('');
  constructor() {}

  ngOnInit(): void {}
}
