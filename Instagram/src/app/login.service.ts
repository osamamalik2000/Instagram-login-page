import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(logindata){
    return this.http.post("api/login", logindata)
    .subscribe(res=>{
      console.log(res);
    })
  }
}
