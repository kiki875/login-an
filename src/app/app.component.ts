import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
inpObj={
   name:"",
     email:"",
     phno:"",
     pass:""
}

outObj={
  name:"",
    email:"",
    phno:"",
    pass:""
}
  
  @Output() resObj = new EventEmitter<any>();
  Onclick(){
     this.outObj=this.inpObj;
  }
}
