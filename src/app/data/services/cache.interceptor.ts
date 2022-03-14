import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CacheInterceptor implements HttpInterceptor {
  private readonly cache = new Map<string, HttpEvent<unknown>>();

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.method !== 'GET') return next.handle(request);
    const urlRequest = request.urlWithParams;
    const cachedResponse = this.cache.get(urlRequest);
    if (cachedResponse) {
      return of(cachedResponse);
    }
    return next.handle(request).pipe(
      filter((event) => event instanceof HttpResponse),
      tap({
        next: (response) => {
          this.cache.set(urlRequest, response);
        },
      })
    );
  }
}
