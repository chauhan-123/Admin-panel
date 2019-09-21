import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, UrlSegment,
   CanLoad, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
// import { ADMIN_URL } from '../constant/urls';
// import { POPUP_MESSAGES } from '../constant/messages';
// import { UtilityService } from '../modules/shared/services/utility.service';
// import { HttpService } from '../modules/shared/services/http.service';

@Injectable()
export class AccountGuard implements CanActivate, CanLoad {
  constructor(
    private _router: Router,
    // private _utilityService: UtilityService,
    private _route: ActivatedRoute,
    // private _http: HttpService
  ) {

  }
  navigate() {
    this._router.navigate(['admin/home']);
    return false;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!localStorage.getItem('login-token')) {
        let token = next.params.token;
        
        if (token) {
          // return new Observable((observer) => {
          //   let url = ADMIN_URL.validateToken + '?token=' + token;
          //   this._http.getwithurl(url).subscribe(
          //     response => { 
          //       if (response['statusCode'] === 200) {
          //         observer.next(true);
          //       } else {
          //         this._utilityService.showAlert(POPUP_MESSAGES.invalidResetPasswordLink, '');
          //         this._router.navigate(['/link-expired']);
          //         observer.next(false);
          //       }
          //     }, err => {
          //       this._utilityService.showAlert(POPUP_MESSAGES.invalidResetPasswordLink, '');
          //       this._router.navigate(['/link-expired']);
          //       observer.next(false);
          //     }
          //   )
          // });
        }
        else
          return true;
      }
  
      return this.navigate();
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    if (!localStorage.getItem('login-token')) {
        return true;
    }
    return this.navigate();
   
  }
}
