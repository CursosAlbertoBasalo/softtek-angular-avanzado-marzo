import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggerService } from '@core/logger.service';
import { filter, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CacheInterceptor implements HttpInterceptor {
  private readonly cache = new Map<string, HttpEvent<unknown>>();

  constructor(private readonly logger: LoggerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.method !== 'GET') return next.handle(request);
    const urlRequest = request.urlWithParams;
    const cachedResponse = this.cache.get(urlRequest);
    if (cachedResponse) {
      this.logger.log('📦 Returning cached response for ' + urlRequest, cachedResponse);
      return of(cachedResponse);
    }
    return next.handle(request).pipe(
      filter((event) => event instanceof HttpResponse),
      tap({
        next: (response) => {
          this.logger.warn('📦 Caching response for' + urlRequest, response);
          this.cache.set(urlRequest, response);
        },
      })
    );
  }
}
