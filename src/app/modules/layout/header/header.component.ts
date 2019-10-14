import { Component, OnInit, HostListener } from '@angular/core';
import { UtilityService } from '../../shared/services/utility.service';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { DataTransferService } from '../../shared/services/data-transfer.service';
import { POPUP_MESSAGES } from '../../../constant/message';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public browserRefresh: boolean;
  userName: string;
  Email: string;
  humburger = false;
  flag = 1;
  profileSubscriber;
  profileDetail;
  @HostListener('window:resize', ['$event'])
  onResize(event?) {

    // if (window.innerWidth < 1025) {
    //   this.renderer.addClass(document.body, 'collapsed');
    //   this.humburger = !this.humburger;
    //   this.flag = 2;
    // }
  }
  constructor(private _utilityService: UtilityService, private _router: Router, private _dataService: DataTransferService,
  ) {
    this.onResize();
    this.getProfileDetail();
  }

  ngOnInit() {
    this.profileSubscriber = this._dataService.profileDetail.subscribe(
      data => {
        if (data)
          this.profileDetail = data;
      }
    )
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
          if (this.profileDetail['url'].length === 0) {
            this.profileDetail.image = 'assets/images/avatar.png';
          } else if (this.profileDetail['url'].length >= 0) {
            this.profileDetail.image = `data:image/jpeg;base64,${this.profileDetail['url']}`;
            this._dataService.profileDetail.next(this.profileDetail);
          }
        }
      )

  }


  logout() {
    let data = {
      title: POPUP_MESSAGES.logout,
      message: POPUP_MESSAGES.logoutConfirmation,
      yes: POPUP_MESSAGES.logout,
      no: 'No',
      isHideCancel: false
    }
    this._utilityService.openDialog(data).subscribe(success => {
      if (success != undefined && success != null) {
        this._utilityService.clearStorage();
        this._router.navigate(['/account/login']);
      }

    });

  }

  ngOnDestroy() {
    if (this.profileSubscriber) {
      this.profileSubscriber.unsubscribe();
    }
  }
}



