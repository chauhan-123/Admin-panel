import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor( private _router:Router) { 
    if(this._router.url=='/link-expired') {
      this.linkExpired = true;
    }
  }
  linkExpired = false;
  ngOnInit() {
  }

}
