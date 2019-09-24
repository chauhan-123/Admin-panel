import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { AccountService } from '../account.service';
import { FormGroup } from '@angular/forms';
import { AccountService } from './../account.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  passwordHide = true;
  confirmPasswordHide = true;
  token:String;
  showSpinner = false
  resetForm:FormGroup;
  constructor(
    private router: Router,
   // private renderer: Renderer2,
     private _accountService:AccountService,
    // private _route:ActivatedRoute
  ) {
    this.resetForm = this._accountService.createResetForm();
    // this.token = this._route.snapshot.params.token;
  }

  ngOnInit() {
   // this.renderer.addClass(document.body, 'scollon');
  }
  // closePopup() {
  //   this.router.navigate([{ outlets: { popup: null } }]);
  // }
  resetPassword() {
    if(this.resetForm.invalid)
    return;
    let data = this.resetForm.value;
    data['resetPassword'] = data['password'];
    // data['token'] = this.token;
    delete data['password'];
    this._accountService.resetPassword(data);
  }
  getValidationError(control,name) {
    return this._accountService.getValidationError(control,name);
  }
  // ngOnDestroy(): void {
  //   this.renderer.removeClass(document.body, 'scollon');
  // }

}

