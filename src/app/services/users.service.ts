import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
userURL:string="http://localhost:9000/api/users";
  constructor(private httpClient:HttpClient) { }

  signup(fData:FormData){
    return this.httpClient.post<any>(this.userURL+"/signup",fData);
  }
  login(obj:any){
    return this.httpClient.post<any>(this.userURL+"/login",obj);
  }
  getUserById(id:any){
    return this.httpClient.get<any>(`${this.userURL}/${id}`);
  }
  getUserByEmail(email:string){
    return this.httpClient.get(this.userURL+"by-email",{params:{email}});
  }
  editUser(id:any,obj:any){
    return this.httpClient.put<any>(`${this.userURL}/${id}`,obj)
  }
  deleteUser(id:any){
    return this.httpClient.delete<any>(`${this.userURL}/${id}`);
  }
  getAllUsers(){
    return this.httpClient.get<any>(this.userURL);
  }
  activateStatus(id:any){
    return this.httpClient.put<any>(`${this.userURL}/${id}/activate`,{});
  }

}
