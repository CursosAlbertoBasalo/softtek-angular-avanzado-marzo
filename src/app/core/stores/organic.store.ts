import { distinctUntilChanged, map, Observable } from 'rxjs';
import { Action, MolecularStore } from './molecular.store';

type Selector<T> = (state: T) => unknown;
type Reducer<T> = (state: T, payload: any) => T;

export class OrganicStore<T> extends MolecularStore<T> {
  reducers: Map<string, Reducer<T>> = new Map();

  public addReducer(actionType: string, reducer: Reducer<T>): void {
    this.reducers.set(actionType, reducer);
  }

  override dispatch(action: Action): void {
    const reducer = this.reducers.get(action.type);
    if (reducer) {
      const previous = super.get();
      const next = reducer(previous, action.payload);
      this.applyChange({ action, previous, next });
    }
  }

  select$(selector: Selector<T>): Observable<unknown> {
    return super.get$().pipe(map(selector), distinctUntilChanged());
  }
}

type Cuenta = { iban: string; saldo: number; fecha: Date };

const cuentaDeDaniel = new OrganicStore<Cuenta>({ iban: '', saldo: 0, fecha: new Date() });
cuentaDeDaniel.set({ iban: '', saldo: 100, fecha: new Date() });
cuentaDeDaniel.set({ iban: '', saldo: 100, fecha: new Date() });
cuentaDeDaniel.get();
cuentaDeDaniel.get$().subscribe((c) => console.log(c));
cuentaDeDaniel.select$((state) => state.saldo * 2).subscribe((x) => console.log(x));
cuentaDeDaniel.set({ iban: '', saldo: 200, fecha: new Date() });
cuentaDeDaniel.set({ iban: '', saldo: 300, fecha: new Date() });
