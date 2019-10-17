import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataTransferService {
    profileDetail = new BehaviorSubject<any>(null); // change the name to something else
    private editProfileData = new BehaviorSubject<any>({});

    profileData;
    baseUrl = "http://localhost:3000/"
    constructor(
        private _http: HttpService
    ) {
    }

    
    updatedDataSelection(data) {
        this.editProfileData.next(data);
    }
    getProfileDetail() {
        return this._http.get(`${this.baseUrl}admin_details`);
    }
}

export interface IData {
}