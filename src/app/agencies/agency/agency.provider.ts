import { InjectionToken } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Agency } from '@data/models/agency.interface';
import { AgenciesService } from '@data/services/agencies.service';
import { map, Observable, switchMap } from 'rxjs';

export const AGENCY$ = new InjectionToken<Observable<Agency>>('agency$');

export const AGENCY$_PROVIDER = {
  provide: AGENCY$,
  useFactory: createAgency$,
  deps: [ActivatedRoute, AgenciesService],
};

function createAgency$(
  activateRoute: ActivatedRoute,
  agencies: AgenciesService
): Observable<Agency> {
  return activateRoute.paramMap.pipe(
    map((paramMap) => paramMap.get('id') || ''),
    switchMap((id) => agencies.getById$(id))
  );
}
