import { NgModule } from '@angular/core';
import { CommonModule , DatePipe } from '@angular/common';
import { CustomdatePipe } from './customdate.pipe';



@NgModule({
  declarations: [CustomdatePipe],
  imports: [
    CommonModule
  ],
  exports:[
CustomdatePipe
  ],
  providers: [
    DatePipe
  ]
})
export class CustomdateModule { }
