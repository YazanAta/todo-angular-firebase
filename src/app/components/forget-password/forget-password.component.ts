import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

  constructor(private as: AuthService, private router: Router){}

  email: string ='';

  getLink(){
    this.as.forgetPassword(this.email)
    .then(() => {this.router.navigate['/verify-email']}),
    err => {alert("Something went wrong")}
    this.email = '';
  }

}
