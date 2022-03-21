import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trip } from '@data/models/trip.interface';
import { environment } from '@env/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TripsService {
  private readonly apiUrl = environment.apiUrl + '/trips';

  constructor(private http: HttpClient) {}

  getAll$(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl);
  }
  getError$(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl + '/error');
  }
  getByAgencyId$(agencyId: string | null): Observable<Trip[]> {
    if (agencyId === null) return of([]);
    return this.http.get<Trip[]>(this.apiUrl + '?agencyId=' + agencyId);
  }
  getByText$(text: string | null): Observable<Trip[]> {
    if (text === null) return of([]);
    return this.http.get<Trip[]>(this.apiUrl + '?q=' + text);
  }
}
