import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UtilityService } from '../../shared/services/utility.service';
import { DataTransferService } from '../../shared/services/data-transfer.service';
import { HeaderComponent } from '../layout parts/header/header.component';
import { HttpService } from '../../shared/services/http.service';

interface FormData {
  entries(): Iterator<any>;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = "http://localhost:3000/"
  loader: boolean = false
  constructor(private header:HeaderComponent , private httpclient:HttpClient , private _router:Router , private _utilityService:UtilityService ,
    private _dataService:DataTransferService , private http:HttpService) { }

  /* 
      Method For Edit Profile
  */
 editProfile(data) {
  let body = {
    images: data.images.name,
    firstName: data.firstName,
    email: data.email
  }
  // delete body['email'];
  return this.http.put(`${this.baseUrl}edit_profile`, body)
    .pipe(
      map(
        response => {
          if (response['statusCode'] === 200) {
            this._router.navigate(['/admin/home']);
             this.header.getProfileDetail();   
          }
        }
      )
    )
}

//  change password function for admin panel
changePassword(data) {
  data = this._utilityService.trim(data);
  this.http.post(`${this.baseUrl}changePassword`, data).subscribe(
    response => {
      if (response['statusCode'] === 200) {
         this._router.navigate(['../admin']);
      }
    }, error => {
      if (error.error.statusCode === 400 && error.error.responseType === 'INVALID_TOKEN') {
        this._router.navigate(['link-expired']);
      }
    }
  )
}

//  upload profile function
uploadProfile(images: File) {
  this.loader = true;
  let formData = new FormData();
  formData.append('images', images);
  // formData.append('data', JSON.stringify(images));
  return this.httpclient.post(`${this.baseUrl}upload`, formData);
}


// /**
//   * @description Getting Admin Profile Detail
//   */
getProfileDetail() {
  return this._dataService.getProfileDetail();
}

}
