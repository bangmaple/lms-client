import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {InexamComponent} from "./inexam/inexam.component";
import {MainComponent} from "./main.component";
import {QuestionsManagementComponent} from "./questions-management/questions-management.component";
import {AuthGuard} from "../guards/auth.guard";
import {UsersManagementComponent} from "./users-management/users-management.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        pathMatch: 'full',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'exam',
        component: InexamComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'questionsManagement',
        component: QuestionsManagementComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'usersManagement',
        component: UsersManagementComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
