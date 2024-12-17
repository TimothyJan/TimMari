import { Component, OnInit } from '@angular/core';
import * as timelineData from '../../../assets/timeline.json';
import { TimeLineDesc } from '../../models/timeline-desc';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class TimelineComponent implements OnInit{
  data:any = timelineData;
  dataList: TimeLineDesc[] = [];
  colorList: string[] = [];
  groupedTimeline: { [key: string]: TimeLineDesc[] } = {};
  months: string[] = [];

  ngOnInit(): void {
    this.organizeDataList();
    this.groupedTimeline = this.groupDataByMonth();
    this.months = Object.keys(this.groupedTimeline);
  }

  constructor() {}

  /** Choose Pastel colors */
  getPastelColorStyle(): string {
    // Helper function to generate a pastel color component
    const generatePastelComponent = () => {
      const min = 128; // Minimum value for a pastel color component
      const max = 255; // Maximum value for any color component
      return Math.floor(Math.random() * (max - min) + min);
    };

    const red = generatePastelComponent();
    const green = generatePastelComponent();
    const blue = generatePastelComponent();

    // Convert the RGB values to a hex string
    const hexColor = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;

    return hexColor;
  }

  /** Organize json data into a dataList */
  organizeDataList() {
    const keys = Object.keys(this.data);
    for (let i = 0; i < keys.length-1; i++) {
      const key = keys[i];
      let desc = this.data[key];
      let item = new TimeLineDesc(desc["date"], desc["summary"], desc["title"]);
      this.dataList.push(item);
    }
    // Add colors
    for(let i = 0; i<this.dataList.length; i++) {
      this.colorList.push(this.getPastelColorStyle());
    }
  }

  groupDataByMonth() {
    const groupedData: { [key: string]: TimeLineDesc[] } = {};
    this.dataList.forEach(item => {
      const date = new Date(item.date);
      const monthYear = date.toLocaleString('default', { month: 'long', year: 'numeric' }); // e.g., "December 2024"
      if (!groupedData[monthYear]) {
        groupedData[monthYear] = [];
      }
      groupedData[monthYear].push(item);
    });
    return groupedData;
  }

  scrollToMonth(month: string): void {
    const element = document.getElementById(month);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

}
