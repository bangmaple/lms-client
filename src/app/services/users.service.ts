import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {JwtService} from "./jwt.service";
import {Observable} from "rxjs";
import UserModel from "../main/users-management/users.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly apiService: ApiService,
              private readonly jwtService: JwtService) { }

  getAllUsers(): Observable<UserModel> {
    return this.apiService.get('/users');
  }
}
