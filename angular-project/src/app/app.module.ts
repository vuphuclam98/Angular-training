import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { LoggerServiceComponent } from './logger-service/logger-service.component';
import { ProductServiceComponent } from './product-service/product-service.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterAccountComponent } from './auth/register-account/register-account.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LoggerServiceComponent,
    ProductServiceComponent,
    RegisterAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
