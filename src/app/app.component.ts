import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
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
    private _router: Router,
    private utility:UtilityService
  ) {

  }
  ngOnInit() {
    this._router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        UtilityService.loader.next(true)
      }
      else if (event instanceof NavigationEnd) {
        UtilityService.loader.next(false)
      }
      else if (event instanceof NavigationError) {
        let message = 'You are offline, please connect to internet and retry.';
        if (navigator.onLine) {
          message = 'Internal server error !';
        }
        this.utility.openSnackBar(message , true)
        // this._popup.open(message, null, {duration: 5000});
      }
    });
    UtilityService.loader.subscribe(
      data => {
        setTimeout(() => {
          this.loader = data;
        });
      }
    );
  }
}
