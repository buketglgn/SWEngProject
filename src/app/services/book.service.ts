
import { ListResponseModel } from './../models/listResponseModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Book} from '../models/book'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiUrl="http://gutendex.com/books"
  constructor(private httpClient:HttpClient) { }

  getBooks():Observable<ListResponseModel<Book>>{
    return this.httpClient.get<ListResponseModel<Book>>(this.apiUrl);
    

  }
}
