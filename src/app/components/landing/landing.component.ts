import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, fromEvent } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  constructor(private router: Router, private as: AuthService){}


  getStarted(){

      if(this.as.userId){
        this.router.navigate(['/my-todos'])
      }else{
        this.router.navigate(['/login'])
      }

  }
  
}