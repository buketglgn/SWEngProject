import { DataService } from './../../services/data.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

   data=0;
   books: Book[]=[];
   message:string="";
    constructor( private router: ActivatedRoute,private bookService:BookService, private data1:DataService) { }

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

}
