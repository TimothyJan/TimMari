import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  isLargeScreen: boolean = true;

  navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/timeline', label: 'Timeline' },
    { path: '/date-generator', label: 'Date Generator' },
  ];

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isLargeScreen = window.innerWidth > 768; // Adjust breakpoint as needed
  }

}
