import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpModule, BaseRequestOptions } from "@angular/http";

import { MockBackend } from '@angular/http/testing';

import { fakeBackendProvider } from "./helpers/fake-backend";
import { AuthService } from './services/auth.service';

import { AuthGuard } from './services/auth-guard.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path : '' , component : HomeComponent},
      {path : 'login' , component : LoginComponent},
      {path : 'admin' , component : AdminComponent,canActivate:[AuthGuard,AdminAuthGuard]},
      {path : 'no-access' , component : NoAccessComponent},
    ])
  ],
  providers: [AuthService,fakeBackendProvider,MockBackend,BaseRequestOptions,AuthGuard,AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
