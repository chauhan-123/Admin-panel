import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



const accountRoute: Routes=[
  { path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',loadChildren:'./login/login.module#LoginModule'},
  {path:'sign-up',loadChildren:'./sign-up/sign-up.module#SignUpModule'},
  {path:'forgot-password',loadChildren:'./forgot-password/forgot-password.module#ForgotPasswordModule'},
  {path:'reset-password',loadChildren:'./reset-password/reset-password.module#ResetPasswordModule'}
];


@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(accountRoute)
  
  ]
})
export class AccountModule { }
