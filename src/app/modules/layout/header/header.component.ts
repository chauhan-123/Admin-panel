import { Component, OnInit, Renderer2 } from '@angular/core';
import { UtilityService } from '../../shared/services/utility.service';
import { Router } from '@angular/router';

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
  constructor(private _utilityService:UtilityService, private _router:Router,    private renderer: Renderer2,) { }

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

  openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }


  ngOnInit(): void {
    var currentUser = localStorage.getItem('admin-name');
    var emailUser = localStorage.getItem('admin-email');
    this.userName = currentUser;
    this.Email = emailUser ;
    // console.log(this.Email)
    // if (!this.userName) {
    //     this.userName = "User Name";
    // }
}



  logout(){
    this._utilityService.clearStorage();
    this._router.navigate(['/account/login']);
  }
}   



