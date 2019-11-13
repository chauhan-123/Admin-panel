import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFilesComponent } from './component/input-files.component';
import { MatIconModule } from '@angular/material';



@NgModule({
  declarations: [InputFilesComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[InputFilesComponent]
})
export class InputFilesModule { }
