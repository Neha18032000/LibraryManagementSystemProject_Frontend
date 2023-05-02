import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Issuebook } from 'src/app/common/issuebook';
import { IssuebookserviceService } from 'src/app/service/issuebookservice.service';

@Component({
  selector: 'app-issuebook-list',
  templateUrl: './issuebook-list.component.html',
  styleUrls: ['./issuebook-list.component.css']
})
export class IssuebookListComponent implements OnInit {
  issuebook:Issuebook[]

  constructor(public router:Router,private issuebookService:IssuebookserviceService,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(()=>this.getAllIssuebook());
    
  }

  getAllIssuebook()
  {
    this.issuebookService.getAllIssuebook().subscribe(data=>{
      console.log(data);
      this.issuebook=data;
    });
  }
  addIssuebook():void{
    this.router.navigateByUrl("/issuebookform");
  }
  deleteIssuebook(id:number):void
  {
    console.log(id);
    if(confirm("Do you want to delete ?")){
      this.issuebookService.deleteIssuebook(id).subscribe(data=>{
        console.log(data);
        this.getAllIssuebook();
      })
    };
  }
  updateIssuebook(id:number)
  {
    this.router.navigateByUrl("/updateIssuebook/"+id);
  }
}
