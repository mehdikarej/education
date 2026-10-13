import { Component } from '@angular/core';
import { AboutStartComponent } from "../about-start/about-start.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClasseService } from '../../services/classe.service';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-add-classe',
  imports: [AboutStartComponent,CommonModule,FormsModule],
  templateUrl: './add-classe.component.html',
  styleUrl: './add-classe.component.css'
})
export class AddClasseComponent {
  classObj:any={};
usersTab:any=[];
studTab:any=[];
coursesTab:any=[];
selectedStudents: number[] = [];
constructor(private classeService:ClasseService,private userService:UsersService, private courseService:CoursesService,private router:Router){}

ngOnInit():void{
  this.userService.getAllUsers().subscribe(
    (student)=>{
      console.log("Here response from BE",student);
      this.studTab=student;
      this.studTab=this.studTab.filter((u:any)=>u.roles.some((r:any)=>r.name.toLowerCase()==='student'))
    }
  )
  this.userService.getAllUsers().subscribe(
    (teacher)=>{
      console.log("Here response from BE",teacher);
      this.usersTab=teacher;
      this.usersTab=this.usersTab.filter((u:any)=>u.roles.some((r:any)=>r.name.toLowerCase()==='teacher'))
    })
    this.courseService.getAllCourses().subscribe(
      (course)=>{
        console.log("Here response from BE",course);
        this.coursesTab=course;
      }
    )
}
selectInput(id: number, event: any) {
  if (event.target.checked) {
    this.selectedStudents.push(id);
  } else {
    this.selectedStudents = this.selectedStudents.filter(e => e !== id);
  }
}

addClasse(){

    const data = {
    name: this.classObj.name,
    teacherId:Number(this.classObj.teacherId),
    studentsIds: this.selectedStudents.map(id=>Number(id)), // <-- ton tableau [2,5]
    courseId:[Number(this.classObj.courseId)]
  };

  console.log(data);

  this.classeService.addClasse(data).subscribe(res => {
    console.log(res);
  });

}
}
