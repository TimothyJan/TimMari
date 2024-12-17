import { Component, Input, OnInit} from '@angular/core';
import data from '../../../assets/dateData.json'

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrl: './wheel.component.css'
})
export class WheelComponent implements OnInit {

  @Input() category: string = "";
  title: string = "";
  imageUrl: string = "";
  options: string[] = [];
  segmentAngle: number = 0;
  wheelTransform: string = '';
  spinning: boolean = false;
  segmentColors: string = "";
  colors: any;

  constructor() {}

  ngOnInit() {
    this.setTitle();
    this.setImage();
    this.setOptions();
    this.setSegmentAngle();
  }

  /** Set Title based off category */
  setTitle() {
    switch(this.category) {
      case "activities":
        this.title = "Activities";
        break;
      case "restaurants":
        this.title = "Restaurants";
        break;
      case "desserts":
        this.title = "Desserts";
        break;
      case "hikes":
        this.title = "Hikes";
        break;
      default:
        console.log("Issue receiving input 'category' for title");
        break;
    }
  }

  /** Set WasaPon image based off category */
  setImage() {
    switch(this.category) {
      case "activities":
        this.imageUrl = "assets/images/WasaPon/Pon1.jpg";
        break;
      case "restaurants":
        this.imageUrl = "assets/images/WasaPon/Wasa2.jpg";
        break;
      case "desserts":
        this.imageUrl = "assets/images/WasaPon/Pon2.jpg";
        break;
      case "hikes":
        this.imageUrl = "assets/images/WasaPon/Wasa3.jpg";
        break;
      default:
        console.log("Issue receiving input 'category' for images");
        break;
    }
  }

  /** Set option based off category */
  setOptions() {
    switch(this.category) {
      case "activities":
        this.options = data["activities"];
        this.options.push("NEW ACTIVITY");
        break;
      case "restaurants":
        this.options = data["restaurants"];
        this.options.push("NEW RESTAURANT");
        break;
      case "desserts":
        this.options = data["desserts"];
        this.options.push("NEW DESSERT");
        break;
      case "hikes":
        this.options = data["hikes"];
        this.options.push("NEW HIKE");
        break;
      default:
        console.log("Issue receiving input 'category' for options");
        break;
    }
  }

  /** Set segment angle */
  setSegmentAngle() {
    this.segmentAngle = 360 / this.options.length;
  }

  /** Calculate winning index */
  calculateWinningIndex(normalizedDegree: number): number {
    return Math.floor((normalizedDegree + this.segmentAngle / 2) % 360 / this.segmentAngle);
  }

  /** Spin wheel */
  async spin() {
    if (this.spinning) return;

    this.spinning = true;
    const randomDegree = Math.floor(Math.random() * 360) + 3600;
    this.wheelTransform = `rotate(${randomDegree}deg)`;

    await new Promise((resolve) => setTimeout(resolve, 5000));

    this.spinning = false;
    const normalizedDegree = randomDegree % 360;
    const winningIndex = this.calculateWinningIndex(normalizedDegree);
    alert('Winning Option: ' + this.options[winningIndex]);
  }

}
