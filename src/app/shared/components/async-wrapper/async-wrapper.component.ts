import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Component({
  selector: 'stk-async-wrapper',
  templateUrl: './async-wrapper.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncWrapperComponent implements OnInit {
  @Input() dataTemplate!: TemplateRef<HTMLElement>;

  private _data$: Observable<unknown> | undefined;
  @Input() set data$(value: Observable<unknown> | undefined) {
    if (!value) return;
    this._data$ = value.pipe(
      tap({
        error: (err) => {
          console.log('AsyncWrapperComponent.data$.error', err.statusText);
          this.error = err.statusText;
          this.error$.next(err.statusText);
        },
      })
    );
  }
  get data$(): Observable<unknown> | undefined {
    return this._data$;
  }
  error = 'a';
  error$ = new BehaviorSubject('');
  constructor() {}

  ngOnInit(): void {}
}
