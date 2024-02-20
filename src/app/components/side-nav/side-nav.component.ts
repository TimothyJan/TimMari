import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

  navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/our-story', label: 'Our Story' },
    { path: '/timeline', label: 'Timeline' },
    { path: '/moments', label: 'Moments' },
    // { path: '/jar-of-memories', label: 'Jar of Memories' },
    // { path: '/function-key-5', label: 'Games' },
  ];

  constructor() {}

}
