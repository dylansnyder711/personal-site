import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [animate(300)]),
      transition('* => void', [animate(500)]),
    ]),
  ],
})
export class NavComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  isVisible: boolean = false;
  activeLink: string;
  linkIds: string[] = [];
  pageScrollSub: Subscription;
  @Input() navLinks: ElementRef[];
  @Input() pageScroll: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.pageScrollSub = this.pageScroll.subscribe((event) => {
      if (event.target.scrollTop >= this.navLinks[0].nativeElement.offsetTop) {
        this.isVisible = true;
        const lastNavLinkIndex = this.navLinks.length - 1;
        this.navLinks.forEach((value) => {
          const bottomOfPage =
            event.target.scrollTop ===
            this.navLinks[lastNavLinkIndex].nativeElement.offsetTop +
              this.navLinks[lastNavLinkIndex].nativeElement.clientHeight -
              window.innerHeight;
          if (bottomOfPage) {
            this.assignActive(this.navLinks[lastNavLinkIndex].nativeElement.id);
          } else if (this.isActive(event.target.scrollTop, value)) {
            this.assignActive(value.nativeElement.id);
          }
        });
      } else this.isVisible = false;
    });
  }

  //Returns true if scrollTop is within the upper and lower y bounds of the passed ElementRef
  isActive(scrollTop: number, eleRef: ElementRef): boolean {
    const start = eleRef.nativeElement.offsetTop;
    const end =
      eleRef.nativeElement.offsetTop + eleRef.nativeElement.offsetHeight;
    if (scrollTop >= start && scrollTop < end) {
      return true;
    } else return false;
  }

  assignActive(link: string) {
    this.activeLink = link;
  }

  ngOnDestroy() {
    this.pageScrollSub.unsubscribe();
  }
}
