import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password.component';
import { RouterModule, Routes } from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AccountService } from '../account.service';
import { AccountGuard } from '../../gaurd/account.guard';
const forgotRoute: Routes = [
  { path: '', component: ForgotPasswordComponent }
]

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(forgotRoute),
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [AccountService]
})
export class ForgotPasswordModule { }
