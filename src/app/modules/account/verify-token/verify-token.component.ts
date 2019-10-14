import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AccountService } from '../account.service';
import { UtilityService } from '../../shared/services/utility.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-verify-token',
  templateUrl: './verify-token.component.html',
  styleUrls: ['./verify-token.component.scss']
})
export class VerifyTokenComponent implements OnInit {
  verifyTokenForm: FormGroup;
  sendtoken;
  

  constructor( private _accountService:AccountService , private _utilityService:UtilityService, private _router: Router,
    private route: ActivatedRoute
    ) { 
    this.verifyTokenForm = this._accountService.createVerifyTokenForm();

  }

  ngOnInit() {
  var id = this.route.snapshot.paramMap.get('_id');
  // console.log(id,'OOOOOOOOOOOOOOOOOOOOO')
  this.sendtoken = id;
  }

  sendToken() {
    if (this.verifyTokenForm.invalid) {
      return;
    }
    this._accountService.verify(this.verifyTokenForm.value  , this.sendtoken ).subscribe(console.log);
    this._utilityService.openSnackBar('your token are successfully verified...', true)
     this._router.navigate(['/account/login']);
  }


  getValidationError(control, name) {
    return this._accountService.getValidationError(control, name);
  }

}
