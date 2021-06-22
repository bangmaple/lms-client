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
import { UsersManagementComponent } from './users-management/users-management.component';
import { AddNewUserDialogComponent } from './users-management/add-new-user-dialog/add-new-user-dialog.component';
import { ViewDetailUserDialogComponent } from './users-management/view-detail-user-dialog/view-detail-user-dialog.component';
import {AppModule} from "../app.module";
import {JsonDatePipe} from "../pipes/json-date.pipe";
import {RoleConverterPipe} from "../pipes/role-converter.pipe";
import {CheckboxModule} from "primeng/checkbox";
import { UpdateSelectedUserComponent } from './users-management/update-selected-user/update-selected-user.component';
import {CalendarModule} from "primeng/calendar";


@NgModule({
    providers: [ConfirmationService, DialogService],
    declarations: [MainComponent, SidebarComponent, HomeComponent, InexamComponent,
        QuestionsManagementComponent, UsersManagementComponent, AddNewUserDialogComponent,
        ViewDetailUserDialogComponent,
    JsonDatePipe, RoleConverterPipe, UpdateSelectedUserComponent],
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
        InputTextareaModule,
        CheckboxModule,
        CalendarModule,
    ]
})
export class MainModule {
}
