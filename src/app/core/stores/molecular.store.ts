import { filter, ReplaySubject } from 'rxjs';
import { AtomicStore } from './atomic.store';

// History of changes

export type Action = { type: string; payload: unknown };
export type Change<T> = { action: Action; current: T; next: T };
export type Effect<T> = (change: Change<T>) => void;
export type Filter<T> = (change: Change<T>) => boolean;

// Changes log

export class MolecularStore<T> extends AtomicStore<T> {
  protected readonly changes$ = new ReplaySubject<Change<T>>();

  public override set(state: Partial<T>): void {
    this.dispatch({ type: 'SET_STATE', payload: state });
  }

  public dispatch(action: Action): void {
    const current = super.get();
    const next = action.payload as T;
    this.applyChange({ action, current, next });
  }

  public registerEffect(effect: Effect<T>, change?: Filter<T>): void {
    const filterFn = change ? change : () => true;
    this.changes$.pipe(filter(filterFn)).subscribe(effect);
  }

  protected applyChange(change: Change<T>) {
    super.set(change.next);
    this.changes$.next(change);
  }
}
