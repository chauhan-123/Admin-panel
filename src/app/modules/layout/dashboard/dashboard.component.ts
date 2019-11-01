import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardList: any;
  userCounter = 0;
  adminCounter = 0;

  constructor(private _dashboardService: DashboardService , private _router:Router) {
    this.dashboardDetails();
  }

  ngOnInit() {
  }

  dashboardDetails() {
    this._dashboardService.getDashboardDetails().subscribe(response => {
      this.dashboardList = response['data'];
      for (let a of this.dashboardList) {
        if (a['role'] === 'user') {
          this.userCounter++;
        } else if (a['role'] === 'admin') {
          this.adminCounter++;
        }
        else {
        }
      }
    });
  }

  admindetails(){
 this._router.navigate(['../admin/dashboard/admindetails']);
  }

  userDetails(){
    this._router.navigate(['../admin/dashboard/userdetails']);
  }
}
