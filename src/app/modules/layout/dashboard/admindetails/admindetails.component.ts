import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource } from '@angular/material/table';
import { Pagination } from 'src/app/model/pagination';
import { MatPaginator } from '@angular/material/paginator/typings/paginator';

@Component({
  selector: 'app-admindetails',
  templateUrl: './admindetails.component.html',
  styleUrls: ['./admindetails.component.scss']
})
export class AdmindetailsComponent extends Pagination implements OnInit {
  displayedColumns: string[] = ['position', 'Role', 'name', 'Email', 'Phone', 'Date','Time'];
  adminList = new MatTableDataSource<any>([]);
  constructor(private _dashboardService: DashboardService) {
    super();
    this.adminDetails();
  }

  ngOnInit() {
  }

  adminDetails() {
    this._dashboardService.getDashboardDetails().subscribe(response => {
      let adminlist =[];
      for (let admin of response['data']) {
        if (admin['role'] === 'admin') {
          adminlist.push(admin);
        }
      }
      this.adminList = new MatTableDataSource(adminlist);
      this.total = this.adminList['data'].length;
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
    this.adminDetails();
}
  
}
