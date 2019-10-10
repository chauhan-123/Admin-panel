import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './reset-password.component';
import { AccountGuard } from '../../gaurd/account.guard';
import { SharedModule } from '../../shared/shared.module';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatDialogModule,
} from '@angular/material';
import { AccountService } from '../account.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
const resetRoute: Routes = [
  { path: '', component: ResetPasswordComponent }
]

@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(resetRoute),
    SharedModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [AccountService]
})
export class ResetPasswordModule { }
