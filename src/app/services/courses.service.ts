import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courseURL:string="http://localhost:9000/api/courses";

  constructor(private httpClient:HttpClient) { }
  ngOnInit():void{}

  addCourse(obj:any){
    return this.httpClient.post<any>(this.courseURL,obj);
  }
  editCourse(id:any,obj:any){
    return this.httpClient.put<any>(`${this.courseURL}/${id}`,obj);
  }
  deleteCourse(id:any){
    return this.httpClient.delete<any>(`${this.courseURL}/${id}`);
  }
  getCourseById(id:any){
    return this.httpClient.get<any>(`${this.courseURL}/${id}`);
  }
  getCourse(){
    return this.httpClient.get<any>(this.courseURL+"/TeacherCourse");
  }
  getAllCourses(){
    return this.httpClient.get<any>(this.courseURL);
  }
  getMyCourse(){
    return this.httpClient.get<any>(this.courseURL+"/MyCourse");
  }
}
