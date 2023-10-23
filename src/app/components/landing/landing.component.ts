import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, fromEvent } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{

  constructor(private router: Router, private as: AuthService){}

  username : string

  ngOnInit(): void {
    this.as.user.subscribe((res)=> {
      console.log(res);
      
      this.username = res?.displayName;
    })
  }
  

  getStarted(){

      if(this.as.userId){
        this.router.navigate(['/my-todos'])
      }else{
        this.router.navigate(['/login'])
      }

  }
  
}
