import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataTransferService {
    profileDetail = new BehaviorSubject<any>(null);
    private editProfileData = new BehaviorSubject<any>({});
    data = this.editProfileData.asObservable();
    profileData;
    baseUrl = "http://localhost:3000/"
    constructor(
        private _http: HttpService, private httpClient: HttpClient
    ) {
    }

    updatedDataSelection(data) {
        this.editProfileData.next(data);
    }
    getProfileDetail() {
        return this.httpClient.get(`${this.baseUrl}admin_details`)
    }
}

export interface IData {
}