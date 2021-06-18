import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InexamComponent} from "./inexam/inexam.component";

const routes: Routes = [
  {
    path: 'exam',
    pathMatch: 'full',
    component: InexamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
