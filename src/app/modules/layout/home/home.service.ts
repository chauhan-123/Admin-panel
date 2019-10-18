import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { UtilityService } from '../../shared/services/utility.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl = "http://localhost:3000/"
  
  constructor( private httpClient:HttpClient , public _formBuilder: FormBuilder , private _utilityService: UtilityService ) { }
 
   // create book form
   createBookForm(){
    return this._formBuilder.group(
      {
         name: this._utilityService.getNameFormControl(),
         author: this._utilityService.getNameFormControl(),
        description: this._utilityService.getDescriptionFormControl(),
         price: this._utilityService.getPriceFormControl(),
         image : this._utilityService.getImageControl()
      },
      {

      }
    );
  }

  submit(data){
    return this.httpClient.post(`${this.baseUrl}add_book` , data);
  }

  getBookListing(){
    return this.httpClient.get(`${this.baseUrl}get_book`);
  }
}
