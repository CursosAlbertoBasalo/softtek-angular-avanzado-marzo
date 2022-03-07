import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Agency } from '@data/models/agency.interface';
import { AgenciesService } from '@data/services/agencies.service';
import { catchError, delay, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgenciesResolver implements Resolve<{ data?: Agency[]; error?: string }> {
  constructor(private agencies: AgenciesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<{ data?: Agency[]; error?: string }> {
    return this.agencies.getAll$().pipe(
      delay(300),
      map((data) => ({ data })),
      catchError((err) => of({ error: err.message }))
    );
  }
}
