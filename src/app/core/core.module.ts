import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoggerService } from './logger.service';

export const APP_VERSION = new InjectionToken<string>('appVersion');
export const ONLY_ERRORS = new InjectionToken<boolean>('onlyErrors');

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule],
  declarations: [HeaderComponent, FooterComponent],
  providers: [
    { provide: APP_VERSION, useValue: '1.0.0' },
    { provide: ONLY_ERRORS, useValue: false },
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {
  constructor(logger: LoggerService) {
    logger.log('CoreModule created', {});
    logger.warn('CoreModule created', { warning: true });
    logger.error('CoreModule ERROR', new Error('Fake Error'));
  }
}
