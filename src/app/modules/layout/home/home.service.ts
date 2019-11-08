import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { UtilityService } from '../../shared/services/utility.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { POPUP_MESSAGES, COMMON_MESSAGES } from 'src/app/constant/message';


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
)
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
         code: this._utilityService.getBookCodeControl(),
         status:this._utilityService.getDropDownFormControl(true),
      },
    );
  }

// create filter form

createFilterForm(){
  return this._formBuilder.group(
    {
       name: this._utilityService.getNameFormControl(),
       author: this._utilityService.getNameFormControl(),
       price: this._utilityService.getPriceFormControl()
    },
  );
}
  
//  upload profile function
uploadProfile(images: File) {
  let formData = new FormData();
  formData.append('images', images);
  return this.httpClient.post(`${this.baseUrl}upload_image`, formData);
}


  getBookListing(data) {
     data.page = data.page - 1;
    return this.httpClient.get<any>(this.baseUrl + `get_book`, { params: data });
  }

  getUserDetails(userId){
console.log(userId);
return this.httpClient.get<any>(this.baseUrl + `books_details`, { params: userId });
  }
 
  //  function for deleted admin panel

  changeStatus(body){
    const status = body.status;
    const data = {
        title: POPUP_MESSAGES.confrim,
        message: COMMON_MESSAGES[status].confirm('Book'),
        yes: 'Yes',
        isHideCancel: false,
        no: 'No',
        showTextBox:status!='ACTIVE'
    }
    return new Observable((observer) => {
    this._utilityService.openDialog(data).subscribe(success => {
      if (success != undefined && success != null) {
          delete body['status'];
          this.httpClient.delete(this.baseUrl + `delete_book`, {params : body}).subscribe(
            response =>{
              if(response['statusCode'] === 200){
        
                this._utilityService.showAlert(COMMON_MESSAGES[status].success('Books'));
                observer.next(response);
              }
              else{
                observer.next(null);
              }         
   })
  }
})
    })
  }

  //  function for active and block for admin panel

  changeStatusActive(body){
    const status = body.status;
    const data = {
        title: POPUP_MESSAGES.confrim,
        message: COMMON_MESSAGES[status].confirm('Book'),
        yes: 'Yes',
        isHideCancel: false,
        no: 'No',
        showTextBox:status!='ACTIVE'
    }
    return new Observable((observer) => {
    this._utilityService.openDialog(data).subscribe(success => {
      if (success != undefined && success != null) {
          // delete body['status'];
          this.httpClient.put(this.baseUrl +`active_block_books`,body).subscribe(
            response =>{
              if(response['statusCode'] === 200){
                this._utilityService.showAlert(COMMON_MESSAGES[status].success('Books'));
                observer.next(response);
              }
              else{
                observer.next(null);
              }         
   })
  }
})
    })
  }
}