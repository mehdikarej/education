import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { AboutStartComponent } from "../about-start/about-start.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  imports: [AboutStartComponent,FormsModule,CommonModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
  user:any={}
  constructor(private activatedRoute:ActivatedRoute,private userService:UsersService,private router:Router){}
  userId!:number;
  ngOnInit():void{
    this.userId=this.activatedRoute.snapshot.params['id'];
    this.getUserById();
  }
editUser(){
  this.userService.editUser(this.userId,this.user).subscribe({
    next:(res)=>{
      console.log("User Mise a jour",res);
      this.router.navigate(['/admin']);
    },error:(err)=>{
      console.log("Error lors Mise a jour",err);
      

    }
  })
}
  getUserById(){
    this.userService.getUserById(this.userId).subscribe((data)=>{
      this.user=data;
    })
  }
isTeacher(user: any): boolean {
  return user.roles?.some((r: any) =>
    r.name.toLowerCase() === 'teacher'
  );
}
}
