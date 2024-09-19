import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email : string = '';
  password : string = '';
  login(){
    console.log('this')
    if(this.email === "admin@gmail.com" && this.password === "admin"){
      alert("Login successfull");
    }
  }

}
