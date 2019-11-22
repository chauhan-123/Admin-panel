import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  baseUrl = "http://localhost:3000/"
  constructor( private _http:HttpService, private httpClient:HttpClient) { }


  // cash on delivery method
  cashOnDelivery(data){
return this._http.post(`${this.baseUrl}cashOnDelivery` , data);
  }

  //  search button method for get the data all pincode     
  searchButtonData(data){
    console.log(data.pincode)
    return this.httpClient.get(this.baseUrl + `getPincodeData`, { params: data });
  }
}
