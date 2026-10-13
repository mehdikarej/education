import { Component } from '@angular/core';
import { ClasseService } from '../../services/classe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutStartComponent } from "../about-start/about-start.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../services/users.service';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-edit-classe',
  imports: [AboutStartComponent, FormsModule, CommonModule],
  templateUrl: './edit-classe.component.html',
  styleUrl: './edit-classe.component.css'
})
export class EditClasseComponent {
  classe: any = {};
  classeId!: number;
  usersTab: any = [];
  studTab: any = [];
  coursesTab: any = [];

  selectedStudents: number[] = [];
  constructor(private activatedRoute: ActivatedRoute, private classeService: ClasseService, private userService: UsersService, private courseService: CoursesService, private router: Router) { }
  ngOnInit(): void {
    this.classeId = this.activatedRoute.snapshot.params['id'];
    this.getClasseById();
    this.userService.getAllUsers().subscribe(
      (student) => {
        console.log("Here response from BE", student);
        this.studTab = student;
        this.studTab = this.studTab.filter((u: any) => u.roles.some((r: any) => r.name.toLowerCase() === 'student'))
      }
    )
    this.userService.getAllUsers().subscribe(
      (teacher) => {
        console.log("Here response from BE", teacher);
        this.usersTab = teacher;
        this.usersTab = this.usersTab.filter((u: any) => u.roles.some((r: any) => r.name.toLowerCase() === 'teacher'))
      })
    this.courseService.getAllCourses().subscribe(
      (course) => {
        console.log("Here response from BE", course);
        this.coursesTab = course;
      }
    )
  }
  isStudentSelected(id: number): boolean {

    return this.selectedStudents.includes(id);
  }

  // SELECT / UNSELECT
  selectInput(id: number, event: any) {

    if (event.target.checked) {

      this.selectedStudents.push(id);

    } else {

      this.selectedStudents =
        this.selectedStudents.filter(e => e !== id);
    }
  }
  editClasse() {

    const data = {
     name:this.classe.name,
      classeId: this.classeId,

      teacherId: Number(this.classe.teacherId),

      studentsIds: this.selectedStudents,

      courseId:[ Number(this.classe.courseId)]
    };
    console.log("Here Classe", data);
    this.classeService.editClasse(this.classeId,data).subscribe({
      next: (res) => {
        console.log("Classe Mise a jour", res);
        this.router.navigate(['/admin']);
      }
    })
  }
 getClasseById() {

  this.classeService.getClasseById(this.classeId).subscribe((data:any) => {

    console.log("DATA =", data);

    this.classe = data;

    // students
    this.selectedStudents =
      data.students
      ? data.students.map((s:any) => s.id)
      : [];

    // teacher
    this.classe.teacherId =
      data.teacher
      ? data.teacher.id
      : null;

    // course
    this.classe.courseId =
      data.courses&&data.courses.length>0
      ? data.courses[0].id
      : null;

  })
}

}
