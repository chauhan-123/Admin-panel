import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pagination } from 'src/app/model/pagination';
import { DashboardService } from '../dashboard.service';
import { MatPaginator } from '@angular/material/paginator/typings/public-api';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent extends Pagination implements OnInit {
  displayedColumns: string[] = ['position', 'Role', 'name', 'Email', 'Phone', 'Date','Time'];
  userList = new MatTableDataSource<any>([]);
  constructor(private _dashboardService:DashboardService) { 
    super();
    this.userDetails();
  }

  ngOnInit() {
  }
  userDetails(){
    this._dashboardService.getDashboardDetails().subscribe(response => {
      let userlist =[];
      for (let admin of response['data']) {
        if (admin['role'] === 'user') {
          userlist.push(admin);
        }
      }
      this.userList = new MatTableDataSource(userlist);
      this.total = this.userList['data'].length;
    });
  }

    // change the serial number
    getSerialNumber(i) {
      return i + ((this.validPageOptions['page'] - 1) * this.validPageOptions['limit']);
    }

     /*
    Method For Changing The Pagination
  */
 changePage(event: MatPaginator) {
  this.pageOptionsOnChange = event;
  if (this.total == 0) {
  }
    this.userDetails();
}
}
