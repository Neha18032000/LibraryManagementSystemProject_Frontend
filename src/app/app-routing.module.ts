import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { BooksformComponent } from './addbooks/booksform/booksform.component';
import { BooksListComponent } from './viewbooksdata/books-list/books-list.component';
import { StudentsListComponent } from './viewstudentsdata/students-list/students-list.component';
import { StudentsformComponent } from './addstudents/studentsform/studentsform.component';
import { IssuebookListComponent } from './viewissuebookdata/issuebook-list/issuebook-list.component';
import { IssuebookformComponent } from './addissuebook/issuebookform/issuebookform.component';
import { LoginComponent } from './librarianmodule/login/login.component';
import { ReturnbookListComponent } from './viewreturnbookdata/returnbook-list/returnbook-list.component';
import { ReturnbookformComponent } from './addreturnbook/returnbookform/returnbookform.component';


const routes: Routes = [{path:'',component:WelcomeComponent},{path:'bookslist',component:BooksListComponent},{path:'booksform',component:BooksformComponent},{path:'updateBooks/:id',component:BooksformComponent},{path:'studentslist',component:StudentsListComponent},{path:'studentsform',component:StudentsformComponent},{path:'updateStudents/:id',component:StudentsformComponent},{path:'issuebooklist',component:IssuebookListComponent},{path:'issuebookform',component:IssuebookformComponent},{path:'login',component:LoginComponent},{path:'returnbooklist',component:ReturnbookListComponent},{path:'returnbookform',component:ReturnbookformComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }