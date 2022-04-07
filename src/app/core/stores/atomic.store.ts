import { BehaviorSubject, map, Observable } from 'rxjs';

// Single source of truth

export class AtomicStore<T> {
  private readonly state$: BehaviorSubject<T>;

  constructor(initialState: T) {
    const state = this.clone(initialState);
    this.state$ = new BehaviorSubject<T>(state);
  }

  public set(next: Partial<T>): void {
    const state = this.state$.getValue();
    this.state$.next({ ...state, ...next });
  }

  public get(): T {
    const current = this.state$.getValue();
    return this.clone(current);
  }

  public get$(): Observable<T> {
    const state$ = this.state$.asObservable();
    return state$.pipe(map(this.clone));
  }

  protected clone(state: T) {
    return { ...state };
  }
}
