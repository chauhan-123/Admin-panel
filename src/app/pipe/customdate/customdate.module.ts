import { NgModule } from '@angular/core';
import { CommonModule , DatePipe } from '@angular/common';
import { CustomdatePipe } from '../customdate.pipe';



@NgModule({
  declarations: [CustomdatePipe],
  imports: [
    CommonModule
  ],
  export:[CustomdatePipe],
  providers: [
    DatePipe
  ]
})
export class CustomdateModule { }
