// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login-form',
//   templateUrl: './login-form.component.html',
//   styleUrls: ['./login-form.component.css']
// })
// export class LoginFormComponent{

//   user = {
//     username : 'admin',
//     password : 'admin',

// }

// constructor(){}

// //Not getting called.
// getSubmit(value : any) : void
// {
//   alert(this.user);
//     alert("Hiii");
//     alert(JSON.stringify(value));
// }
  

// }


import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({

    selector : 'login',
    templateUrl : 'login-form.component.html',
})

export class LoginFormComponent
{
    user = {
        username : '',
        password : '',
    }
    error : string;

    constructor(private router: Router) { }

    onSubmit() : void
    {
        
        if(this.user.username == "admin" && this.user.password == "admin")
        {
            localStorage.setItem("isAdmin","true");
            this.router.navigate(['/players']);
        }
        else if(this.user.username == "guest" && this.user.password == "guest")
        {
           localStorage.setItem("isAdmin","false"); 
           this.router.navigate(['/home']);
        }
        else
        {
            this.error = "Wrong Id or password !";
        }
    }
}


