import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminService } from './admin.service';
import { HeaderComponent } from '../layout parts/header/header.component';

const adminRoute: Routes = [
  { path: '', redirectTo: 'profile' },
  { path: 'profile', loadChildren: './admin-profile/admin-profile.module#AdminProfileModule' },
  { path: 'edit-profile', loadChildren: './edit-profile/edit-profile.module#EditProfileModule' },
  { path: 'changePassword', loadChildren: './change-password/change-password.module#ChangePasswordModule' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoute)
  ],
  providers: [HeaderComponent, AdminService]
})
export class AdminModule { }