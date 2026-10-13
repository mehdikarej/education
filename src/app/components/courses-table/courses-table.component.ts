import { Component } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses-table',
  imports: [CommonModule],
  templateUrl: './courses-table.component.html',
  styleUrl: './courses-table.component.css'
})
export class CoursesTableComponent {
  coursesTab:any=[];
  constructor(private courseService:CoursesService,private router:Router){}
  ngOnInit():void{
    this.getAllCourses();
  }

  getAllCourses(){
    this.courseService.getAllCourses().subscribe((data)=>{
      console.log("Here response from BE",data);
      this.coursesTab=data;
    })
  }
  displayCourse(id:any){
    this.router.navigate(['courseInfo/'+id]);
  }
  editCourse(id:any){
    this.router.navigate(['editCourse/'+id])
  }
  deleteCourse(id:any){
    this.courseService.deleteCourse(id).subscribe((res)=>{
      console.log("Here response from BE",res);
      this.getAllCourses();
    })
  }



}
