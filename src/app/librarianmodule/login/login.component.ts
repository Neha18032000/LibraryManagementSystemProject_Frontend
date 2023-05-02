import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Librarian } from 'src/app/common/librarian';
import { LibrarianserviceService } from 'src/app/service/librarianservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  librarian: Librarian = new Librarian(0,"","","",0,"","")
  userdetails: any
  password: string
  uname: string
  searchuser: string

  librarians: Librarian = JSON.parse(sessionStorage.getItem("user"))
  constructor(private librarianservices:LibrarianserviceService, private route: Router, public activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  Getlogin(): void {

    this.librarianservices.getlogin(this.librarian).subscribe(data => {
      alert("Login Successfully"),
        console.log("login response" + data)

      sessionStorage.setItem("user", JSON.stringify(data))

      this.route.navigateByUrl("/welcome")

    },
      error => alert("Sorry Please Enter correct Username And Password"));

  }
  

}
