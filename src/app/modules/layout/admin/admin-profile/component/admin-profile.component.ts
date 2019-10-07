import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from 'src/app/modules/shared/services/data-transfer.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {
  profileDetail;
  constructor(private router:Router, private dataTransfer:DataTransferService) { }

  ngOnInit() {
    this.getDetail();
}

// editProfile(){
// this.router.navigate(['../../../admin/admin/edit-profile']);

// }
  

 /**
   * Getting Admin Profile Detail
   */
getDetail() {
  this.dataTransfer.getProfileDetail()
  .subscribe(
    (response:any) => {
      console.log(response)
      this.profileDetail = response.data;
    }
  )
}

}
