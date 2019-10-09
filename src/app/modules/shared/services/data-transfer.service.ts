import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
    baseUrl="http://localhost:3000/"
    constructor(
        private _http: HttpService , private httpClient: HttpClient
    ) {
    }

  
  
    
  
    updatedDataSelection(data){
      this.editProfileData.next(data);
    }






    getProfileDetail() {
        return new Observable((observer) => {
            if (this.profileData) {
                observer.next(this.profileData);
            } else {
                this.httpClient.get(`${this.baseUrl}admin_details`).subscribe(
                    response => {
                        if (response['status'] === 200) {
                            this.profileData = response;
                            observer.next(response);
                        } else {
                            observer.next(null);
                        }
                    }, error => {
                        observer.next(null);
                    }
                );
            }
        });
    }
}
