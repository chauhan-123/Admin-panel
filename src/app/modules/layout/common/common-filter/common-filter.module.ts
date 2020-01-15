import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonFilterComponent } from './common-filter.component';
import { MatIconModule, MatDialogRef } from '@angular/material';



@NgModule({
  declarations: [CommonFilterComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[CommonFilterComponent],
})
export class CommonFilterModule { }
