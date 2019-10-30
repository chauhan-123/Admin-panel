import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/modules/shared/shared.module';
import { HomeService } from '../../home.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatOptionModule, MatSelectModule, MatFormFieldModule } from '@angular/material';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MatPaginatorModule,
    MatOptionModule,
   
   
  ],
  providers:[HomeService]


})
export class AddBookModelModule { }
