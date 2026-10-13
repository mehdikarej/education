import { Component } from '@angular/core';
import { AboutStartComponent } from "../about-start/about-start.component";
import { CoursesService } from '../../services/courses.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-courses',
  imports: [AboutStartComponent,CommonModule],
  templateUrl: './my-courses.component.html',
  styleUrl: './my-courses.component.css'
})
export class MyCoursesComponent {
  courses:any=[];
  constructor(private courseService:CoursesService){}
  ngOnInit():void{
    this.getMyCourse();
  }

  getMyCourse(){
    this.courseService.getMyCourse().subscribe((data)=>{
      console.log("Here courses",data);
      this.courses=data;
    })

  }

}
