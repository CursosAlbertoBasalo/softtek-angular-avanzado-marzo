import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root',
})
export class ClientService extends AbstractService {
  constructor() {
    super();
  }
  public doThings() {
    console.log('🧔 doing things on the CLIENT side');
  }
}
