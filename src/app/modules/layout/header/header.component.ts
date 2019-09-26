import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../shared/services/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _utilityService:UtilityService, private _router:Router) { }

  ngOnInit() {
  }
  logout(){
    this._utilityService.clearStorage();
    this._router.navigate(['/account/login']);
  }
}   



