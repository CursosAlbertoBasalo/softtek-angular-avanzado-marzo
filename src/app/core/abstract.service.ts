import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class AbstractService {
  constructor() {}
  public abstract doThings(): void;
}
