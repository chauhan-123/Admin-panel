import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

  constructor( private _router: Router,   private _accountService:AccountService) 
  {
    this.loginForm = this._accountService.createLoginForm();
   }

  ngOnInit() {
  }
  login() {
    if(this.loginForm.invalid) {
      return;
    }
    this._accountService.login(this.loginForm.value);
  }

  getValidationError(control,name) {
    return this._accountService.getValidationError(control,name);
  }

}
