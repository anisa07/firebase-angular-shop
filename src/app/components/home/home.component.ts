import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('hoverLeave', [
      state('hover', style({
        opacity: 1,
        backgroundColor: '#C3423F'
      })),
      state('leave', style({
        opacity: 0.7,
        borderRadius: '50%',
        backgroundColor: '#9BC53D'
      })),
      transition('leave <=> hover', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit {
  isHovered = false;

  toggle() {
    this.isHovered = !this.isHovered;
  }

  constructor() { }

  ngOnInit() {
  }

}
