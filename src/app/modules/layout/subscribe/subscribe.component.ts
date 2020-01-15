import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/model/pagination';
import { MatPaginator } from '@angular/material/paginator/typings/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LayoutService } from '../layout.service';
import { MatDialog } from '@angular/material';
import { SubscribeViewComponent } from './subscribe-view/subscribe-view.component';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent extends Pagination implements OnInit {
  displayedColumns: string[] = ['position',  'name', 'Email', 'subscribe type' , 'subscribe amount','Date','Time' , 'action'];
  subscriptionlist = new MatTableDataSource<any>([]);
  constructor(private _layoutService:LayoutService ,
    private dialog:MatDialog) {
    super();
    this.getSubscriptionDetails();
   }

  ngOnInit() {
  }

// get subscription details
getSubscriptionDetails(){
  this._layoutService.getSubscribeDetails().subscribe(response=>{
    this.subscriptionlist= response['result'];
  })
}

 // change the serial number
 getSerialNumber(i) {
  return i + ((this.validPageOptions['page'] - 1) * this.validPageOptions['limit']);
}
// dialog method for send the data when click the view button
// viewSubscribeDetail(data){
//   const dialogRef = this.dialog.open(SubscribeViewComponent, {
//     width: '550px',
//     height: '450px',
//     data: data || ''
//   });
//   dialogRef.afterClosed().subscribe(result => {
 
//   });
// }

}
