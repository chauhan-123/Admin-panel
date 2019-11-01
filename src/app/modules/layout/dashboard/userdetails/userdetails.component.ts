import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pagination } from 'src/app/model/pagination';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent extends Pagination implements OnInit {
  displayedColumns: string[] = ['position', 'Role', 'name', 'Email', 'Phone', 'Time'];
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
    });
  }

    // change the serial number
    getSerialNumber(i) {
      return i + ((this.validPageOptions['page'] - 1) * this.validPageOptions['limit']);
    }
}
