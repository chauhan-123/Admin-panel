import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { AccountService } from './../account.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
    decodedJwtData:any
  passwordHide = true;
  confirmPasswordHide = true;
  token: String;
  email: string;
  password: string;
  showSpinner = false
  resetForm: FormGroup;
  
  constructor(
    private router: Router,
    private _accountService: AccountService,
    private _route: ActivatedRoute
  ) {
    this.resetForm = this._accountService.createResetForm();
      this.token = this._route.snapshot.queryParamMap.get('token');
      let jwtData = this.token.split('.')[1]
      let decodedJwtJsonData = window.atob(jwtData)
       this.decodedJwtData = JSON.parse(decodedJwtJsonData)
      let isAdmin = this.decodedJwtData.admin
    this.email = this._route.snapshot.queryParamMap.get('email');
  }

  ngOnInit() {
  }


  resetPassword() {
    if (this.resetForm.invalid)
      return;
    let data = this.resetForm.value;
    //  var formdata = {
    //  OTP: this.otp,
    //     email: this.email,
    // password: this.obj.password
    //   token:this.token
    //  }
    data['resetPassword'] = data['password'];
    data['token'] = this.token;
    data['email'] =this.decodedJwtData.email;


    this._accountService.resetPassword(data);
    // this.router.navigate(['/account/login']);
  }
  getValidationError(control, name) {
    return this._accountService.getValidationError(control, name);
  }


}

