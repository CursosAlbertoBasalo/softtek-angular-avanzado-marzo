import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from './models/auth.interface';
import { Change } from './stores/molecular.store';
import { OrganicStore } from './stores/organic.store';

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  private readonly authStore$: OrganicStore<Auth>;

  constructor() {
    const initialState: Auth = {
      userEmail: '',
      token: '',
    };
    this.authStore$ = new OrganicStore(initialState);
    this.authStore$.registerEffect(authChangesLogger, () => true);
  }

  public setAuth(auth: Auth): void {
    // this.authStore$.set(auth);
    this.authStore$.dispatch({ type: 'SET_AUTH', payload: auth });
  }
  public getToken(): string {
    return this.authStore$.get().token;
  }
  public getAuth$(): Observable<Auth> {
    return this.authStore$.get$();
  }
  public getEmail$(): Observable<string> {
    return this.authStore$.select$((auth) => auth.userEmail);
  }
}

function authChangesLogger(change: Change<Auth>) {
  console.log(' 👮‍♂️ ' + JSON.stringify(change));
}
