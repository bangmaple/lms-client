import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {InexamComponent} from "./inexam/inexam.component";
import {MainComponent} from "./main.component";
import {QuestionsManagementComponent} from "./questions-management/questions-management.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        pathMatch: 'full',
        component: HomeComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'exam',
        component: InexamComponent
      },
      {
        path: 'questionsManagement',
        component: QuestionsManagementComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
