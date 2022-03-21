import { BehaviorSubject, map, Observable } from 'rxjs';

export class AtomicStore<T> {
  private state$: BehaviorSubject<T>;

  constructor(initialState: T) {
    this.state$ = new BehaviorSubject<T>(initialState);
  }

  set(state: T) {
    this.state$.next(this.clone(state));
  }
  get(): T {
    return this.clone(this.state$.getValue());
  }

  get$(): Observable<T> {
    return this.state$.asObservable().pipe(map((state) => this.clone(state)));
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
