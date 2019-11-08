import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpService } from './services/http.service';
import { UtilityService } from './services/utility.service';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatInputModule,
  MatSnackBarModule,
} from '@angular/material';
import { AccountGuard } from '../gaurd/account.guard';
import { ConfirmationModelComponent } from './component/confirmation-model/confirmation-model.component';

import { HomeGuard } from '../gaurd/home.guard';
import { TokenInterceptor } from '../interceptor/token-interceptor';

@NgModule({
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [

  ConfirmationModelComponent],
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    RouterModule,
    HttpClientModule,
    HttpClientModule,
    FormsModule,
  ],
  entryComponents: [ConfirmationModelComponent

  ],
  providers: [
    HttpService,
    UtilityService,
    AccountGuard,
    HomeGuard,
 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class SharedModule { }
