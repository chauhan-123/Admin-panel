import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './component/edit-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MatCardModule, MatInputModule, MatIconModule, MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

const editProfile:Routes=[
  {path:'',component:EditProfileComponent}
]

@NgModule({
  declarations: [EditProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(editProfile),
    SharedModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class EditProfileModule { }
