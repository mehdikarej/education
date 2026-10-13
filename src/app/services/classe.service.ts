import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {
classeURL:string="http://localhost:9000/api/classes"
  constructor(private httpClient:HttpClient) { }

  addClasse(obj:any){
    return this.httpClient.post<any>(this.classeURL,obj);
  }
  editClasse(id:any,obj:any){
    return this.httpClient.put<any>(`${this.classeURL}/${id}`,obj);
  }
  deleteClasse(id:any){
    return this.httpClient.delete<any>(`${this.classeURL}/${id}`);
  }
  getClasseById(id:any){
    return this.httpClient.get<any>(`${this.classeURL}/${id}`);
  }
  getAllClasses(){
    return this.httpClient.get<any>(this.classeURL);
  }
  getMyClasses(){
    return this.httpClient.get<any>(this.classeURL+"/MyClasses");
  }

}
