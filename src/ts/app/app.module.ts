// NPM Dependency Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Component Imports
import { AppComponent } from './app.component';
import { TaskList } from './task-list/task-list.component';
import { CreateModal } from './create-modal/create-modal.component';
import { Alert } from './alert/alert.component';
import { Navbar } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskList,
    CreateModal,
    Alert,
    Navbar
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
