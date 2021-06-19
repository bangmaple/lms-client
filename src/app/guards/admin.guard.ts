import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";
import {map, take, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild {
  constructor(private readonly router: Router,
              private readonly authService: AuthService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url: string = state.url;
    return this.checkLogin(url);
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state);
  }

  checkLogin(url: string): Observable<boolean> {
    return this.authService.isAuthenticated.pipe(
        take(1),
        map( isAuth => isAuth ? this.authService.getCurrentUser()!.role === 'ROLE_ADMIN' ??true : false),
        tap( goodAdmin => {
              if (!goodAdmin) {
                this.router.navigate(['/auth', 'signin'], { queryParams: { redirectUrl: url }});
              }

            }
        ));
  }

}
