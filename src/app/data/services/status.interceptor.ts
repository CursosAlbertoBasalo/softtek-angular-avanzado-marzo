import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggerService } from '@core/logger.service';
import { filter, Observable, tap } from 'rxjs';
import { ApiStatusActionType, ApiStatusStore } from './api-status.store';

@Injectable()
export class StatusInterceptor implements HttpInterceptor {
  constructor(
    private readonly logger: LoggerService,
    private readonly apiStatusStore: ApiStatusStore
  ) {}

  // setStatus(status: Status, urlRequest?: string, error?: string) {
  //   this.logger.log('📇 TO DO: Use a global service to comunicate status:', {
  //     status: status,
  //     message: urlRequest,
  //     error: error,
  //   });
  // }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // this.setStatus(Status.Working, request.urlWithParams);
    this.apiStatusStore.dispatch(ApiStatusActionType.SetWorking, {
      message: request.urlWithParams,
    });
    return next.handle(request).pipe(
      filter((event) => event instanceof HttpResponse),
      tap({
        next: (event) =>
          this.apiStatusStore.dispatch(ApiStatusActionType.SetSuccess, {
            message: request.urlWithParams,
          }),
        error: (error) =>
          this.apiStatusStore.dispatch(ApiStatusActionType.SetError, {
            message: request.urlWithParams,
            error: error.message,
          }),
        // tap({
        //   next: (event) => this.setStatus(Status.Success, request.urlWithParams, ''),
        //   error: (error) => this.setStatus(Status.Error, request.urlWithParams, error.message),
        // })
      })
    );
  }
}
