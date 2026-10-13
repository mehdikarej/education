import { Component } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { AboutStartComponent } from "../about-start/about-start.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  imports: [AboutStartComponent,FormsModule],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {
  course:any={};
  constructor(private courseService:CoursesService){}
  ngOnInit():void{}

  addCourse(){
    this.courseService.addCourse(this.course).subscribe((res)=>{
      console.log("Here course",res);
    })
  }

}
