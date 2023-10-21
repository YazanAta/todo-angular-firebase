import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private as: AuthService, private us: UserService, private router: Router){}

  errorMessage: string ;

  signup(form: NgForm){
    let data: User = form.value;
    this.as.signup(data.email, data.password)
    .then(result => {
      this.errorMessage = ''
      this.us.addNewUser(result.user.uid, data.name, data.email).then(() => {
        this.router.navigate(['/'])
      })
    })
    .catch(error => {
      this.errorMessage = error.message
    }
    )
  }

}
