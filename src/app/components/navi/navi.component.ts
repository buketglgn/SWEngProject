import { DataService } from './../../services/data.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  @Output() sendToParent= new EventEmitter();
  filterText=""

  message:string="";

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message=> this.message = message)
    
  }

  newMessage(){
    this.data.changeMessage(this.filterText)
  }








  
  sendMessageToParent(){
    this.sendToParent.emit(this.filterText)
  }

}
