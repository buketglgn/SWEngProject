import { ToastrService } from 'ngx-toastr';
import { UserFavBooksService } from './../../services/user-fav-books.service';
import { DataService } from './../../services/data.service';
import { Author } from '../../models/author';


import { Book } from './../../models/book';
import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  message:string="";

  books: Book[]=[];
  authors: Author[]=[]
  dataabc:string="";
  

  constructor(private bookService:BookService,
    private data: DataService, private router:ActivatedRoute,
    private userFavBookService:UserFavBooksService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message)
    this.getBooks()
    
  }

  getBooks(){
    this.bookService.getBooks().subscribe(response=>{
      this.books=response.results
     });
  }

  newMessage(){
    this.data.changeMessage("")
  }

  addToFavBooks(bookid:number){
    //let bookfavv= Object.assign({},bookid)
    this.userFavBookService.addToFavBooks(bookid).subscribe(response=>{
      this.toastrService.success("Favorilere Eklendi")
    })
  }
 



  
}