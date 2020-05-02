import { Component, OnInit, Inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{

  isAdmin:Boolean;

  constructor() 
  {
   
   }

  ngOnInit() {
    var value = JSON.stringify(localStorage.getItem("isAdmin"));

    if(value == null || value == undefined)
    {
      return;
    }
     
    if(value == "true")
    {
      this.isAdmin = true;
      return;
    }
      
    if(value == "false")
    {
      this.isAdmin = false;
      return;
    }
  }

}
