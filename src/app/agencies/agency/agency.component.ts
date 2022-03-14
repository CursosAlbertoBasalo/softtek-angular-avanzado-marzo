import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Agency } from '@data/models/agency.interface';
import { Observable } from 'rxjs';
import { AGENCY$, AGENCY$_PROVIDER } from './agency.provider';

@Component({
  selector: 'stk-agency',
  templateUrl: './agency.component.html',
  styles: [],
  providers: [AGENCY$_PROVIDER],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgencyComponent implements OnInit {
  constructor(@Inject(AGENCY$) public agency$: Observable<Agency>) {}
  ngOnInit(): void {}
}
