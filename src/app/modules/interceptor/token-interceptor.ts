import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { UtilityService } from '../shared/services/utility.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
   private router:Router,
   private _utilityService:UtilityService   
  ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let headers = {
      'Content-Type': 'application/json'
    };
    if(localStorage.getItem('login-token')) {
      headers['authorization'] = 'Bearer ' + localStorage.getItem('login-token');
    }
    request = request.clone({
      setHeaders: headers
    });
    return next.handle(request).pipe(
      tap(
      (data) =>{
        if(data instanceof HttpResponse) {
          UtilityService.loader.next(false);
          console.log(data);
        }
        
      },
      (err: any) => {
        UtilityService.loader.next(false);
        console.log(err)
        if (err instanceof HttpErrorResponse) {
          
          console.log(err.error.responseType);
          console.log('req url :: ' + request.url);
        //   this._utilityService.errorAlert(err);
          if (err.status === 401||err.error.responseType=='UNAUTHORIZED') {
            // this._utilityService.clearStorage();
            this.router.navigate(['account/login']);
          }
        }
      }
    ));
  }
}