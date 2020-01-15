import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-subscribe-view',
  templateUrl: './subscribe-view.component.html',
  styleUrls: ['./subscribe-view.component.scss']
})
export class SubscribeViewComponent implements OnInit {
  subscribeId:'';
  subscribrData:any;
  constructor(    private dialogRef: MatDialogRef<SubscribeViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _route:ActivatedRoute,
    private _layoutService:LayoutService,
    private _router:Router
    ) { 
        this.subscribeId = this._route.snapshot.params.subscribeId;
        this.getSubscriptionDetails();
    }

  ngOnInit() {

  }

  getSubscriptionDetails(){
    this._layoutService.getSubscriptionDetails({subscribeId:this.subscribeId}).subscribe(response=>{
      this.subscribrData = response['result'][0];
    })
  }

  payNow(){
    this._router.navigate(['/admin/subscription/payment_gateway'])
  }
}
