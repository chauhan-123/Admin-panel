import { Injectable, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from '../shared/services/http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  baseUrl = "http://localhost:3000/"
  menuState = new BehaviorSubject(false);
  constructor( private _http:HttpService , 
    private httpClient:HttpClient ) { }

  changeMenuState(state: boolean) {
    this.menuState.next(state);
  }


  // notification api for get data
  getNotificationData(){
    return this._http.get(`${this.baseUrl}get_notification`);
  }

// subscribe details method 
  getSubscribeDetails(){
     return this._http.get(`${this.baseUrl}subscription_details`);
  }

// this method call when user click the view button on subscription table
  getSubscriptionDetails(subscribeId){
    return this.httpClient.get(this.baseUrl + `viewSubscriptionDetails`, { params: subscribeId });
  }
}
