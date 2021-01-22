import {
  transition,
  trigger,
  state,
  style,
  animate,
} from '@angular/animations';
import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    trigger('moveUp', [
      state('void', style({ opacity: 0, transform: 'translateY(100px)' })),
      transition('void => *', [
        animate(300, style({ opacity: 0.3, transform: 'translateY(50px)' })),
        animate(800, style({ opacity: 0.6, transform: 'translateY(15px)' })),
        animate(300, style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('moveLeft', [
      state('void', style({ opacity: 0, transform: 'translateX(100px)' })),
      transition('void => *', [
        animate(300, style({ opacity: 0.3, transform: 'translateX(50px)' })),
        animate(800, style({ opacity: 0.6, transform: 'translateX(15px)' })),
        animate(300, style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('moveRight', [
      state('void', style({ opacity: 0, transform: 'translateX(-100px)' })),
      transition('void => *', [
        animate(300, style({ opacity: 0.3, transform: 'translateX(-50px)' })),
        animate(800, style({ opacity: 0.6, transform: 'translateX(-15px)' })),
        animate(300, style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class LandingComponent implements OnInit {
  //TODO viewchild for all elements in app.component navLinks
  @Input() navLinks: ElementRef[];

  constructor() {}

  ngOnInit(): void {}
}
