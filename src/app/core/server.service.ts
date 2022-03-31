import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root',
})
export class ServerService extends AbstractService {
  constructor() {
    super();
  }
  public doThings() {
    console.log('🤖 doing things on the SERVER side');
  }
}
