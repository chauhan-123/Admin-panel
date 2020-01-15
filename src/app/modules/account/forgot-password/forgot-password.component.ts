import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;

  constructor(private _accountService: AccountService) {
    this.forgotForm = this._accountService.createForgotForm();
  }

  ngOnInit() {
  }

  checkEmail() {
    if (this.forgotForm.invalid)
      return;
    this._accountService.checkEmail(this.forgotForm.value)
  }
  getValidationError(control, name) {
    return this._accountService.getValidationError(control, name);
  }
}
