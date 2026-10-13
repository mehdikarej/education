import { Component } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { AboutStartComponent } from "../about-start/about-start.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  imports: [AboutStartComponent,CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses:any=[];
  constructor(private courseService:CoursesService,private router:Router){}
  ngOnInit():void{
   this.getCourse();

  }
  getCourse(){
 this.courseService.getCourse().subscribe((res)=>{
      console.log("Here courses",res);
      this.courses=res;
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
      this.getCourse();
    })
  }
  


}
