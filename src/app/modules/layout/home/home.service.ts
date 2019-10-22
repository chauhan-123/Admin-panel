import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { UtilityService } from '../../shared/services/utility.service';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { jsonpFactory } from '@angular/http/src/http_module';

interface FormData {
  entries(): Iterator<any>;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
    images = new BehaviorSubject('images');
  baseUrl = "http://localhost:3000/"
  
  constructor( private httpClient:HttpClient , public _formBuilder: FormBuilder , private _utilityService: UtilityService,
    private _router:Router )
   { 

   }

   imageUrl(url:any){
     this.images.next(url);
   }
 
   // create book form
   createBookForm(){
    return this._formBuilder.group(
      {
         name: this._utilityService.getNameFormControl(),
         author: this._utilityService.getNameFormControl(),
        description: this._utilityService.getDescriptionFormControl(),
         price: this._utilityService.getPriceFormControl(),
    
      },
      {

      }
    );
  }



  
//  upload profile function
uploadProfile(images: File) {
  let formData = new FormData();
  formData.append('images', images);
  return this.httpClient.post(`${this.baseUrl}upload_image`, formData);
}

  // getBookListing(data){
  //   console.log(data , '---------------------')
  //   return this.httpClient.get(`${this.baseUrl}get_book`, data);
  // }

  getBookListing(data) {
     data.page = data.page - 1;
    return this.httpClient.get<any>(this.baseUrl + `get_book`, { params: data });
  }
            // response => {
            //     if (response['statusCode'] === 200) {
            //         observer.next(response);
            //     } else {
            //         observer.next(null);
            //     }
            // }, error => {
            //     observer.next(null);
            // }
        // )
    
    // );
}


// }
