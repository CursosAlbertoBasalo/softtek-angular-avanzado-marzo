import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CacheInterceptor } from '@data/services/cache.interceptor';
import { ErrorInterceptor } from '@data/services/error.interceptor';
import { StatusInterceptor } from '@data/services/status.interceptor';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoggerService } from './logger.service';

export const APP_VERSION = new InjectionToken<string>('appVersion');
export const ONLY_ERRORS = new InjectionToken<boolean>('onlyErrors');

// export const HTTP_INTERCEPTORS_STK = new InjectionToken<HttpInterceptor[]>('HTTP_INTERCEPTORS');

// class ClientHttpSTK {
//   constructor(@Inject(HTTP_INTERCEPTORS_STK) misInterceptores: HttpInterceptor[]) {
//     misInterceptores.forEach((interceptor) => {
//       interceptor.intercept(null, null);
//     });
//     console.log('ClientHttpSTK', misInterceptores);
//   }
// }

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule],
  declarations: [HeaderComponent, FooterComponent],
  providers: [
    { provide: APP_VERSION, useValue: '1.0.0' },
    { provide: ONLY_ERRORS, useValue: false },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: StatusInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
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
