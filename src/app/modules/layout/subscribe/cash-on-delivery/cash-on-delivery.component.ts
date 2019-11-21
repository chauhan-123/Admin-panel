import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AccountService } from 'src/app/modules/account/account.service';
import { SubscribeService } from '../subscribe.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cash-on-delivery',
  templateUrl: './cash-on-delivery.component.html',
  styleUrls: ['./cash-on-delivery.component.scss']
})
export class CashOnDeliveryComponent implements OnInit {
  cashOnDeliveryForm:FormGroup
  constructor(private _accountService:AccountService,
    private _subscribeService:SubscribeService,
    private utility:UtilityService, 
    private _router:Router) { 
    this.cashOnDeliveryForm = this._accountService.createCashOnDeliveryForm()
  }

  ngOnInit() {
  }

  cashOnDelivery(){
      if (this.cashOnDeliveryForm.invalid) {
        return;
      }
      this._subscribeService.cashOnDelivery(this.cashOnDeliveryForm.value).subscribe(response =>{
        console.log(response)
        this.utility.openSnackBar('your data successfully store', true)
        this._router.navigate(['/admin/subscription']);
      }, error =>{
      });
      
    
  }

  getValidationError(control, name) {
    return this._accountService.getValidationError(control, name);
  }
}
