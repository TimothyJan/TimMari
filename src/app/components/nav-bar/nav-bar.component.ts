import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/our-story', label: 'Our Story' },
    { path: '/timeline', label: 'Timeline' },
    { path: '/moments', label: 'Moments' },
    // { path: '/jar-of-memories', label: 'Jar of Memories' },
    // { path: '/function-key-5', label: 'Games' },
  ];
  // Sidenav toggle flag
  isSidenavOpen:boolean = false;

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {

  }

  closeSideNav() {
    this.isSidenavOpen = false;
  }

  /** Toggle the Sidenav */
  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  /** Navigate to the specified route and close the Sidenav */
  navigateTo(route: string) {
    this.router.navigate([route]);
    this.closeSideNav();
  }

  /** HostListener to update the flag on window resize */
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.closeSideNav();
  }

  isLargeScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 720) {
        return true;
    } else {
        return false;
    }
  }
}
