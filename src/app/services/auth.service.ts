import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject} from "rxjs";
import User from "../models/user.model";
import {distinctUntilChanged, tap} from "rxjs/operators";
import {ApiService} from "./api.service";
import {JwtService} from "./jwt.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser$ = new BehaviorSubject<User>({id: 0});
  public currentUser = this.currentUser$.asObservable().pipe(distinctUntilChanged());

  private isAuthenticated$ = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this.isAuthenticated$.asObservable();

  public forgotAccount!: {email: string};

  constructor(private readonly apiService: ApiService,
              private readonly jwtService: JwtService) {

  }

  populate(): void {
    const currentUserId = this.jwtService.getToken().id; // If JWT detected, attempt to get & store user's info
    if (currentUserId) {
      this.apiService.get('/employees/' + currentUserId)
          .subscribe (
              (user: User) => this.setAuth(user),
              () => this.purgeAuth() // err
          );
    } else {
      this.purgeAuth(); // Remove any potential remnants of previous auth states
    }
  }

  setAuth(user: User): void {
    this.jwtService.saveCurrentUserId(user);  // Save JWT sent from server in localstorage
    this.currentUser$.next(user);
    console.log(user);

    this.isAuthenticated$.next(true);
  }

  getCurrentUser(): User|undefined {
    return this.currentUser$.value;
  }

  purgeAuth(): void {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUser$.next({id: 0});
    // Set auth status to false
    this.isAuthenticated$.next(false);
  }

  attemptAuth(credentials: {username: string, password: string}): Observable<User> {
    return this.apiService.post('/auth/signin', credentials).pipe(tap( (user: User) => this.setAuth(user)));
  }

  forgotPassword(data: {email: string}): Observable<any> {
    return this.apiService.post('/auth/forgotpwd', data);
  }

  resetPassword(data: {email: string, verifyCode: string, newPwd: string}): Observable<User> {
    return this.apiService.post('/auth/resetpwd', data).pipe(tap( (user: User) => this.setAuth(user)));
  }

  signup(data: {email: string, password: string}): Observable<User> {
    return this.apiService.post('/auth/signup', data).pipe(tap( (user: User) => this.setAuth(user)));
  }

}
