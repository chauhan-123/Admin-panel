import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookModelComponent } from './add-book-model.component';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/modules/shared/shared.module';
import { HomeService } from '../../home.service';



@NgModule({
  declarations: [AddBookModelComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers:[HomeService]


})
export class AddBookModelModule { }
