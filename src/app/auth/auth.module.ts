import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {ForgotpwdComponent} from "./forgotpwd/forgotpwd.component";
import {CardModule} from "primeng/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {DividerModule} from "primeng/divider";
import {AuthValidatorService} from "../validators/auth-validator.service";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";


@NgModule({
  providers: [AuthValidatorService, MessageService],
  declarations: [SigninComponent, SignupComponent, ForgotpwdComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CardModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DividerModule,
    ToastModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
