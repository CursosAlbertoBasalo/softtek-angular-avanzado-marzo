import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { environment } from '@env/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeightAbstractService } from './trips/weight-abstract.service';
import { WeightImperialService } from './trips/weight-imperial.service';
import { WeightMetricService } from './trips/weight-metric.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  providers: [
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
    {
      provide: WeightAbstractService,
      useFactory: () => {
        environment.units === 'imperial' ? new WeightImperialService() : new WeightMetricService();
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
