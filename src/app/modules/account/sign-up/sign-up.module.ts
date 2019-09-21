import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { RouterModule,Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,

  MAT_DIALOG_DATA
} from '@angular/material';
import { AccountService } from '../account.service';
// import { SnackbarComponent } from '../snackbar/snackbar.component';

const signUpRoute:Routes =[
  {path:'',component:SignUpComponent}
]


@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(signUpRoute),
    ReactiveFormsModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,

  ],
  providers:[AccountService
  ],
  // entryComponents:[SnackbarComponent]
})
export class SignUpModule { }
