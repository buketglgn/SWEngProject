import { Author } from '../../models/author';


import { Book } from './../../models/book';
import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[]=[];
  authors: Author[]=[]
  filterText=""
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.getBooks()
  }
  getBooks(){
    this.bookService.getBooks().subscribe(response=>{
      this.books=response.results
     });
  }
  
}