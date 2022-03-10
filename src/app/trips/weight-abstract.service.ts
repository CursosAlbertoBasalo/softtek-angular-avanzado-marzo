import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class WeightAbstractService {
  constructor() {}
  abstract getWeight(weight: number): string;
}
