import { Component } from '@angular/core';
import { AboutStartComponent } from "../about-start/about-start.component";
import { ActivatedRoute } from '@angular/router';
import { ClasseService } from '../../services/classe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classe-info',
  imports: [AboutStartComponent,CommonModule],
  templateUrl: './classe-info.component.html',
  styleUrl: './classe-info.component.css'
})
export class ClasseInfoComponent {
  foundClasse:any={};
  selectedStudent:any;
  constructor(private activatedRoute:ActivatedRoute,private classeService:ClasseService){}
  ngOnInit():void{
    this.getClasseById();
    
  }

  getClasseById(){
let classeId=this.activatedRoute.snapshot.params['id'];
console.log("Id",classeId);
this.classeService.getClasseById(classeId).subscribe((res)=>{
  console.log("Here foundClasse",res);
  this.foundClasse=res;
  
})
  }
}
