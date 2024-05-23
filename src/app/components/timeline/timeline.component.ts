import { Component, OnInit } from '@angular/core';
import * as timelineData from '../../../assets/timeline.json';
import { TimeLineDesc } from '../../models/timeline-desc';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent implements OnInit{
  data:any = timelineData;
  dataList: TimeLineDesc[] = [];
  colorList: string[] = [];

  ngOnInit(): void {
    /** Organize json data into a dataList */
    const keys = Object.keys(this.data);
    for (let i = 0; i < keys.length-1; i++) {
      const key = keys[i];
      let desc = this.data[key];
      let item = new TimeLineDesc(desc["date"], desc["summary"], desc["title"]);
      this.dataList.push(item);
    }
    /** Add colors */
    for(let i = 0; i<this.dataList.length; i++) {
      this.colorList.push(this.getColorStyle());
    }
  }

  constructor() {}

  getColorStyle(): string {
    return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
  }

}
