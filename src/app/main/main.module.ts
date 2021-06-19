import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {PanelMenuModule} from "primeng/panelmenu";
import {SidebarModule} from "primeng/sidebar";
import {MenubarModule} from "primeng/menubar";
import {SidebarComponent} from "../layout/sidebar/sidebar.component";


@NgModule({
  declarations: [SidebarComponent,],
  imports: [
    CommonModule,
      PanelMenuModule,
      SidebarModule,
      MenubarModule,
    MainRoutingModule
  ]
})
export class MainModule { }
