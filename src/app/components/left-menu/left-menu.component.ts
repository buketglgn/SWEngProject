import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    
  }

 isAuthentication(){
   if(this.authService.isAuthenticated()){
     return true
   }else{
     return false
   }
   
 }
  
}
