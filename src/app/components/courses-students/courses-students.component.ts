import { Component } from '@angular/core';
import { ClasseService } from '../../services/classe.service';
import { AboutStartComponent } from "../about-start/about-start.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses-students',
  imports: [AboutStartComponent,CommonModule],
  templateUrl: './courses-students.component.html',
  styleUrl: './courses-students.component.css'
})
export class CoursesStudentsComponent {
  classes:any=[];
  constructor(private classeService:ClasseService){}
  ngOnInit():void{
 this.getMyClasses();
  }
getMyClasses(){
   this.classeService.getMyClasses().subscribe((data)=>{
      console.log("Here classes",data);
      this.classes=data;
    })
}

}
