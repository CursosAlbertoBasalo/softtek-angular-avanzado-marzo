import { BehaviorSubject, map, Observable } from 'rxjs';

// Single source of truth

export class AtomicStore<T> {
  private readonly state$: BehaviorSubject<T>;

  constructor(initialState: T) {
    const state = this.clone(initialState);
    this.state$ = new BehaviorSubject<T>(state);
  }

  public set(next: T): void {
    const state = this.clone(next);
    this.state$.next(state);
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

type Cuenta = { iban: string; saldo: number; fecha: Date };

const cuentaDeDaniel = new AtomicStore<Cuenta>({ iban: '', saldo: 0, fecha: new Date() });
cuentaDeDaniel.set({ iban: '', saldo: 100, fecha: new Date() });
cuentaDeDaniel.get();
cuentaDeDaniel.set({ iban: '', saldo: 200, fecha: new Date() });
cuentaDeDaniel.set({ iban: '', saldo: 300, fecha: new Date() });
cuentaDeDaniel.get$().subscribe((c) => console.log(c));

const y = {
  iban: '',
  saldo: 500,
  fecha: new Date(),
};

cuentaDeDaniel.get$();

y.saldo = 1000;

const x = cuentaDeDaniel.get();
x.saldo = 600;
console.log(cuentaDeDaniel.get());
