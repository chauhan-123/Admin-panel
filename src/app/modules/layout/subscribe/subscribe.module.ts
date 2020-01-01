import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from './subscribe.component';
import { RouterModule , Routes } from '@angular/router';
import { MatCardModule, MatDialogModule, MatIconModule, MatInputModule, MatButtonModule, MatToolbarModule, MatMenuModule, MatDividerModule, MatTooltipModule, MatFormFieldModule, MatListModule, MatTableModule, MatOptionModule, MatPaginatorModule, MatSelectModule, MatExpansionModule } from '@angular/material';
import { CustomdateModule } from 'src/app/pipe/customdate/customdate.module';
import { SubscribeViewComponent } from './subscribe-view/subscribe-view.component';
import { combineAll } from 'rxjs/operators';
import { PaymentComponent } from './payment/payment.component';
import { CashOnDeliveryComponent } from './cash-on-delivery/cash-on-delivery.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { ReactiveFormsModule } from '@angular/forms';

const subRoute:Routes =[
  {path:'', component:SubscribeComponent},
  {path:'subscription_details/:subscribeId', component:SubscribeViewComponent},
  {path:'payment_gateway' , component:PaymentComponent},
  {path:'cashOnDelivery', component:CashOnDeliveryComponent},
  {path:'debitCardPayment', component:DebitCardComponent},
  {path:'creditCardPayment' , component:CreditCardComponent}
]

@NgModule({
  declarations: [SubscribeComponent, SubscribeViewComponent, PaymentComponent, CashOnDeliveryComponent, DebitCardComponent, CreditCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(subRoute),
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatTooltipModule,
    MatListModule,
    MatFormFieldModule,
    MatTableModule,
    CustomdateModule,
    MatExpansionModule,
     MatOptionModule,
     MatSelectModule,
     MatPaginatorModule,
     ReactiveFormsModule
  ],
  entryComponents:[SubscribeViewComponent]
})
export class SubscribeModule { }
