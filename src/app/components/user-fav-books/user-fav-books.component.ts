import { BookService } from './../../services/book.service';


import { UserFavBooksService } from '../../services/user-books.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserFavBookResponseModel } from 'src/app/models/userFavBookResponseModel';
import { Book } from 'src/app/models/book';
import { Author } from 'src/app/models/author';

@Component({
  selector: 'app-user-fav-books',
  templateUrl: './user-fav-books.component.html',
  styleUrls: ['./user-fav-books.component.css']
})
export class UserFavBooksComponent implements OnInit {

  userFavBookResponseModel: UserFavBookResponseModel[]=[];
  books: Book[]=[];
  authors: Author[]=[]
  
  
  constructor(
    private userFavBooksService:UserFavBooksService,
    private toastrService:ToastrService,
    private bookService:BookService
    
  ) { }

  ngOnInit(): void {
    this.getFavBooks()
    this.getBooks()
  
  }

  getBooks(){
    this.bookService.getBooks().subscribe(response=>{
      this.books=response.results
     });
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

  deleteFavBook(bookid:number){
    this.userFavBooksService.RemoveFromFavourites(bookid).subscribe(response=>{
      this.toastrService.info("Favorilerden Kaldırıldı.") 
       window.location.reload();
    },(responseError)=>{
      this.toastrService.error(responseError.error.errors);
      console.log(responseError.error.errors)
    });
  
    
  }
  

}
