import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/model/pagination';
import { MatPaginator } from '@angular/material/paginator/typings/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent extends Pagination implements OnInit {
  displayedColumns: string[] = ['position',  'name', 'Email', 'subscribe type' , 'subscribe amount','Date','Time'];
  constructor() {
    super();
   }

  ngOnInit() {
  }


 // change the serial number
 getSerialNumber(i) {
  return i + ((this.validPageOptions['page'] - 1) * this.validPageOptions['limit']);
}

}
