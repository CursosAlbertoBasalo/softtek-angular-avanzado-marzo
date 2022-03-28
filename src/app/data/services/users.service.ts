import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthStore } from '@core/auth.store';
import { User } from '@data/models/user.interface';
import { environment } from '@env/environment';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly apiUrl = environment.apiUrl + '/users';

  constructor(private http: HttpClient, private auth: AuthStore) {}

  getAll$(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  getByEmail$(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/?email=${email}`);
  }

  postRegister$(user: User): Observable<string> {
    return this.http.post<{ accessToken: string }>(this.apiUrl, user).pipe(
      map((result) => result.accessToken),
      tap((token) => this.auth.setAuth({ userEmail: user.email, token }))
    );
  }
}
