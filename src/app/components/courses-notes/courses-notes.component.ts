import { Component } from '@angular/core';
import { AboutStartComponent } from "../about-start/about-start.component";
import { ClasseService } from '../../services/classe.service';
import { EvaluationService } from '../../services/evaluation.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses-notes',
  imports: [AboutStartComponent,CommonModule,FormsModule],
  templateUrl: './courses-notes.component.html',
  styleUrl: './courses-notes.component.css'
})
export class CoursesNotesComponent {
  classes:any=[];
  student:any={};
  
  constructor(private classeService:ClasseService,private evalutionService:EvaluationService){}
  ngOnInit():void{
    this.getMyClasses();
  }
  getMyClasses(){
    this.classeService.getMyClasses().subscribe((data)=>{
      console.log("Here classe",data);
      this.classes=data;
   this.classes.forEach((std: any) => {
        std.users.forEach((us: any) => {
          console.log("Here classe",std);
          this.student[us.id] = {
            studentId:us.id,
            classeId:std.classeId,
            courseId:std.courses?.[0]?.id,
            note: null,
            remark: ''
          };
        });
      });
    })
  }
  addEvaluation(userId:number){
    const evaluation=this.student[userId];
    console.log("Here evaluation",evaluation);
    this.evalutionService.addEvaluation(evaluation).subscribe({
      next:(res)=>console.log(res),
      error:(err)=>console.error(err)
    })
 
  }

}
