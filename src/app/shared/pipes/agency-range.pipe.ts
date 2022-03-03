import { Pipe, PipeTransform } from '@angular/core';
import { AgencyRange } from '@data/models/agency-range.enum';

@Pipe({
  name: 'agencyRange',
})
export class AgencyRangePipe implements PipeTransform {
  transform(value: AgencyRange, ...args: unknown[]): string {
    switch (value) {
      case AgencyRange.Orbital:
        return '💫';
      default:
        return '🌠';
    }
  }
}
