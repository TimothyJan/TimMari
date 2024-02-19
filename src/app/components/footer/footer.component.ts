import { Component } from '@angular/core';
import { SocialLink } from '../../models/social-link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  links = new Array<SocialLink>;

  ngOnInit(): void {
    let link1 = new SocialLink("https://github.com/timothyjan", "github");
    let link2 = new SocialLink("https://www.linkedin.com/in/timothy-jan-533212108/", "linkedin");
    this.links.push(link1, link2);
  }
}
