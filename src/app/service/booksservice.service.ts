import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from '../common/books';

@Injectable({
  providedIn: 'root'
})
export class BooksserviceService {
  
  private booksURL="http://localhost:8080/books/list";
  private bookssave="http://localhost:8080/books/addbook";
  private booksdel="http://localhost:8080/books/delete";
  private booksupdate="http://localhost:8080/books/update";
  private booksfind="http://localhost:8080/books/find";
 
  constructor(private http:HttpClient) 
  { 

  }
  getAllBooks():Observable<any>
  {
   return this.http.get(this.booksURL);
  }
  SaveBooks(books:Books):Observable<any>
  {
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.http.post<Books>(this.bookssave,books,httpOptions);
  }
  deleteBooks(id: Number) {
   
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.http.delete<Books>(this.booksdel+`/${id}`,httpOptions);
  }
  getBooksByID(bookID:number):Observable<Books>
  {
    const booksIDURl=this.booksfind+"/"+bookID;
    return  this.http.get<Books>(booksIDURl);
  }
    updateBooks(books:Books):Observable<Books>{
      const httpOptions = {
        headers : new HttpHeaders({
            'Content-Type' : 'application/json',
            'Authorization' : 'auth-token',
            'Access-Control-Allow-Origin' : '*'
        })
      };
      return  this.http.put<Books>(this.booksupdate+`/${books.id}`,books,httpOptions);
    }
  
}