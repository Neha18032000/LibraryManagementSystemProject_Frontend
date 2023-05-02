import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Issuebook } from '../common/issuebook';

@Injectable({
  providedIn: 'root'
})
export class IssuebookserviceService {
  private issuebookURL="http://localhost:8080/issuebook/list";
  private issuebooksave="http://localhost:8080/issuebook/addissuebook";
  private issuebookdel="http://localhost:8080/issuebook/delete";
  private issuebookupdate="http://localhost:8080/issuebook/update";
  private issuebookfind="http://localhost:8080/issuebook/find";

  constructor(private http:HttpClient) { 

  }
  getAllIssuebook():Observable<any>
  {
   return this.http.get(this.issuebookURL);
  }
  SaveIssuebook(issuebook:Issuebook):Observable<any>
  {
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.http.post<Issuebook>(this.issuebooksave,issuebook,httpOptions);
  }
  deleteIssuebook(sId: Number) {
   
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.http.delete<Issuebook>(this.issuebookdel+`/${sId}`,httpOptions);
  }
  getIssuebookByID(issuebookID:number):Observable<Issuebook>
  {
    const empIDURl=this.issuebookfind+"/"+issuebookID;
    return  this.http.get<Issuebook>(empIDURl);
  }
    updateIssuebook(issuebook:Issuebook):Observable<Issuebook>{
      const httpOptions = {
        headers : new HttpHeaders({
            'Content-Type' : 'application/json',
            'Authorization' : 'auth-token',
            'Access-Control-Allow-Origin' : '*'
        })
      };
      return  this.http.put<Issuebook>(this.issuebookupdate+`/${issuebook.sId}`,issuebook,httpOptions);
    }
    
}
