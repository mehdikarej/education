import { Component } from '@angular/core';
import { AboutStartComponent } from "../about-start/about-start.component";
import { CommonModule } from '@angular/common';
import { SearchTeacherPipe } from '../../pipes/search-teacher.pipe';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { ColorDirective } from "../../directives/color.directive";

@Component({
  selector: 'app-search',
  imports: [AboutStartComponent, CommonModule, SearchTeacherPipe, FormsModule, ColorDirective],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  usersTab:any=[];
  item:any;
  constructor(private userService:UsersService){}
  ngOnInit():void{
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe((data)=>{
      this.usersTab=data;
      this.usersTab=this.usersTab.filter((u:any)=>u.roles.some((r:any)=>r.name.toLowerCase()==='teacher'))
        console.log("Here Teachers",this.usersTab);
    })
  }

}
