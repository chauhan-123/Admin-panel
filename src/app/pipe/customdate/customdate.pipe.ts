import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customdate'
})
export class CustomdatePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {
  }

  transform(value: any, args?: any): any {
    var time = new Date(value);
     return time?this.datePipe.transform(time,'h:mm:ss a'):'-'
  }


}
