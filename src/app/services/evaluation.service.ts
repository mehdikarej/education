import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  evaluationURL:string="http://localhost:9000/api/evaluations"

  constructor(private httpClient:HttpClient) { }

  addEvaluation(obj:any){
    return this.httpClient.post<any>(this.evaluationURL,obj);
  }
  getEvaluation(phoneNumberChild:string){
    return this.httpClient.get<any>(`${this.evaluationURL}/${(phoneNumberChild)}`);
  }
}
