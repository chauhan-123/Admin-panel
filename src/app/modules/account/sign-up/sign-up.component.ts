import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { VALIDATION_MESSAGES } from '../../../constant/message';
import { UtilityService } from '../../shared/services/utility.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signForm: FormGroup;
  hide = true;

  constructor(private _router: Router, private _accountService: AccountService, private router: Router, private utility: UtilityService) {
    this.signForm = this._accountService.createSignUpForm();
  }

  ngOnInit() {
  }

  signup() {
    if (this.signForm.invalid) {
      return;
    }
    this._accountService.signup(this.signForm.value).subscribe(response =>{
      console.log(response['result']._id,'res ::::::::::::::::::::::::');
      this.utility.openSnackBar('you are successfully signup', true)
      this._router.navigate(['/account/verify-token' , response['result']._id ]);
      // this._router.navigate(['/account/verify-token'])
    });
    
  }

  getValidationError(control, name) {
    return this._accountService.getValidationError(control, name);
  }
}
