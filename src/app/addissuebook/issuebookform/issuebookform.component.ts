import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Issuebook } from 'src/app/common/issuebook';
import { IssuebookserviceService } from 'src/app/service/issuebookservice.service';

@Component({
  selector: 'app-issuebookform',
  templateUrl: './issuebookform.component.html',
  styleUrls: ['./issuebookform.component.css']
})
export class IssuebookformComponent implements OnInit {
  issuebook : Issuebook = new Issuebook(0,"",0,"",new Date(),new Date(),0);
  
  constructor(private issuebookService:IssuebookserviceService,private router:Router,private activateRoute:ActivatedRoute) { }
  isEditable:boolean;
  ngOnInit(): void
   {
    this.activateRoute.paramMap.subscribe(()=>this.issuebook);
    this.activateRoute.paramMap.subscribe(()=>this.getIssuebookById());
  }
  getIssuebookById(){
    const issuebookID  = parseFloat(this.activateRoute.snapshot.paramMap.get("id"));
    
  console.log(issuebookID);
  if(issuebookID> 0)
  {
    this.isEditable = true;
    this.issuebookService.getIssuebookByID(issuebookID).subscribe(data=>{
      this.issuebook = data;
      console.log(this.issuebook)
    });
  }
}
onSubmit(){
  console.log(this.issuebook);
  if(this.isEditable){
    this.issuebookService.updateIssuebook(this.issuebook).subscribe(data=>
      this.router.navigateByUrl("/issuebooklist"));

  }
  else{
  this.issuebookService.SaveIssuebook( this.issuebook ).subscribe(data =>
    console.log(data));
    this.router.navigateByUrl("/issuebooklist");
}
}

updateIssuebook(sId:number)
  {
    this.router.navigateByUrl("/updateEmp/"+sId);
  }
  
}