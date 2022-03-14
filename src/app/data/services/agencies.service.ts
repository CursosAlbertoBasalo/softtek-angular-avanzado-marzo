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
    return this.http.get<Agency[]>(this.apiUrl);
  }
  getById$(id: string): Observable<Agency> {
    return this.http.get<Agency>(this.apiUrl + '/' + id);
  }
  getError$(): Observable<Agency[]> {
    return this.http.get<Agency[]>(this.apiUrl + '/error');
  }
  post$(agency: Agency): Observable<Agency> {
    return this.http.post<Agency>(this.apiUrl, agency);
  }
}
