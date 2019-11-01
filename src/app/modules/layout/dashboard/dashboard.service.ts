import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  baseUrl = "http://localhost:3000/"
  constructor( private httpClient:HttpClient) { }

  getDashboardDetails(){
    return this.httpClient.get(`${this.baseUrl}dashboard_details`);
  }
}
