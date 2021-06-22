import {Injectable} from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    Router,
    RouterStateSnapshot,
    UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {take, tap} from "rxjs/operators";
import {AuthService} from "../services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private readonly router: Router,
                private readonly authService: AuthService) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const url: string = state.url;
     ///   return this.checkLogin(url);
        return true;
    }

    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.canActivate(childRoute, state);
    }


    checkLogin(url: string): Observable<boolean> {
       // return
        return this.authService.isAuthenticated.pipe(
            take(1),
            tap(isAuth => {
                //    if (isAuth) {
               //         this.router.navigate(['/auth', 'signin'], {queryParams: {redirectUrl: url}});
               //     }
                }
            ));
    }

}
