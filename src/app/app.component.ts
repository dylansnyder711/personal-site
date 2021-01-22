import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('about') aboutElement: ElementRef;
  @ViewChild('portfolio') portfolioElement: ElementRef;
  @ViewChild('contact') contactElement: ElementRef;
  @ViewChild('projects') projectsElement: ElementRef;
  @Output() navLinks: ElementRef[];
  pageScrollEvent = new EventEmitter<any>();

  title = 'Dylan J Snyder';
  currentActiveLink = '';
  showNav = false;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.navLinks = [
        this.aboutElement,
        this.portfolioElement,
        this.projectsElement,
        this.contactElement,
      ];
    }, 200);
  }

  ngAfterViewInit(): void {}

  onScroll(event) {
    this.pageScrollEvent.emit(event);
  }

  handleShowNav(event) {
    if (event.target.scrollTop >= window.innerHeight) {
      this.showNav = true;
      this.currentActiveLink = this.getCurrentActiveLink(
        event.target.scrollTop
      );
    } else {
      this.showNav = false;
    }
  }

  getCurrentActiveLink(scrollTop: number): string {
    const aboutPos = this.aboutElement.nativeElement.offsetTop;
    const portfolioPos = this.portfolioElement.nativeElement.offsetTop;
    const contactPos = this.contactElement.nativeElement.offsetTop;

    if (scrollTop >= aboutPos && scrollTop < portfolioPos) {
      return 'about';
    } else if (scrollTop >= portfolioPos && scrollTop < contactPos) {
      return 'portfolio';
    } else if (scrollTop >= contactPos) {
      return 'contact';
    }
    return null;
  }
}
