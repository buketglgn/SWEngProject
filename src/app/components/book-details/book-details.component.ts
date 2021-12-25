import { AuthService } from './../../services/auth.service';
import { DataService } from './../../services/data.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { UserFavBooksService } from 'src/app/services/user-books.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

   data=0;
   books: Book[]=[];
   message:string="";
    constructor( private router: ActivatedRoute,
      private bookService:BookService,
       private data1:DataService,
       private userFavBookService:UserFavBooksService,
       private toastrService:ToastrService,
       private authService:AuthService) { }

  ngOnInit(): void {
    this.data=this.router.snapshot.params['id']
    this.data1.currentMessage.subscribe(message => this.message = message)
   
    
    this.getBooks()
    
  }
  
  getBooks(){
    this.bookService.getBooks().subscribe(response=>{
      this.books=response.results
     });
  }
  checkId(id:number){
    if(this.data!=id){
      return false
    }
    return true

  }

  addToFavBooks(bookid:number){
    //let bookfavv= Object.assign({},bookid)
    this.userFavBookService.addToFavBooks(bookid).subscribe(response=>{
      this.toastrService.success("Favorilere Eklendi")
      
    },(responseError)=>{
      this.toastrService.error(responseError.error.errors);
      //console.log(responseError.error.errors)
    });
  }
 addToUserBooks(bookid:number){
   this.userFavBookService.addToUserBooks(bookid).subscribe(response=>{
     this.toastrService.success("okunanlara eklendi")
   },(responseError)=>{
    this.toastrService.error(responseError.error.errors);
    //console.log(responseError.error.errors)
  });
   
 }
 isAuthentication(){
  if(this.authService.isAuthenticated()){
    return true
  }else{
    return false
  }
  
}

}
