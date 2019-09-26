import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

const adminRoute:Routes =[
  {path:'',redirectTo:'profile'},
  {path:'profile',loadChildren:'./admin-profile/admin-profile.module#AdminProfileModule'},
   {path:'edit-profile',loadChildren:'./edit-profile/edit-profile.module#EditProfileModule'},
  {path:'changePassword',loadChildren:'./change-password/change-password.module#ChangePasswordModule'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoute)
  ]
})
export class AdminModule { }
