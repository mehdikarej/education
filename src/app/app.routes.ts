import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesNotesComponent } from './components/courses-notes/courses-notes.component';
import { CoursesStudentsComponent } from './components/courses-students/courses-students.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { NoteEvaluationComponent } from './components/note-evaluation/note-evaluation.component';
import { AdminComponent } from './components/admin/admin.component';
import { StudentsTeacherComponent } from './components/students-teacher/students-teacher.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AddClasseComponent } from './components/add-classe/add-classe.component';
import { ClasseInfoComponent } from './components/classe-info/classe-info.component';
import { EditClasseComponent } from './components/edit-classe/edit-classe.component';
import { authGuard } from './services/auth.guard';
import { SearchComponent } from './components/search/search.component';


export const routes: Routes = [
    {path:"",component:HomeComponent},//http://localhost:4200
    {path:"signup",component:SignupComponent},//http://localhost:4200/signup(student)
    {path:"signupTeacher",component:SignupComponent},//http://localhost:4200/signupTeacher
    {path:"signupParent",component:SignupComponent},//http://localhost:4200/signupParent
    {path:"signupAdmin",component:SignupComponent},//http://localhost:4200/signupAdmin
    {path:"login",component:LoginComponent},//http://localhost:4200/login
    {path:"addCourse",component:AddCourseComponent,canActivate:[authGuard]},//http://localhost:4200/addCourse
    {path:"courses",component:CoursesComponent,canActivate:[authGuard]},//http://localhost:4200/courses
    {path:"coursesNotes",component:CoursesNotesComponent,canActivate:[authGuard]},//http://localhost:4200/coursesNotes
    {path:"coursesStudents",component:CoursesStudentsComponent,canActivate:[authGuard]},//http://localhost:4200/coursesStudents
    {path:"studentsTeacher",component:StudentsTeacherComponent,canActivate:[authGuard]},//http://localhost:4200/studentTeacher
    {path:"myCourse",component:MyCoursesComponent,canActivate:[authGuard]},//http://localhost:4200/myCourse
    {path:"noteEvaluation",component:NoteEvaluationComponent,canActivate:[authGuard]},//http://localhost:4200/noteEvaluation
    {path:"admin",component:AdminComponent,canActivate:[authGuard]},//http://localhost:4200/admin
    {path:"courseInfo/:id",component:CourseInfoComponent},//http://localhost:4200/courseInfo/:id
    {path:"editCourse/:id",component:EditCourseComponent},//http:localhost:4200/editCourse
    {path:"userInfo/:id",component:UserInfoComponent},//http://localhost:4200/userInfo/:id
    {path:"editUser/:id",component:EditUserComponent},//http://localhost:4200/editUser/:id
    {path:"addClasse",component:AddClasseComponent,canActivate:[authGuard]},//http://localhost:4200/addClasse
    {path:"classeInfo/:id",component:ClasseInfoComponent},//http://localhost:4200/classeInfo/:id
    {path:"editClasse/:id",component:EditClasseComponent},//http://localhost:4200/editClasse/:id
    {path:"search",component:SearchComponent}//http://localhost:4200/search
];
