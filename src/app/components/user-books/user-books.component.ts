import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Author } from 'src/app/models/author';
import { Book } from 'src/app/models/book';
import { UserFavBookResponseModel } from 'src/app/models/userFavBookResponseModel';
import { BookService } from 'src/app/services/book.service';
import { UserFavBooksService } from 'src/app/services/user-books.service';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnInit {
  userFavBookResponseModel: UserFavBookResponseModel[]=[];
  books: Book[]=[];
  authors: Author[]=[]

  constructor(private userFavBooksService:UserFavBooksService,
    private toastrService:ToastrService,
    private bookService:BookService) { }

  ngOnInit(): void {
    this.getBooks()
  }
  getBooks(){
    this.userFavBooksService.getBooks().subscribe(response=>{
      this.userFavBookResponseModel=response
      
      //console.log(response)
     },(responseError)=>{
       this.toastrService.error(responseError.error.errors);
       //console.log(responseError.error.errors)
     });
  }
  deleteUserBook(bookid:number){
    this.userFavBooksService.deleteFromUserBooks(bookid).subscribe(response=>{
      this.toastrService.info("Kaldırıldı.") 
       window.location.reload();
    },(responseError)=>{
      this.toastrService.error(responseError.error.errors);
      //console.log(responseError.error.errors)
    });
  
    
  }
}
