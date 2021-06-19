import {ApiInterceptor} from "./api.interceptor";
import {JwtInterceptor} from "./jwt.interceptor";
import {ServerErrorInterceptor} from "./server-error.interceptor";
import {AuthInterceptor} from "./auth.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {NocacheInterceptor} from "./nocache.interceptor";

export const HttpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
 //   { provide: HTTP_INTERCEPTORS, useClass: NocacheInterceptor, multi: true }
];
