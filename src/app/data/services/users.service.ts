import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@data/models/user.interface';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly apiUrl = environment.apiUrl + '/users';

  constructor(private http: HttpClient) {}

  getAll$(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  getByEmail$(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/?email=${email}`);
  }
}
