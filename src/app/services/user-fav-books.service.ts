
import { ListResponseModel } from './../models/listResponseModel';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFavBookResponseModel } from '../models/userFavBookResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserFavBooksService {

  apiUrl="https://localhost:44359/User/UserFavBooks"
  api=""
  constructor(private httpClient:HttpClient) { }

  getFavBooks():Observable<UserFavBookResponseModel[]>{
    return this.httpClient.get<UserFavBookResponseModel[]>(this.apiUrl);
  }

  addToFavBooks(bookid:number):Observable<any>{

    return this.httpClient.post<any>("https://localhost:44359/User/Details/"+bookid+"/AddToFavBooks",bookid)
    
  }
}
