import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  baseUrl = "http://localhost:3000/"
  constructor( private _http:HttpService) { }

  cashOnDelivery(data){
return this._http.post(`${this.baseUrl}cashOnDelivery` , data);
  }
}
