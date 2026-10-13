import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { AboutStartComponent } from "../about-start/about-start.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-info',
  imports: [AboutStartComponent,CommonModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
  foundUser:any={};
  constructor(private activatedRoute:ActivatedRoute  ,private userService:UsersService){
  }
  ngOnInit():void{
  this.getUserById();
  };
  getUserById(){
    let userId=this.activatedRoute.snapshot.params['id'];
    this.userService.getUserById(userId).subscribe((res)=>{
      this.foundUser=res;
    })
  }
  isTeacher(user: any): boolean {
  return user.roles?.some((r: any) =>
    r.name.toLowerCase() === 'teacher'
  );
}

}
