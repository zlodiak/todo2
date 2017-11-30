import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatButtonModule,
          MatInputModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';

import { UsersService } from './services/users.service';
import { TodosService } from './services/todos.service';
import { GlobalVarsService } from './services/global-vars.service';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    MatInputModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    GlobalVarsService,
    TodosService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
