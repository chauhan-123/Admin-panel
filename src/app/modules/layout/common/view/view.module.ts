import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import { MatIconModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { ViewService } from './view.service';



@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  entryComponents:[ViewComponent],
  providers:[ViewService]
})
export class ViewModule { }
