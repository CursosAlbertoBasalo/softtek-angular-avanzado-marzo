import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agency } from '@data/models/agency.interface';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgenciesService {
  private readonly apiUrl = environment.apiUrl + '/agencies';

  constructor(private http: HttpClient) {}

  getAll$(): Observable<Agency[]> {
    console.log('getAll$', this.apiUrl);
    return this.http.get<Agency[]>(this.apiUrl);
  }
  getError$(): Observable<Agency[]> {
    return this.http.get<Agency[]>(this.apiUrl + '/error');
  }
}
