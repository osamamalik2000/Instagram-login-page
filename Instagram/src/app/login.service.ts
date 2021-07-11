import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:3000";
  login(logindata){
    return this.http.post(this.url+"/login", logindata)
    .subscribe(res=>{
      console.log(res);
    })
  }
}
