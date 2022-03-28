import { Component, OnInit } from '@angular/core';
import { AuthStore } from '@core/auth.store';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'stk-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  public title = 'softtek astro bookings';
  public isAuthenticated$: Observable<boolean>;
  public emailUser$: Observable<string>;
  constructor(private auth: AuthStore) {
    this.isAuthenticated$ = this.auth.getAuth$().pipe(
      map((auth) => auth.token),
      map((token) => !!token)
    );
    this.emailUser$ = this.auth.getEmail$();
  }

  ngOnInit(): void {}
}
