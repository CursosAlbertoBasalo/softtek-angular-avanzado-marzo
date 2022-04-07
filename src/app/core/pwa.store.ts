import { Injectable } from '@angular/core';
import { OrganicStore } from './stores/organic.store';

export type Pwa = { version: string; description: string; status: string; showReload: boolean };

@Injectable({
  providedIn: 'root',
})
export class PwaStore extends OrganicStore<Pwa> {
  constructor() {
    super({ version: 'initial', description: 'initial', status: 'initial', showReload: false });
    super.registerEffect((change) => console.log(change.action.payload));
  }
}
