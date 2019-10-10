import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProfileComponent } from './component/admin-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

const adminProfile: Routes = [
  { path: '', component: AdminProfileComponent }
]

@NgModule({
  declarations: [AdminProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminProfile),
    MatCardModule,
    MatButtonModule
  ]
})
export class AdminProfileModule { }
