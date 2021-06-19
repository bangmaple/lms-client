import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {ForgotpwdComponent} from "./forgotpwd/forgotpwd.component";
import {NoAuthGuard} from "../guards/no-auth.guard";

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'forgotpwd',
    component: ForgotpwdComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'signin'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
