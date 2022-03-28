import { Component, OnInit } from '@angular/core';
import { ApiStatusStore } from '@data/services/api-status.store';

@Component({
  selector: 'stk-footer',
  templateUrl: './footer.component.html',
  styles: [],
})
export class FooterComponent implements OnInit {
  apiStatus$ = this.apiStatusStore.select$((apiStatus) => apiStatus);
  apiErrors$ = this.apiStatusStore.select$((apiStatus) => apiStatus.errors);
  constructor(private apiStatusStore: ApiStatusStore) {}

  ngOnInit(): void {}
}
