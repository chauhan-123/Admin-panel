import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {
userName:string;
Email:string;
userId:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    var currentUser = localStorage.getItem('admin-name');
    var emailUser = localStorage.getItem('admin-email');
    var IdUser = localStorage.getItem('_id');
    this.userId = IdUser;
    // console.log(this.userId,'hjjhj');
    this.userName = currentUser;
    this.Email = emailUser ;
    console.log(this.Email)
    // if (!this.userName) {
    //     this.userName = "User Name";
    // }
}

editProfile(){
this.router.navigate(['../../../admin/admin/edit-profile']);

}

}
