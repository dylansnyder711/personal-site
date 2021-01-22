import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  birthDate: Date = new Date('1996-07-11');
  currentDate: Date = new Date();
  yearOffset: number;
  monthOffset: number;
  age: number;

  constructor() {}

  ngOnInit(): void {
    this.yearOffset =
      +this.currentDate.getFullYear() - +this.birthDate.getFullYear();
    this.monthOffset =
      +this.currentDate.getMonth() - +this.birthDate.getMonth();
    this.age = this.monthOffset > 0 ? this.yearOffset : this.yearOffset - 1;
  }
}
