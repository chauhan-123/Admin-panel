import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccountService } from './account.service';


const accountRoute: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpModule' },
  {path :'verify-token/:_id', loadChildren:'./verify-token/verify-token.module#VerifyTokenModule'},
  { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule' },
  { path: 'reset-password', loadChildren: './reset-password/reset-password.module#ResetPasswordModule' }, 
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
