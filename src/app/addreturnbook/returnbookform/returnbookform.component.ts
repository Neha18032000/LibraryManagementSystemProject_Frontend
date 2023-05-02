import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Returnbook } from 'src/app/common/returnbook';
import { ReturnbookserviceService } from 'src/app/service/returnbookservice.service';

@Component({
  selector: 'app-returnbookform',
  templateUrl: './returnbookform.component.html',
  styleUrls: ['./returnbookform.component.css']
})
export class ReturnbookformComponent implements OnInit{
  returnbook : Returnbook = new Returnbook(0,"",0,"",new Date());
  
  constructor(private returnbookService:ReturnbookserviceService,private router:Router,private activateRoute:ActivatedRoute) { }
  isEditable:boolean;
  ngOnInit(): void
   {
    this.activateRoute.paramMap.subscribe(()=>this.returnbook);
    this.activateRoute.paramMap.subscribe(()=>this.getReturnbookById());
  }
  getReturnbookById(){
    const returnbookID  = parseFloat(this.activateRoute.snapshot.paramMap.get("id"));
    
  console.log(returnbookID);
  if(returnbookID> 0)
  {
    this.isEditable = true;
    this.returnbookService.getReturnbookByID(returnbookID).subscribe(data=>{
      this.returnbook = data;
      console.log(this.returnbook)
    });
  }
}
onSubmit(){
  console.log(this.returnbook);
  if(this.isEditable){
    this.returnbookService.updateReturnbook(this.returnbook).subscribe(data=>
      this.router.navigateByUrl("/returnbooklist"));

  }
  else{
  this.returnbookService.SaveReturnbook( this.returnbook ).subscribe(data =>
    console.log(data));
    this.router.navigateByUrl("/returnbooklist");
}
}

updateReturnbook(sId:number)
  {
    this.router.navigateByUrl("/updatereturnbook/"+sId);
  }
  
}