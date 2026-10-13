import { Component } from '@angular/core';
import { ClasseService } from '../../services/classe.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classe-table',
  imports: [CommonModule],
  templateUrl: './classe-table.component.html',
  styleUrl: './classe-table.component.css'
})
export class ClasseTableComponent {
  classeTab:any=[];
  constructor(private classeService:ClasseService,private router:Router){}
  ngOnInit():void{
    this.classeService.getAllClasses().subscribe((data)=>{
      console.log("Here classe",data);
      this.classeTab = data;
    })
  }
  getAllClasses(){
    this.classeService.getAllClasses().subscribe((data)=>{
      console.log("Here response from BE",data);
      this.classeTab=data;
    })
  }
  isTeacher(user: any): boolean {
  return user.roles?.some((r:string) =>
    r.toLowerCase() === 'teacher'
  );
}
  displayClasse(id:any){
    this.router.navigate(['classeInfo',id])
  }
  editClasse(id:any){
    this.router.navigate(['editClasse',id]);
  }
  deleteClasse(id:any){
    this.classeService.deleteClasse(id).subscribe((res)=>{
      console.log("Here response from BE",res);
      this.getAllClasses();
    }

    )
  }
 


}
