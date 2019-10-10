import { Component, OnInit, HostListener, OnChanges } from '@angular/core';
import { UtilityService } from '../../shared/services/utility.service';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { DataTransferService } from '../../shared/services/data-transfer.service';
import { filter } from 'rxjs/operators';
import { browserRefresh } from '../layout.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  public browserRefresh: boolean;
  userName: string;
  Email: string;
  humburger = false;
  flag = 1;
  profileSubscriber;
  profileDetail;
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    // console.log(window.innerWidth);
    // if (window.innerWidth < 1025) {
    //   this.renderer.addClass(document.body, 'collapsed');
    //   this.humburger = !this.humburger;
    //   this.flag = 2;
    // }
  }
  constructor(private _utilityService: UtilityService, private _router: Router, private _dataService: DataTransferService) {
    // this.onResize();

    this.getProfileDetail();
  }
  ngOnChanges() {
   
    this.editdata()
  }

  editdata() {
    this._dataService.data.subscribe((data) => {
      console.log(data, "data on header")
    })

  }
  // sidebarCollaped() {
  //   this.humburger = !this.humburger;
  //   if (this.flag === 1) {
  //     this.renderer.addClass(document.body, 'collapsed');
  //     this.flag++;
  //     console.log(this.flag);
  //   } else {
  //     this.renderer.removeClass(document.body, 'collapsed');
  //     this.flag--;
  //     console.log(this.flag);
  //   }
  // } 

  getProfileDetail() {

    this._dataService.getProfileDetail()
    .subscribe(
      (response: any) => {
        this.profileDetail = response.data;
        //  if(this.profileDetail['url']==[]){
        //          console.log('coming');
        //          this.profileDetail.image = 'assets/images/avatar.png';
        //         }
        //       else {
        //  this.profileDetail.image = `data:image/jpeg;base64,${this.profileDetail['url']}`;
        //       }


         this._dataService.profileDetail.next(this.profileDetail);
      }
    )
  }

  ngOnInit() {

    this.profileSubscriber = this._dataService.profileDetail.subscribe(
      data => {
        if (data)
          this.profileDetail = data;
      }
    )
  }

  logout() {
    this._utilityService.clearStorage();
    this._router.navigate(['/account/login']);
  }

  ngOnDestroy() {
    if (this.profileSubscriber) {
      this.profileSubscriber.unsubscribe();
    }
  }
}



