import { Component, OnInit } from '@angular/core';
import * as dateData from '../../../assets/dateData.json';

@Component({
  selector: 'app-date-generator',
  templateUrl: './date-generator.component.html',
  styleUrl: './date-generator.component.css'
})
export class DateGeneratorComponent implements OnInit {
  dates:string[] = dateData.dates;
  desserts:string[] = dateData.desserts;
  hikes:string[] = dateData.hikes;
  restaurants:string[] = dateData.restaurants;

  ngOnInit(): void {
    console.log(this.generateRandomDate());
    console.log(this.generateRandomDessert());
    console.log(this.generateRandomHike());
    console.log(this.generateRandomRestaurant());
  }

  /** Generate random number from 0 to max */
  randomIntFromInterval(max: number) {
    return Math.floor(Math.random() * (max + 1));
  }

  /** Generate random date */
  generateRandomDate(): string {
    let maxNumber = this.dates.length;
    return this.dates[this.randomIntFromInterval(maxNumber)];
  }

  /** Generate random dessert */
  generateRandomDessert(): string {
    let maxNumber = this.desserts.length;
    return this.desserts[this.randomIntFromInterval(maxNumber)];
  }

  /** Generate random hike */
  generateRandomHike(): string {
    let maxNumber = this.hikes.length;
    return this.hikes[this.randomIntFromInterval(maxNumber)];
  }

  /** Generate random restaurant */
  generateRandomRestaurant(): string {
    let maxNumber = this.restaurants.length;
    return this.restaurants[this.randomIntFromInterval(maxNumber)];
  }

}
