import { Component } from '@angular/core';
import { AboutStartComponent } from "../about-start/about-start.component";

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  imports: [AboutStartComponent,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user:any={};
  errorMsg:string="";
  constructor(private userService:UsersService,private router:Router){}
  ngOnInit():void{}

  login(){
    this.userService.login(this.user).subscribe({
      next:(res)=>{
        console.log("Here response from BE",res);
        if(res.status===200){
          sessionStorage.setItem('token',res.token);
          this.router.navigate(['']);
        }
      },
      error:(err)=>{
        if(err.status===401){
          this.errorMsg="Check your Email/Password";
        }
      }
    })
  }

}
