import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthMin'
})
export class MonthMinPipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0, 3);
  }

}
