import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PaymentModel } from 'src/app/modules/shared/models/payment.model';
import { SubscribeService } from '../subscribe.service';

@Component({
  selector: 'app-debit-card',
  templateUrl: './debit-card.component.html',
  styleUrls: ['./debit-card.component.scss']
})
export class DebitCardComponent implements OnInit {
  paymentModel: PaymentModel = new PaymentModel();
  paymentForm = new FormGroup({
    firstname : new FormControl(''),
    lastname : new FormControl(''),
    email : new FormControl(''),
    phone : new FormControl(''),
    amount : new FormControl(''),
    productinfo : new FormControl('')
  });
  constructor( private _subscribeService:SubscribeService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.paymentModel.firstname = this.paymentForm.value.firstname;
    this.paymentModel.lastname = this.paymentForm.value.lastname;
    this.paymentModel.email = this.paymentForm.value.email;
    this.paymentModel.phone = this.paymentForm.value.phone;
    this.paymentModel.amount = this.paymentForm.value.amount;
    this.paymentModel.productinfo = this.paymentForm.value.productinfo;

    console.log('Payment Model : ' + JSON.stringify(this.paymentModel));
    this._subscribeService.createPayment(this.paymentModel).subscribe(
      res => {
        
        this.onSuccessPayment(res);
      },
      err => {
        this.onFailurePayment(err);
      }
    );
  }


  onSuccessPayment(response) {
    console.log('Success Payment : ' + response);
    if (response.url) {
      // Render PayUmoney payment gateway page
      window.location.href = response.url;
    }
  }

  onFailurePayment(error) {
    console.log('Failure Payment : ' + error);
  }
}
