import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, UrlSegment,
  CanLoad, Router, ActivatedRoute, RouterModule
} from '@angular/router';
import { Observable } from 'rxjs';
import { UtilityService } from '../shared/services/utility.service';


@Injectable()

export class AccountGuard implements CanActivate, CanLoad {
  constructor(private utility: UtilityService, private _router: Router) { };

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