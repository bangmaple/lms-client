import {Injectable, Injector} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from "rxjs/operators";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

  constructor(private readonly injector: Injector,
              private readonly msgService: MessageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      //  retry(1),
        catchError((error: HttpErrorResponse) => {
            if (error.status === 400 && error.url.endsWith('/auth/signin')) {
                this.msgService.add({
                    severity: 'error',
                    summary: 'Login Failed',
                    detail: error.error.message
                })
                return throwError(error);

            } else if (error.status === 401) {
            this.injector.get(AuthService).purgeAuth();
            this.injector.get(Router).navigate(['auth', 'signin']);
            return throwError(error);
          } else {
            return throwError(error);
          }
        })
    );
  }
}
