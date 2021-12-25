
import { RegisterModel } from './../models/registerModel';
import { Observable } from 'rxjs';
import { TokenModel } from './../models/tokenModel';
import { HttpClient } from '@angular/common/http';
import { loginModel } from './../models/loginModel';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any;
  email:string;

   apiUrl="https://localhost:44359/api/AuthManagement/"
  constructor(private httpClient:HttpClient,
    private jwtHelper: JwtHelperService
    ) { }

  login(loginModel:loginModel):Observable<TokenModel>{
    return this.httpClient.post<TokenModel>(this.apiUrl+"Login",loginModel)
  }
  getUserName():Observable<string>{
    return this.httpClient.get<string>("https://localhost:44359/User/GetUserName")
  }

  register(registerModel:RegisterModel):Observable<TokenModel>{
    return this.httpClient.post<TokenModel>(this.apiUrl+"Register",registerModel)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
  userDetailFromToken(){
    this.token = localStorage.getItem("token");
    let decodedToken = this.jwtHelper.decodeToken(this.token);
 
     let email=decodedToken['email'];
    this.email=email.split('@')[0]
  }
}
