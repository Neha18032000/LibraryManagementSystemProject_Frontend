import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Returnbook } from 'src/app/common/returnbook';
import { ReturnbookserviceService } from 'src/app/service/returnbookservice.service';

@Component({
  selector: 'app-returnbook-list',
  templateUrl: './returnbook-list.component.html',
  styleUrls: ['./returnbook-list.component.css']
})
export class ReturnbookListComponent implements OnInit{
  returnbook:Returnbook[]

  constructor(public router:Router,private returnbookService:ReturnbookserviceService,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(()=>this.getAllReturnbook());
    
  }

  getAllReturnbook()
  {
    this.returnbookService.getAllReturnbook().subscribe(data=>{
      console.log(data);
      this.returnbook=data;
    });
  }
  addReturnbook():void{
    this.router.navigateByUrl("/returnbookform");
  }
  deleteReturnbook(id:number):void
  {
    console.log(id);
    if(confirm("Do you want to delete ?")){
      this.returnbookService.  deleteReturnbook(id).subscribe(data=>{
        console.log(data);
        this.getAllReturnbook();
      })
    };
  }
  updateReturnbook(id:number)
  {
    this.router.navigateByUrl("/updateReturnbook/"+id);
  }
}