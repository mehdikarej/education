import { Component } from '@angular/core';
import { AboutStartComponent } from "../about-start/about-start.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-signup',
  imports: [AboutStartComponent,ReactiveFormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  path!:string;
signupForm!:FormGroup;
errorMsg:string="";
studentsTab:any=[];
constructor(private formBuilder:FormBuilder,  private userService:UsersService,private router:Router){}
ngOnInit():void{
    this.userService.getAllUsers().subscribe((data)=>{
    this.studentsTab=data;
    this.studentsTab=this.studentsTab.filter((s:any)=>s.roles.some((r:any)=>r.name.toLowerCase()==='student'));

  })
  this.path=this.router.url;
  this.signupForm=this.formBuilder.group({
    firstName:["",[Validators.required,Validators.minLength(3)]],
    lastName:["",[Validators.required,Validators.minLength(4)]],
    email: ["", [Validators.required,  Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    phoneNumber:["",[Validators.required,Validators.pattern(/^(?:\+216|00216|0)?[ -]?(?:\d{2}[ -]?){3}\d{2}$/)]],
    password:["",[Validators.required,Validators.minLength(8)]],
    address:["",[Validators.required,Validators.minLength(4)]],
    specialty:["",[Validators.required,Validators.minLength(4)]],
    experience:["",[Validators.required,Validators.minLength(4)]],
    phoneNumberChild:["",[Validators.required,Validators.pattern(/^(?:\+216|00216|0)?[ -]?(?:\d{2}[ -]?){3}\d{2}$/)]],

})
}
signup(){
 const formData = new FormData();
const { photo, cv, ...formValues } = this.signupForm.value;
  // champs du formulaire
  Object.keys(this.signupForm.value).forEach(key => {
    const value = this.signupForm.value[key];
    if (value !== null && value !== undefined) {
      formData.append(key, value);
    }
  });
    if(this.path=="/signup"){
    formData.append("roles","student");
  }
  else
     if(this.path=="/signupTeacher"){
       formData.append("roles","teacher");
     }
     else 
      if(this.path=="/signupParent"  &&!this.existsPhoneNumber(this.signupForm.value.phoneNumberChild)){
         formData.append("roles","parent");
        
      }
      else{
         formData.append("roles","admin");
      }
        if (this.file) {
    if (this.path === "/signup") {
      formData.append("photo", this.file);
    }
    if (this.path === "/signupTeacher") {
      formData.append("cv", this.file);
    }
  }
    this.userService.signup(formData).subscribe({
    next: res => {
      console.log("Here response from BE", res);
    },
    error: err => {
      if (err.status === 409) {
        this.errorMsg = "Email already exists";
      }
    }
  });

}
existsPhoneNumber(phoneNumberChild:string):boolean{
  return this.studentsTab.some(
    (s:any)=>s.phoneNumber===phoneNumberChild
  );

}

file!:File;
   onFileSelected(evt: Event) {
    // const file = (event.target as HTMLInputElement).files[0];

    const inputElement = evt.target as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length
      > 0) {
      this.file = inputElement.files[0];
      console.log("Here selected file:", this.file);
    }
  }

}
