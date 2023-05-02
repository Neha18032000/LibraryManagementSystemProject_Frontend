import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from 'src/app/common/books';
import { BooksserviceService } from 'src/app/service/booksservice.service';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books:Books[]

  constructor(public router:Router,private booksService:BooksserviceService,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(()=>this.getAllBooks());
    
  }

  getAllBooks()
  {
    this.booksService.getAllBooks().subscribe(data=>{
      console.log(data);
      this.books=data;
    });
  }
  addBooks():void{
    this.router.navigateByUrl("/booksform");
  }
  deleteBooks(id:number):void
  {
    console.log(id);
    if(confirm("Do you want to delete ?")){
      this.booksService.deleteBooks(id).subscribe(data=>{
        console.log(data);
        this.getAllBooks();
      })
    };
  }
  updateBooks(id:number)
  {
    this.router.navigateByUrl("/updateBooks/"+id);
  }

}
