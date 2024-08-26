import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email:string='';
  password:string='';
  loginError:boolean=false;
  constructor(private router:Router){}
  
  onLogin(){
    if(this.email ==='validUser' && this.password === 'correctPassword'){
      this.router.navigate(['/todos']);
    } else {
      this.loginError= true;
    }
  }

}
