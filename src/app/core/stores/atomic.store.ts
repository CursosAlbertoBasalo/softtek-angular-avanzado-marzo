import { BehaviorSubject, map, Observable } from 'rxjs';

// Single source of truth

export class AtomicStore<T> {
  private readonly state$: BehaviorSubject<T>;

  constructor(initialState: T) {
    const state = this.clone(initialState);
    this.state$ = new BehaviorSubject<T>(state);
  }

  public set(state: Partial<T>): void {
    const current = this.get();
    const next = { ...current, ...state };
    this.state$.next(next);
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
    // return { ...state };
    return JSON.parse(JSON.stringify(state));
  }
}

// type Cuenta = { iban: string; saldo: number; fecha: Date };

// const cuentaDeDaniel = new AtomicStore<Cuenta>({ iban: '', saldo: 0, fecha: new Date() });
// cuentaDeDaniel.set({ iban: '', saldo: 100, fecha: new Date() });
// cuentaDeDaniel.get();
// cuentaDeDaniel.set({ iban: '', saldo: 200, fecha: new Date() });
// cuentaDeDaniel.set({ iban: '', saldo: 300, fecha: new Date() });
// cuentaDeDaniel.get$().subscribe((c) => console.log(c));

// const y = {
//   iban: '',
//   saldo: 500,
//   fecha: new Date(),
// };

// cuentaDeDaniel.get$();

// y.saldo = 1000;

// const x = cuentaDeDaniel.get();
// x.saldo = 600;
// console.log(cuentaDeDaniel.get());

// let empresa: string = 'softtek';
// empresa = 'vitae';

// const empresa2: string = 'softtek';
// empresa2 = 'vitae';

// class Dirección {
//   calle: string;
//   numero: number;
// }

// class Empresa {
//   nombre: string;
//   nif: string;
//   empleados: number;
//   facturación: number;
//   dirección: Dirección;
// }

// let empresa3: Empresa = new Empresa();
// empresa3.nombre = 'softtek';
// empresa3.nif = '12345678';
// empresa3.empleados = 100;
// empresa3.facturación = 1000;

// empresa3 = new Empresa();
// empresa3.nombre = 'vitae';
// empresa3.nif = '87654321';
// empresa3.empleados = 200;
// empresa3.facturación = 2000;

// const empresa4: Empresa = new Empresa();
// empresa4.nombre = 'softtek';
// empresa4.nif = '12345678';
// empresa4.empleados = 100;
// empresa4.facturación = 1000;

// // empresa4 = new Empresa();
// empresa4.nombre = 'vitae';
// empresa4.nif = '87654321';
// empresa4.empleados = 200;

// imprimir(empresa3);
// imprimir({ ...empresa4 });

// const eX = new Empresa();
// eX.nombre = empresa4.nombre;
// eX.nif = empresa4.nif;
// eX.empleados = empresa4.empleados;
// eX.facturación = empresa4.facturación;

// function imprimir(empresa: Empresa) {
//   console.log(empresa.nombre);
//   console.log(empresa.nif);
//   console.log(empresa.empleados);
//   empresa.facturación = 2000;
//   console.log(empresa.facturación);
// }

// const empresa5 = new Empresa();
// empresa5.nombre = 'softtek';
// empresa5.nif = '12345678';
// empresa5.empleados = 100;
// empresa5.facturación = 1000;
// empresa5.dirección = new Dirección();
// empresa5.dirección.calle = 'calle';
// empresa5.dirección.numero = 123;

// // empresa5 = new Empresa();
// // empresa5.nombre = 'vitae';
// // empresa5.dirección.calle = 'caminito';

// const eY = { ...empresa5 };
// eY.nombre = empresa5.nombre;
// eY.empleados = empresa5.empleados;
// eY.facturación = empresa5.facturación;
// eY.dirección = empresa5.dirección;

// JSON.stringify(empresa5);
// ('{nomsdflskdfa´df .a}');

// JSON.parse('{fsgsdfgdsf { dsafasdf:[{}]}gsdf}');
// eY.dirección.calle = empresa5.dirección.calle;

// malvada(ey);
// function malvada(e: Empresa) {
//   e.nombre = 'vitae';
//   e.dirección.calle = 'caminito';
// }
// // empresa5.nombre 'sofftek'
