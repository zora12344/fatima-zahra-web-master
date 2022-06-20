import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleNavbar = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  isStuck: boolean = false;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isStuck = window.pageYOffset >= 350;
  }

}
