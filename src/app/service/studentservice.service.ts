import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from '../common/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsserviceService {
  private studentsURL="http://localhost:8080/students/list";
  private studentssave="http://localhost:8080/students/addstudent";
  private studentsdel="http://localhost:8080/students/delete";
  private studentsupdate="http://localhost:8080/students/update";
  private studentsfind="http://localhost:8080/students/find";
  private studentssearch="http://localhost:8080/students/search";

  constructor(private http:HttpClient) { 

  }
  getAllStudents():Observable<any>
  {
   return this.http.get(this.studentsURL);
  }
  SaveStudents(students:Students):Observable<any>
  {
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.http.post<Students>(this.studentssave,students,httpOptions);
  }
  deleteStudents(sId: Number) {
   
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.http.delete<Students>(this.studentsdel+`/${sId}`,httpOptions);
  }
  getStudentsByID(studentsID:number):Observable<Students>
  {
    const studentsIDURl=this.studentsfind+"/"+studentsID;
    return  this.http.get<Students>(studentsIDURl);
  }
    updateStudents(students:Students):Observable<Students>{
      const httpOptions = {
        headers : new HttpHeaders({
            'Content-Type' : 'application/json',
            'Authorization' : 'auth-token',
            'Access-Control-Allow-Origin' : '*'
        })
      };
      return  this.http.put<Students>(this.studentsupdate+`/${students.sId}`,students,httpOptions);
    }
}