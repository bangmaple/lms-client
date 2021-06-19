import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpInterceptorProviders} from "./interceptors";
import {HttpClientModule} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import { NotFoundComponent } from './core/not-found/not-found.component';
import {DividerModule} from "primeng/divider";
import {CardModule} from "primeng/card";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastModule,
    DividerModule,
    CardModule,
  ],
  providers: [HttpInterceptorProviders, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
