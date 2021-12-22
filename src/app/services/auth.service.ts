import { Observable } from 'rxjs';
import { TokenModel } from './../models/tokenModel';
import { HttpClient } from '@angular/common/http';
import { loginModel } from './../models/loginModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   apiUrl="https://localhost:44359/api/AuthManagement/"
  constructor(private httpClient:HttpClient) { }

  login(loginModel:loginModel):Observable<TokenModel>{
    return this.httpClient.post<TokenModel>(this.apiUrl+"Login",loginModel)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}
