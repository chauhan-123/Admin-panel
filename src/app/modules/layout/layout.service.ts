import { Injectable, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from '../shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  baseUrl = "http://localhost:3000/"
  menuState = new BehaviorSubject(false);
  constructor( private _http:HttpService ) { }

  changeMenuState(state: boolean) {
    this.menuState.next(state);
  }


  // notification api for get data
  getNotificationData(){
    return this._http.get(`${this.baseUrl}get_notification`);
  }
}
