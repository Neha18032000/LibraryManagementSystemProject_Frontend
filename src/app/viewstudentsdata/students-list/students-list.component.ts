import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Students } from 'src/app/common/students';
import { StudentsserviceService } from 'src/app/service/studentservice.service';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  students:Students[]

  constructor(public router:Router,private studentsService:StudentsserviceService,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(()=>this.getAllStudents());
    
  }

  getAllStudents()
  {
    this.studentsService.getAllStudents().subscribe(data=>{
      console.log(data);
      this.students=data;
    });
  }
  addStudents():void{
    this.router.navigateByUrl("/studentsform");
  }
  deleteStudents(sId:number):void
  {
    console.log(sId);
    if(confirm("Do you want to delete ?")){
      this.studentsService.deleteStudents(sId).subscribe(data=>{
        console.log(data);
        this.getAllStudents();
      })
    };
  }
  updateStudents(sId:number)
  {
    this.router.navigateByUrl("/updateStudents/"+sId);
  }
}