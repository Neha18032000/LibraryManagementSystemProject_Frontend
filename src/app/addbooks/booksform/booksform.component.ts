import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from 'src/app/common/books';

import { BooksserviceService } from 'src/app/service/booksservice.service';

@Component({
  selector: 'app-booksform',
  templateUrl: './booksform.component.html',
  styleUrls: ['./booksform.component.css']
})
export class BooksformComponent implements OnInit{
  books : Books = new Books(0,"","",0,0);
  
  constructor(private booksService:BooksserviceService,private router:Router,private activateRoute:ActivatedRoute) { }
  isEditable:boolean;
  ngOnInit(): void
   {
    this.activateRoute.paramMap.subscribe(()=>this.books);
    this.activateRoute.paramMap.subscribe(()=>this.getBooksById());
  }
  getBooksById(){
    const booksID  = parseFloat(this.activateRoute.snapshot.paramMap.get("id"));
    
  console.log(booksID);
  if(booksID> 0)
  {
    this.isEditable = true;
    this.booksService.getBooksByID(booksID).subscribe(data=>{
      this.books = data;
      console.log(this.books)
    });
  }
}
onSubmit(){
  console.log(this.books);
  if(this.isEditable){
    this.booksService.updateBooks(this.books).subscribe(data=>
      this.router.navigateByUrl("/bookslist"));

  }
  else{
  this.booksService.SaveBooks( this.books ).subscribe(data =>
    console.log(data));
    this.router.navigateByUrl("/bookslist");
}
}

updateBooks(id:number)
  {
    this.router.navigateByUrl("/updateBooks/"+id);
  }
  
}