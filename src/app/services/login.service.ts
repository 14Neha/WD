import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = environment.baseUrl;
  grant_type = 'password';
  userType  = 1;

  constructor(private httpclient: HttpClient) {
  
   }

  getUserLogin(data:any){
    data.grant_type=this.grant_type;
    data.userType = this.userType;
  console.log("test", this.baseUrl+'login');
    return this.httpclient.post(this.baseUrl+'login', data);
  
   }
   createUserData(user:any){
    
   return  this.httpclient.post(this.baseUrl+'users', user);
  
    
  }
}
