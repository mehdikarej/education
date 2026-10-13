import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-header',
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  decoded:any;
  constructor(private router:Router){}
  ngOnInit():void{}
  isLoggedIn():boolean{
    let jwt=sessionStorage.getItem("token");
    if(jwt){
      this.decoded=jwtDecode(jwt);
    }
return !!jwt;
  }
logOut(){
  sessionStorage.removeItem("token");
  this.router.navigate([""]);
}
}
