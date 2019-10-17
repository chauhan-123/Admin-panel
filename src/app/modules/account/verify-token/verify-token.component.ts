import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AccountService } from '../account.service';
import { UtilityService } from '../../shared/services/utility.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { POPUP_MESSAGES } from 'src/app/constant/message';

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

  this.sendtoken = id;
  }

  sendToken() {
    if (this.verifyTokenForm.invalid) {
      return;
    }
    this._accountService.verify(this.verifyTokenForm.value  , this.sendtoken ).subscribe(
      response =>{
        if (response['statusCode'] === 200) {
          let data = {
            title: POPUP_MESSAGES.verifyTokenTitle ,
            message: POPUP_MESSAGES.verifyChanged,
            yes: POPUP_MESSAGES.close,
            isHideCancel:true,
            successIcon:true
          }
          this._utilityService.openDialog(data).subscribe(success => {
            this._router.navigate(['/account/login']);
          });
        }
      }, error =>{

      }
    );

    // this._utilityService.openSnackBar('your token are successfully verified...', true)
    //  this._router.navigate(['/account/login']);
  }


  getValidationError(control, name) {
    return this._accountService.getValidationError(control, name);
  }

}
