import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  instaform: FormGroup;
  private logData;
  constructor(private fb:FormBuilder, private log:LoginService) {
    this.instaform = this.fb.group({
      'user':['',Validators.required],
      'pass':['',Validators.required]
    });
}

  ngOnInit(): void {
  }
  log_in(){
    this.logData = this.instaform.getRawValue();
    this.log.login(this.logData);    //Sends the data to server using angular service.
    this.instaform.reset();      // This line resets the form after submission.
  }
}
