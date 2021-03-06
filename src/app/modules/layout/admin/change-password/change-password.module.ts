import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './component/change-password.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountService } from 'src/app/modules/account/account.service';

const changePassword: Routes = [
  { path: '', component: ChangePasswordComponent }
]

@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(changePassword),
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    SharedModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [AccountService]
})
export class ChangePasswordModule { }
