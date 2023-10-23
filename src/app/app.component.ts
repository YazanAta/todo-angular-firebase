import { Component } from '@angular/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('router', [
      transition('0 <=> 1, 0 => 2, 2 => 0, 0 => 3, 3 => 0, 0 => 4, 4 => 0, 1 => 2, 2 => 1, 1 => 3, 3 => 1, 1 => 4, 4 => 1, 2 => 3, 3 => 2, 2 => 4, 4 => 2, 3 => 4, 4 => 3', [
        group([
          query(':enter', [
            style({
              transform: 'translateX(100%)'
            }),
            animate(300, style({
              transform: 'translateX(0)'
            }))
          ]),
          query(':leave', [
            style({
              transform: 'translateX(0)'
            }),
            animate(300, style({
              transform: 'translateX(-100%)'
            }))
          ])
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'todo';
}
