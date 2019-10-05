import { Component, OnInit, HostListener, Renderer2 } from '@angular/core';
import { UtilityService } from '../../shared/services/utility.service';
import { Router } from '@angular/router';
import { DataTransferService } from '../../shared/services/data-transfer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName: string;
  Email:string;
  humburger = false;
  flag = 1;
  profileSubscriber;
  profileDetail;
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    // console.log(window.innerWidth);
    if (window.innerWidth < 1025) {
      this.renderer.addClass(document.body, 'collapsed');
      this.humburger = !this.humburger;
      this.flag = 2;
    }
  }
  constructor(private _utilityService:UtilityService, private _router:Router,  private _dataService: DataTransferService,  private renderer: Renderer2,) { 
    this.onResize();
    this.getProfileDetail();
  }

  sidebarCollaped() {
    this.humburger = !this.humburger;
    if (this.flag === 1) {
      this.renderer.addClass(document.body, 'collapsed');
      this.flag++;
      console.log(this.flag);
    } else {
      this.renderer.removeClass(document.body, 'collapsed');
      this.flag--;
      console.log(this.flag);
    }
  } 
  
  getProfileDetail() {
    this._dataService.getProfileDetail().subscribe(
      (response: any) => {
        this.profileDetail = response.data;
        this._dataService.profileDetail.next(this.profileDetail);
      }
    )
  }

  ngOnInit() {
    this.profileSubscriber = this._dataService.profileDetail.subscribe(
      data => {
        if(data)      
        this.profileDetail = data;
        }
    )
}

  logout(){
    this._utilityService.clearStorage();
    this._router.navigate(['/account/login']);
  }

  ngOnDestroy() {
    if (this.profileSubscriber) {
      this.profileSubscriber.unsubscribe();
    }
  }
}   



