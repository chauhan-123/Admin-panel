import { Component, OnInit, HostListener, Renderer2, AfterViewInit, ViewChild, ElementRef, RendererFactory2 } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { DataTransferService } from 'src/app/modules/shared/services/data-transfer.service';
import { POPUP_MESSAGES } from 'src/app/constant/message';
import { LayoutService } from '../../layout.service';
// import {CollespeDirective} from '../../../directive/collespe.directive';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public browserRefresh: boolean;
  userName: string;
  Email: string;
  humburger = false;
  profileSubscriber;
  profileDetail;
  notifications = [];
  // @ViewChild('ham', { static: true }) ham: ElementRef;
  // @HostListener('window:resize', ['$event'])
  // onResize(event?) {
  //   if(window.innerWidth > 1025) {
  //     this.rd.addClass(this.ham.nativeElement, 'open');
  //     this.layoutService.changeMenuState(true);
  //   } else {
  //     this.rd.removeClass(this.ham.nativeElement, 'open')
  //     this.layoutService.changeMenuState(false);
  //   }

  // }
  constructor(private _utilityService: UtilityService,
    private _router: Router, private _dataService: DataTransferService,
    private layoutService: LayoutService
  ) {
    this.getProfileDetail();
    this.notificationsDetails();
  }

  ngAfterViewInit() {
    // this.onResize();
  }

  ngOnInit() {
    this.profileSubscriber = this._dataService.profileDetail.subscribe(
      data => {
        if (data)
          this.profileDetail = data;
      }
    )
  }

  // notificaton method for get data 

  notificationsDetails() {
    this.layoutService.getNotificationData().subscribe(response => {
      this.notifications = response['result'];
    })

  }


  sidebarCollaped() {
    this.humburger = !this.humburger;
    this.layoutService.changeMenuState(this.humburger);
  }

  getProfileDetail() {
    this._dataService.getProfileDetail()
      .subscribe(
        (response: any) => {
          this.profileDetail = response.data;
          if (this.profileDetail['url'].length === 0) {
            this.profileDetail.image = 'assets/images/avatar.png';
          } else if (this.profileDetail.url.length >= 0) {
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

  onNotificationClick() {
    console.log('working on ')
  }
}



