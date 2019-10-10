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


  

 /**
   * Getting Admin Profile Detail
   */
getDetail() {
  this.dataTransfer.getProfileDetail()
  .subscribe(
    (response:any) => {

      this.profileDetail = response.data;
//       if(this.profileDetail['url']==[]){
//         console.log('coming');
//         this.profileDetail.image = 'assets/images/avatar.png';
//        }
//      else {
// this.profileDetail.image = `data:image/jpeg;base64,${this.profileDetail['url']}`;
//      }


    }
  )
}

}
