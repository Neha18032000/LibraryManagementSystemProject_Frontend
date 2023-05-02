import { Injectable } from '@angular/core';
import { Librarian } from '../common/librarian';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrarianserviceService {

  private loginurl = "http://localhost:8080/librarian/login";
  private userUrl="http://localhost:8080/controll/list";
  private newuserurl = "http://localhost:8080/controll/saveuser";
  constructor(private httpClient: HttpClient) 
  {

   }
    getlogin(user: Librarian): Observable<Librarian> {
    console.log(user);
    return this.httpClient.post<Librarian>(`${this.loginurl}`, user);
  }

  

  getuserbyid(uid: number):Observable<Librarian>  {
    const uidUrl = this.userUrl + "/" + uid;
    return this.httpClient.get<Librarian>(uidUrl);
  }


  
  
  updateLibrarian(librarian: Librarian): Observable<Librarian> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.httpClient.put<Librarian>(this.userUrl + `/${librarian.id}`, librarian, httpOptions);
  }

  
  ///user Maintainance

  saveUser(user: Librarian): Observable<Librarian> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.httpClient.post<Librarian>(this.newuserurl, user, httpOptions);
  }


}