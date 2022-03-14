import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { environment } from '@env/environment';
import { SharedModule } from '@shared/shared.module';
import { LabsRoutingModule } from './labs-routing.module';
import { LabsComponent } from './labs.component';
import { WeightAbstractService } from './weight-abstract.service';
import { WeightImperialService } from './weight-imperial.service';
import { WeightMetricService } from './weight-metric.service';

function createWeightService(): WeightAbstractService {
  if (environment.units === 'imperial') {
    return new WeightImperialService();
  } else {
    return new WeightMetricService();
  }
}

@NgModule({
  declarations: [LabsComponent],
  providers: [
    { provide: WeightAbstractService, useFactory: createWeightService },
    // TripCalculationsService,
    // { provide: TripCalculationsService, useClass: TripCalculationsService },
    // {
    //   provide: TripCalculationsService,
    //   useValue: new TripCalculationsService(),
    // },
    // {
    //   provide: TripCalculationsService,
    //   useFactory: () => {
    //     new TripCalculationsService();
    //   },
    // },
    // {
    //   provide: WeightAbstractService,
    //   useValue: new WeightImperialService(),
    // },
  ],
  imports: [CommonModule, LabsRoutingModule, SharedModule],
})
export class LabsModule {}
