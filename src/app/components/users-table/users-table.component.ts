import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-table',
  imports: [CommonModule],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.css'
})
export class UsersTableComponent  implements OnInit{
  usersTab:any=[];
  constructor(private userService:UsersService,private router:Router){}
  ngOnInit():void{
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe((data)=>{
    
      this.usersTab=data;
      this.usersTab=this.usersTab.filter((u:any)=>!u.roles.some((r:any)=>r.name.toLowerCase()==='admin'))
        console.log("Here users",this.usersTab);
    })
  }
isTeacher(user: any): boolean {
  return user.roles?.some((r: any) =>
    r.name.toLowerCase() === 'teacher'
  );
}
deleteUser(id:any){
  this.userService.deleteUser(id).subscribe((res)=>{
    console.log("Here response from BE",res);
    this.getAllUsers();
  })
}
activateStatus(user:any){
  this.userService.activateStatus(user.id).subscribe({
    next:(res)=>{
      user.status=res.status;

    },
    error:(err)=>{
      console.log("Erreur de Mise à jour",err);
    }
  })
}
displayUser(id:any){
  this.router.navigate(['userInfo/'+id]);
}
editUser(id:any){
  this.router.navigate(['editUser/'+id]);
}
}
