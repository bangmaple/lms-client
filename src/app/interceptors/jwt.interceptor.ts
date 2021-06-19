import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {JwtService} from "../services/jwt.service";
import {tap} from "rxjs/operators";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  public static AUTHORIZATION_HEADER = 'Authorization';

  constructor(private readonly jwtService: JwtService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.jwtService.getToken().token;
    if (token && !request.headers.get(JwtInterceptor.AUTHORIZATION_HEADER)) {
      const req = request.clone({setHeaders: { Authorization: `Bearer ${token}`}});
      return next.handle(req);
    } else {
      return next.handle(request).pipe(

          tap(evt => {
            if (evt instanceof HttpResponse) {
              let returnToken = evt.headers.get(JwtInterceptor.AUTHORIZATION_HEADER);
              console.log(`token: ${returnToken}`);
              if (returnToken) {
                returnToken = returnToken.substring(7);
                this.jwtService.saveToken(returnToken)
              }
            }
          })
      )
    }
  }
}
