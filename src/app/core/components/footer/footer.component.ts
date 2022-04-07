import { Component, OnInit } from '@angular/core';
import { PwaStore } from '@core/pwa.store';
import { ApiStatusStore } from '@data/services/api-status.store';

@Component({
  selector: 'stk-footer',
  templateUrl: './footer.component.html',
  styles: [],
})
export class FooterComponent implements OnInit {
  apiStatus$ = this.apiStatusStore.select$((apiStatus) => apiStatus);
  apiErrors$ = this.apiStatusStore.select$((apiStatus) => apiStatus.errors);
  pwa$ = this.pwaStore.get$();
  constructor(private apiStatusStore: ApiStatusStore, private pwaStore: PwaStore) {}

  ngOnInit(): void {}

  public reloadApp() {
    document.location.reload();
  }
}
