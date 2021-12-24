import { ToastrService } from 'ngx-toastr';
import { DataService } from './../../services/data.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  @Output() sendToParent= new EventEmitter();
  filterText=""

  message:string="";

  constructor(private data:DataService,
    private authService:AuthService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message=> this.message = message)
    
  }

  newMessage(){
    this.data.changeMessage(this.filterText)
  }

  isAuthentication(){
    if(this.authService.isAuthenticated()){
      return true
    }else{
      return false
    }

  }

  logout(){
    localStorage.clear();
    this.toastrService.info("Çıkış Yapıldı.")
  }

 
  sendMessageToParent(){
    this.sendToParent.emit(this.filterText)
  }

}
