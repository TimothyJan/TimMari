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
  options: string[] = [];
  segmentAngle: number = 0;
  wheelTransform: string = '';
  spinning: boolean = false;

  constructor() {}

  ngOnInit() {
    switch(this.category) {
      case "dates":
        this.title = "Dates";
        this.options = data["dates"];
        this.options.push("NEW DATE");
        break;
      case "restaurants":
        this.title = "Restaurants";
        this.options = data["restaurants"];
        this.options.push("NEW RESTAURANT");
        break;
      case "desserts":
        this.title = "Desserts";
        this.options = data["desserts"];
        this.options.push("NEW DESSERT");
        break;
      case "hikes":
        this.title = "Hikes";
        this.options = data["hikes"];
        this.options.push("NEW HIKE");
        break;
      default:
        console.log("Issue receiving input 'category'");
        break;
    }
    this.segmentAngle = 360 / this.options.length;
  }

  spin() {
    if (this.spinning) {
      return;
    }
    this.spinning = true;
    const randomDegree = Math.floor(Math.random() * 360) + 3600; // At least 10 spins
    this.wheelTransform = `rotate(${randomDegree}deg)`;

    setTimeout(() => {
      this.spinning = false;
      const normalizedDegree = randomDegree % 360;
      const winningIndex = Math.floor((normalizedDegree + this.segmentAngle / 2) % 360 / this.segmentAngle);
      alert('Winning Option: ' + this.options[winningIndex]);
    }, 5000); // Match the duration of the CSS transition
  }

}
