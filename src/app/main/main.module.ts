import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {PanelMenuModule} from "primeng/panelmenu";
import {SidebarModule} from "primeng/sidebar";
import {MenubarModule} from "primeng/menubar";
import {SidebarComponent} from "../layout/sidebar/sidebar.component";
import {HomeComponent} from './home/home.component';
import {SkeletonModule} from "primeng/skeleton";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {MainComponent} from "./main.component";
import {InexamComponent} from "./inexam/inexam.component";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import { QuestionsManagementComponent } from './questions-management/questions-management.component';
import {ToolbarModule} from "primeng/toolbar";
import {RippleModule} from "primeng/ripple";
import {TableModule} from "primeng/table";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputNumberModule} from "primeng/inputnumber";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService} from "primeng/api";
import {DialogService} from "primeng/dynamicdialog";
import {InputTextareaModule} from "primeng/inputtextarea";


@NgModule({
    providers: [ConfirmationService, DialogService],
    declarations: [MainComponent, SidebarComponent, HomeComponent, InexamComponent, QuestionsManagementComponent],
    imports: [
        CommonModule,
        PanelMenuModule,
        SidebarModule,
        MenubarModule,
        MainRoutingModule,
        SkeletonModule,
        CardModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        ToolbarModule,
        RippleModule,
        TableModule,
        RatingModule,
        FormsModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        ConfirmDialogModule,
        InputTextareaModule
    ]
})
export class MainModule {
}
