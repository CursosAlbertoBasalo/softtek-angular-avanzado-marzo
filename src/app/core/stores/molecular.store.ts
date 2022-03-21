import { Subject } from 'rxjs';
import { AtomicStore } from './atomic.store';

export type Action = { type: string; payload: unknown };
export type Change<T> = { action: Action; previous: T; next: T };

export class MolecularStore<T> extends AtomicStore<T> {
  protected changes$ = new Subject<Change<T>>();

  public dispatch(action: Action): void {
    const previous = super.get();
    const next = action.payload as T;
    this.applyChange({ action, previous, next });
  }

  protected applyChange(change: Change<T>) {
    super.set(change.next);
    this.changes$.next(change);
  }
}
