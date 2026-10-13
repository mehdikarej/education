import { Component } from '@angular/core';
import { AboutStartComponent } from "../about-start/about-start.component";
import { CoursesService } from '../../services/courses.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  imports: [AboutStartComponent,FormsModule],
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.css'
})
export class EditCourseComponent {
  course:any={};
  courseId!:number;
  constructor(private activatedRoute:ActivatedRoute ,private courseService:CoursesService,private router:Router){}
  ngOnInit():void{
    this.courseId=this.activatedRoute.snapshot.params['id'];
    this.getCourseById();

  }
  editCourse(){
this.courseService.editCourse(this.courseId,this.course).subscribe({
  next:(res)=>{
    console.log("Course Mis a jour",res);
    this.router.navigate(['/admin']);
  },error:(err)=>{
    console.log("Erreur lors de la mise a jour",err);
  }

})
  }
  getCourseById(){
    this.courseService.getCourseById(this.courseId).subscribe((data)=>{
      this.course=data;
    })
  }

}
