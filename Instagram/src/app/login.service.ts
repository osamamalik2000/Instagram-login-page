import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient, private rt: Router){ }

  login(logindata){
    return this.http.post("api/login", logindata)
    .subscribe(res=>{
      console.log(res);
      this.rt.navigateByUrl('https://www.amazon.com/free-gifts/s?k=free+gifts');
    })
  }
}
