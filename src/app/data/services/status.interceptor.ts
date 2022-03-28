import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggerService } from '@core/logger.service';
import { Status } from '@data/models/status.enum';
import { filter, Observable, tap } from 'rxjs';

@Injectable()
export class StatusInterceptor implements HttpInterceptor {
  constructor(private readonly logger: LoggerService) {}

  setStatus(status: Status, urlRequest?: string, error?: string) {
    this.logger.log('📇 TO DO: Use a global service to comunicate status:', {
      status: status,
      message: urlRequest,
      error: error,
    });
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.setStatus(Status.Working, request.urlWithParams);

    return next.handle(request).pipe(
      filter((event) => event instanceof HttpResponse),
      tap({
        next: (event) => this.setStatus(Status.Success, request.urlWithParams, ''),
        error: (error) => this.setStatus(Status.Error, request.urlWithParams, error.message),
      })
    );
  }
}
