import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {



  constructor(private as: AuthService, private router: Router){}

  login(form){
    let data = form.value
    this.as.login(data.email, data.password)
    .then(result => {
      if(result.user.emailVerified == true){
        this.router.navigate(['/'])
      }else{
        this.router.navigate(['/'])
      }
    })
    .catch(err => alert("Username Or Password isn't correct"))
  }

}
