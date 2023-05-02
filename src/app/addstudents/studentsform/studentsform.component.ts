import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Students } from 'src/app/common/students';
import { StudentsserviceService } from 'src/app/service/studentservice.service';

@Component({
  selector: 'app-studentsform',
  templateUrl: './studentsform.component.html',
  styleUrls: ['./studentsform.component.css']
})
export class StudentsformComponent implements OnInit{
  students : Students = new Students(0,"","","",0,new Date(),new Date());
  
  constructor(private studentsService:StudentsserviceService,private router:Router,private activateRoute:ActivatedRoute) { }
  isEditable:boolean;
  ngOnInit(): void
   {
    this.activateRoute.paramMap.subscribe(()=>this.students);
    this.activateRoute.paramMap.subscribe(()=>this.getStudentsById());
  }
  getStudentsById(){
    const studentsID  = parseFloat(this.activateRoute.snapshot.paramMap.get("id"));
    
  console.log(studentsID);
  if(studentsID> 0)
  {
    this.isEditable = true;
    this.studentsService.getStudentsByID(studentsID).subscribe(data=>{
      this.students = data;
      console.log(this.students)
    });
  }
}
onSubmit(){
  console.log(this.students);
  if(this.isEditable){
    this.studentsService.updateStudents(this.students).subscribe(data=>
      this.router.navigateByUrl("/studentslist"));

  }
  else{
  this.studentsService.SaveStudents( this.students ).subscribe(data =>
    console.log(data));
    this.router.navigateByUrl("/studentslist");
}
}

updateStudents(sId:number)
  {
    this.router.navigateByUrl("/updateStudents/"+sId);
  }

}