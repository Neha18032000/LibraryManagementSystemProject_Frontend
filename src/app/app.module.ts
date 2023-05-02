import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome/welcome.component';

import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { BooksListComponent } from './viewbooksdata/books-list/books-list.component';
import { BooksformComponent } from './addbooks/booksform/booksform.component';
import { StudentsListComponent } from './viewstudentsdata/students-list/students-list.component';
import { StudentsformComponent } from './addstudents/studentsform/studentsform.component';
import { IssuebookListComponent } from './viewissuebookdata/issuebook-list/issuebook-list.component';
import { IssuebookformComponent } from './addissuebook/issuebookform/issuebookform.component';
import { LoginComponent } from './librarianmodule/login/login.component';
import { ReturnbookListComponent } from './viewreturnbookdata/returnbook-list/returnbook-list.component';
import { ReturnbookformComponent } from './addreturnbook/returnbookform/returnbookform.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BooksListComponent,
   
    BooksformComponent,
        StudentsListComponent,
        StudentsformComponent,
        IssuebookListComponent,
        IssuebookformComponent,
        LoginComponent,
        ReturnbookListComponent,
        ReturnbookformComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }