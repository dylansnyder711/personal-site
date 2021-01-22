import { Component, OnInit } from '@angular/core';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  faLinkedin = faLinkedinIn;
  faAt = faAt;
  faPhone = faPhone;

  constructor() {}

  ngOnInit(): void {}
}
