import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router , Routes, RouterModule } from '@angular/router';
import { VerifyTokenComponent } from './verify-token.component';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MAT_DIALOG_DATA
} from '@angular/material';
import { AccountService } from '../account.service';
const verifyRoute: Routes = [
  { path: '', component: VerifyTokenComponent }
]

@NgModule({
  declarations: [VerifyTokenComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(verifyRoute),
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers:[AccountService]
})
export class VerifyTokenModule { }
