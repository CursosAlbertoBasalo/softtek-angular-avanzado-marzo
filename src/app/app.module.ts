import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeightAbstractService } from './trips/weight-abstract.service';
import { WeightImperialService } from './trips/weight-imperial.service';

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
      useValue: new WeightImperialService(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
