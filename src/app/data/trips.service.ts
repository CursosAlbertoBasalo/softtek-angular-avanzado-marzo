import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { Trip } from './models/trip';

@Injectable({
  providedIn: 'root',
})
export class TripsService {
  private readonly apiUrl = environment.apiUrl + '/trips';

  constructor(private http: HttpClient) {}

  getAll$(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl);
  }
}
