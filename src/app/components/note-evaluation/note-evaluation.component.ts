import { Component } from '@angular/core';
import { AboutStartComponent } from "../about-start/about-start.component";
import { EvaluationService } from '../../services/evaluation.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-evaluation',
  imports: [AboutStartComponent,FormsModule,CommonModule],
  templateUrl: './note-evaluation.component.html',
  styleUrl: './note-evaluation.component.css'
})
export class NoteEvaluationComponent {
  phoneNumberChild:string='';
  evaluation:any=[];
  MsgError:any;
  constructor(private evaluationService:EvaluationService){}
  ngOnInit():void{}

  getEvaluation(){
    this.evaluationService.getEvaluation(this.phoneNumberChild).subscribe({
      next:(res)=>{
        this.evaluation=res;
        this.MsgError=null;
         console.log("Here evaluation exists",this.evaluation);
      },
      
      error:(err)=>{
        console.log("Student not found",err);
        this.MsgError="Student not found";
      }
    })
  }

}
