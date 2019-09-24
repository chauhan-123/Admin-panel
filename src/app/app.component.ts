import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { UtilityService } from './modules/shared/services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  loader = false;
  title = 'Login';
  constructor(
    private _router:Router
  ) {

  }
  ngOnInit() {
    this._router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        UtilityService.loader.next(true)
      }
      else if(event instanceof NavigationEnd) {
        UtilityService.loader.next(false)
      }
    });
    UtilityService.loader.subscribe(
      data=>{
        setTimeout(()=>{
          // console.log(data);
          this.loader = data;
          // console.log(this.loader,'jsiji');

        });
     
      }
    )
  }
}
