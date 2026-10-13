import { Component } from '@angular/core';
import { AboutStartComponent } from "../about-start/about-start.component";
import { CoursesService } from '../../services/courses.service';
import { ActivatedRoute } from '@angular/router';
import{CommonModule}from '@angular/common';

@Component({
  selector: 'app-course-info',
  imports: [AboutStartComponent,CommonModule],
  templateUrl: './course-info.component.html',
  styleUrl: './course-info.component.css'
})
export class CourseInfoComponent {
  foundCourse:any={};
  constructor(private activatedRoute:ActivatedRoute  ,private courseService:CoursesService){}
  ngOnInit():void{
    this.getCourseById();
  }

  getCourseById(){
    let courseId=this.activatedRoute.snapshot.params['id'];
    this.courseService.getCourseById(courseId).subscribe((res)=>{
      this.foundCourse=res;
      console.log("here foundCourse",res);
    })
  }
  

}
