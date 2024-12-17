import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as timelineData from '../../../assets/timeline.json';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit, AfterViewInit {
  data:any = timelineData;
  @Input() date:string = "";
  @ViewChild('carousel', { static: true }) carousel: ElementRef;
  currentIndex = 0;
  items:any[] = [];
  files:string[] = [];

  constructor() { }

  ngOnInit(): void {
    /** Get all files in timeline date directory */
    for(let i=0; i<this.data[this.date]["numOfImages"]; i++) {
      this.items.push({ id: i, imageUrl: 'assets/images/Timeline/'+this.date+'/'+i+'.jpg' });
    }
  }

  ngAfterViewInit(): void {
    this.showSlides(this.currentIndex);
  }

  /** Show slides on Carousel */
  showSlides(index: number) {
    const slides = this.carousel.nativeElement.getElementsByClassName('slide');
    if (index >= slides.length) {
      this.currentIndex = 0;
    }
    if (index < 0) {
      this.currentIndex = slides.length - 1;
    }
    Array.from(slides).forEach((slide, i) => {
      const slideEl = slide as HTMLElement;
      slideEl.classList.toggle('active', i === this.currentIndex);
    });
  }

  /** Next slide by increasing index */
  nextSlide() {
    this.showSlides(++this.currentIndex);
  }

  /** Previous slide by increasing index */
  prevSlide() {
    this.showSlides(--this.currentIndex);
  }
}
