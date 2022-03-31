import { isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '@env/environment';
import { AbstractService } from './abstract.service';
import { APP_VERSION, ONLY_ERRORS } from './core.module';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  //private readonly appVersion = '1.0.0';
  //private readonly onlyErrors = true;

  private readonly apiUrl = environment.apiUrl + '/logs';

  private isServer = isPlatformServer(this.platformId);
  private isClient = !this.isServer;

  constructor(
    @Inject(APP_VERSION) private readonly appVersion: string,
    @Inject(ONLY_ERRORS) private readonly onlyErrors: boolean,
    @Inject(PLATFORM_ID) private readonly platformId: Object,
    private readonly http: HttpClient,
    private readonly abstract: AbstractService
  ) {
    abstract.doThings();
  }

  log(message: string, payload: unknown) {
    if (this.onlyErrors) return;
    if (this.isServer) return;
    const logMessage = `${this.appVersion} - ${message}`;
    console.log(logMessage, payload);
  }
  warn(message: string, payload: unknown) {
    if (this.onlyErrors) return;
    const logMessage = `${this.appVersion} - ${message}`;
    console.warn(logMessage, payload);
  }
  error(message: string, error: Error) {
    const logMessage = `${this.appVersion} - ${message} - ERR: ${error.message}`;
    if (this.isClient) {
      const payload = {
        message: error.message,
        appVersion: this.appVersion,
      };
      this.http.post(this.apiUrl, payload).subscribe();
    } else {
      console.warn(logMessage);
    }
  }
}
