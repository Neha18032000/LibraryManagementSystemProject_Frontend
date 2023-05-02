import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Returnbook } from '../common/returnbook';

@Injectable({
  providedIn: 'root'
})
export class ReturnbookserviceService {

  private returnbookURL="http://localhost:8080/return/list";
  private returnbooksave="http://localhost:8080/return/addreturnbook";
  private returnbookdel="http://localhost:8080/issuebook/delete";
  private returnbookupdate="http://localhost:8080/issuebook/update";
  private returnbookfind="http://localhost:8080/issuebook/find";

  constructor(private http:HttpClient) { 

  }
  getAllReturnbook():Observable<any>
  {
   return this.http.get(this.returnbookURL);
  }
  SaveReturnbook(returnbook:Returnbook):Observable<any>
  {
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.http.post<Returnbook>(this.returnbooksave,returnbook,httpOptions);
  }
  deleteReturnbook(sId: Number) {
   
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.http.delete<Returnbook>(this.returnbookdel+`/${sId}`,httpOptions);
  }
  getReturnbookByID(returnbookID:number):Observable<Returnbook>
  {
    const returnIDURl=this.returnbookfind+"/"+returnbookID;
    return  this.http.get<Returnbook>(returnIDURl);
  }
    updateReturnbook(returnbook:Returnbook):Observable<Returnbook>{
      const httpOptions = {
        headers : new HttpHeaders({
            'Content-Type' : 'application/json',
            'Authorization' : 'auth-token',
            'Access-Control-Allow-Origin' : '*'
        })
      };
      return  this.http.put<Returnbook>(this.returnbookupdate+`/${returnbook.sId}`,returnbook,httpOptions);
    }
    
}