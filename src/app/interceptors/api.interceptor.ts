import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from "rxjs/operators";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const baseUrl = document.getElementsByTagName('base')[0].href;
    const apiReq = request.clone({
      url: `${baseUrl}${request.url}`,
      setHeaders: {
        'X-Forwarded-Proto': 'http',
        'X-Forwarded-Host': 'localhost',
        'X-Forwarded-Port': '5000'
      }});
    return next.handle(apiReq);
  }
}
