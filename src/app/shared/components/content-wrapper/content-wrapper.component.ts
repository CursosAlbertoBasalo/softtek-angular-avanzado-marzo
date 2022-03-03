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
  private _data$!: Observable<unknown>;
  @Input() set data$(value: Observable<unknown>) {
    if (!value) return;
    this._data$ = value.pipe(
      tap({
        next: (data) => this.dataLoaded.next(data),
        error: (err) => this.error$.next(err),
      })
    );
  }
  get data$(): Observable<unknown> {
    return this._data$;
  }
  @Output() dataLoaded = new EventEmitter<unknown>();

  error$ = new BehaviorSubject('');
  constructor() {}

  ngOnInit(): void {}
}
