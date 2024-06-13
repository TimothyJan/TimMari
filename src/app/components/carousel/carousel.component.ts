import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() date:string = "";
  @ViewChild('carousel', { static: true }) carousel: ElementRef;
  currentIndex = 0;
  items:any[] = [];
  files:string[] = [];
  numOfFiles:any = {
    "2023-05-14": 4,
    "2023-06-10": 8,
    "2023-06-17": 1,
    "2023-06-24": 6,
    "2023-07-07": 2,
    "2023-08-04": 7,
    "2023-10-06": 4,
    "2023-10-20": 5,
    "2023-11-18": 3,
    "2023-12-16": 1,
    "2023-12-31": 7,
    "2024-01-11": 7,
    "2024-02-10": 5,
    "2024-02-24": 4,
    "2024-03-02": 4,
    "2024-03-16": 6,
    "2024-03-23": 4,
    "2024-04-06": 3,
    "2024-04-13": 4,
    "2024-04-22": 2,
    "2024-04-27": 4,
    "2024-05-05": 1,
    "2024-05-11": 1,
    "2024-06-02": 5,
    "2024-06-08": 5,
    "2024-06-09": 5
  }

  constructor() { }

  ngOnInit(): void {
    /** Get all files in timeline date directory */
    for(let i=0; i<this.numOfFiles[this.date]; i++) {
      this.items.push({ id: i, imageUrl: 'assets/images/Timeline/'+this.date+'/'+i+'.jpg' });
    }
  }

  ngAfterViewInit(): void {
    this.showSlides(this.currentIndex);
  }

  showSlides(index: number) {
    const slides = this.carousel.nativeElement.getElementsByClassName('slide');
    if (index >= slides.length) {
      this.currentIndex = 0;
    }
    if (index < 0) {
      this.currentIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i] as HTMLElement;
      if (i === this.currentIndex) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    }
  }

  nextSlide() {
    this.showSlides(++this.currentIndex);
  }

  prevSlide() {
    this.showSlides(--this.currentIndex);
  }
}
