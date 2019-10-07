import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/modules/account/account.service';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  oldPasswordHide =  true;
  confirmPasswordHide = true;
  passwordHide = true;
  changePasswordForm:FormGroup;
 
  constructor( private _router:Router , private _accountService:AccountService) {
    this.changePasswordForm = this._accountService.createChangePasswordForm();
   }

  ngOnInit() {
  }
  changePassword(){
  if(this.changePasswordForm.invalid) {
    console.log('wrong value.....');
    return;
  }
  this._accountService.changePassword(this.changePasswordForm.value);
  }

  getValidationError(control,name) {
 
    return this._accountService.getValidationError(control,name);
  }

}

