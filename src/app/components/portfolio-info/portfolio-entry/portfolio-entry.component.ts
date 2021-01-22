import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-entry',
  templateUrl: './portfolio-entry.component.html',
  styleUrls: ['./portfolio-entry.component.css'],
})
export class PortfolioEntryComponent implements OnInit {
  entry: string;
  date: string;
  title: string;
  content: string;
  @Input() fullEntry: {
    entry: string;
    date: string;
    title: string;
    content: string;
  };

  constructor() {}

  ngOnInit(): void {
    this.entry = this.fullEntry.entry;
    this.date = this.fullEntry.date;
    this.title = this.fullEntry.title;
    this.content = this.fullEntry.content;
  }
}
