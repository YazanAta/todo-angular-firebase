import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private as: AuthService, private router: Router, private us: UserService){}

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

  loginWithGoogle(){
    this.as.GoogleAuth()
    .then((result) => {
      this.us.addNewUser(result.user.uid, result.user.displayName, result.user.email).then( () => {
        this.router.navigate(['/'])
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

}
