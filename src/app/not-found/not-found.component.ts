import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private _router:Router
  ) {
    if(this._router.url=='/link-expired') {
      this.linkExpired = true;
    }
  }
  linkExpired = false;
  ngOnInit() {
  }

}
