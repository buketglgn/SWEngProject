

import { UserFavBooksService } from './../../services/user-fav-books.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserFavBookResponseModel } from 'src/app/models/userFavBookResponseModel';

@Component({
  selector: 'app-user-fav-books',
  templateUrl: './user-fav-books.component.html',
  styleUrls: ['./user-fav-books.component.css']
})
export class UserFavBooksComponent implements OnInit {

  userFavBookResponseModel: UserFavBookResponseModel[]=[];
  
  constructor(
    private userFavBooksService:UserFavBooksService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.getFavBooks()
  }

  getFavBooks(){
    this.userFavBooksService.getFavBooks().subscribe(response=>{
      this.userFavBookResponseModel=response
      
      console.log(response)
     },(responseError)=>{
       this.toastrService.error(responseError.error.errors);
       console.log(responseError.error.errors)
     });
  }
  

}
