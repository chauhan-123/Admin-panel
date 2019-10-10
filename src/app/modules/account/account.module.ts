import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AccountService } from './account.service';
import { AccountGuard } from '../gaurd/account.guard';
import { FormsModule, FormGroup } from '@angular/forms';

const accountRoute: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpModule' },
  { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule' },
  { path: 'reset-password', loadChildren: './reset-password/reset-password.module#ResetPasswordModule' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(accountRoute),
  ],
  providers: [AccountService]


})
export class AccountModule { }
