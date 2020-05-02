import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAdmin : boolean;
  constructor() { }

  ngOnInit() {
    var value = JSON.parse(localStorage.getItem("isAdmin"));
      
    // alert(typeof(value) + "from player");
    if(value == null || value == undefined)
    {
      // alert("hii");
      this.isAdmin = false;
    }
    else 
    {
      this.isAdmin = value;    
    } 
  }

}
