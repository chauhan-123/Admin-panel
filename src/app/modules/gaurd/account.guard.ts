import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, UrlSegment,
  CanLoad, Router, ActivatedRoute, RouterModule
} from '@angular/router';
import { Observable } from 'rxjs';
import { UtilityService } from '../shared/services/utility.service';


@Injectable()

export class AccountGuard implements CanActivate, CanLoad {
  constructor(private utility: UtilityService, private _router: Router)
   { 

   }

  // navigate() {
  //   this._router.navigate(['admin/home']);
  //   return false;
  // }
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // if (!localStorage.getItem('login')) {
      //   let token = next.params.token;
        
      //   if (token) {
      //     return new Observable((observer) => {
      //       let url = ADMIN_URL.validateToken + '?token=' + token;
      //       this._http.getwithurl(url).subscribe(
      //         response => { 
      //           if (response['statusCode'] === 200) {
      //             observer.next(true);
      //           } else {
      //             this._utilityService.showAlert(POPUP_MESSAGES.invalidResetPasswordLink, '');
      //             this._router.navigate(['/link-expired']);
      //             observer.next(false);
      //           }
      //         }, err => {
      //           this._utilityService.showAlert(POPUP_MESSAGES.invalidResetPasswordLink, '');
      //           this._router.navigate(['/link-expired']);
      //           observer.next(false);
      //         }
      //       )
      //     });
      //   }
      //   else
      //     return true;
      // }
  
  //     return this.navigate();
  // }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let token = localStorage.getItem('login');
    if (token) {
      return true;
    }
    this._router.navigate(['/account/login']);
    return false;
  }


  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    let url: string = route.path;
    if (localStorage.getItem('login')) {
      return true;
    }
    return this.navigate();
  }
  navigate() {
    this.utility.clearStorage();
    this._router.navigate(['/account/login']);
    return false;
  }

}