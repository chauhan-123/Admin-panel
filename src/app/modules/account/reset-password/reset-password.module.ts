import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { ResetPasswordComponent } from './reset-password.component';

const resetRoute:Routes=[
  {path:'',component:ResetPasswordComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(resetRoute)
  ]
})
export class ResetPasswordModule { }
