import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { UtilityService } from '../../shared/services/utility.service';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

interface FormData {
  entries(): Iterator<any>;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
    images = new BehaviorSubject('images');
  baseUrl = "http://localhost:3000/"
  
  constructor( private httpClient:HttpClient , public _formBuilder: FormBuilder , private _utilityService: UtilityService )
   { 

   }

   imageUrl(url:any){
     this.images.next(url);
     console.log(url);

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

  submit(data) {
    console.log(data ,'>>>>>>>>>>>>>')
    let body = {
      images: data.images.name,
      name: data.name,
      author: data.author,
      price: data.price,
      description: data.description
    }
 
    // delete body['email'];
    return this.httpClient.post(`${this.baseUrl}add_book`, body)
      .pipe(
        map(
          response => {
            if (response['statusCode'] === 200) {
              // this._router.navigate(['/admin/home']);
              //  this.header.getProfileDetail();   
            }
          }
        )
      )
  }
  

  
//  upload profile function
uploadProfile(images: File) {
  let formData = new FormData();
  formData.append('images', images);
  return this.httpClient.post(`${this.baseUrl}upload_image`, formData);
}

  getBookListing(){
    return this.httpClient.get(`${this.baseUrl}get_book`);
  }
}
