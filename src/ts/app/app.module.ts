// NPM Dependency Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Component Imports
import { AppComponent } from './app.component';
// Navbar Import
import { Navbar } from './navbar/navbar.component';
// TaskList Import
import { TaskList } from './task-list/task-list.component';
// Modal Imports
import { CreateModal } from './create-modal/create-modal.component';
import { DeleteModal } from './delete-modal/delete-modal.component';
import { EditModal } from './edit-modal/edit-modal.component';
// Alert Import
import { Alert } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    Navbar,
    TaskList,
    CreateModal,
    DeleteModal,
    EditModal,
    Alert
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
