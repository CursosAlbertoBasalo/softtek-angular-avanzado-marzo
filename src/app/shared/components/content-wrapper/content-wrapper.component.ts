import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Component({
  selector: 'stk-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentWrapperComponent implements OnInit {
  private _data$: Observable<unknown> | undefined;
  @Input() set data$(value: Observable<unknown> | undefined) {
    if (!value) return;
    this._data$ = value.pipe(
      tap({
        next: (data) => this.dataLoaded.next(data),
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

  @Output() dataLoaded = new EventEmitter<unknown>();

  constructor() {}

  ngOnInit(): void {}
}
