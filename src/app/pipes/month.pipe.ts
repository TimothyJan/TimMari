import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'month'
})
export class MonthPipe implements PipeTransform {

  transform(value: string): string {
    if(value.substring(0,3) == "Jan" || value == "May 2023") {
      return value;
    }
    return value.substring(0, value.length-5);
  }

}
