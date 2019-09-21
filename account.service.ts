import { Injectable } from '@angular/core';
import { FormBuilder,FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import {UtilityService} from '../../modules/shared/services/utility.service';
// import { ADMIN_URL } from 'src/app/constant/url';
import {environment} from '../../../environments/environment';
// import { HttpService } from '../shared/services/http.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl="http://localhost:3002/"
  // http://localhost:3002/registration
  subscribe:any;
  // Observable:any;

  constructor(private _formBuilder: FormBuilder, private _router: Router,private _utilityService:UtilityService,
     private http:HttpClient
    ) { }

  /* 
      Method For Creating Login Form
  */
 createLoginForm() {
  return this._formBuilder.group(
    {
      email:this._utilityService.getEmailFormControl(), 
      password:this._utilityService.getPasswordFormControl()
    }
  ) 
}


  /* 
      Method For Creating Registration Form
  */
 createSignUpForm() {
  return this._formBuilder.group(
    {
      name:this._utilityService.getNameFormControl(),
      email:this._utilityService.getEmailFormControl(), 
      address:this._utilityService.getLocationFormControl(),
      termsAndCondition:[true],
      password:this._utilityService.getPasswordFormControl(),
      confirmPassword:this._utilityService.getPasswordFormControl()  
    },
    {
      // validator: this.matchPassword
    }
  );
}

createForgotForm(){

}



 /*  
      Method For Login
  */
 login(data) {
  data = this._utilityService.trim(data);
  //  this.http.post(ADMIN_URL.login,data).subscribe(
  //   response =>{
  //     console.log(response)
  //     // if(response['statusCode']===200) {
  //     //   localStorage.setItem('super-she-admin-token',response['data']['token']);
  //     //   localStorage.setItem('_id',response['data']['_id']);
  //     //   localStorage.setItem('admin-name',response['data']['name']);
  //     //   localStorage.setItem('image',response['data']['image']);;
  //     //   this._router.navigate(['admin/reports']);
  //     // }
  //   },error => {
      
  //   }
  // )
}

// method for signup

signup(data) { 
  console.log(data,'aa rha h nhai data....')
  data = this._utilityService.trim(data);
  // this.http.post("http://127.0.0.1:3002/signup",data);
  // return this.http.post(`${environment}`, data);
  // this.httpclient.post('http://localhost:3002/registration', data); 
  return this.http.post(`${this.baseUrl}registration`, data)
  
    // response =>{
      // console.log(response)
      // if(response['statusCode']===200) {
      //    localStorage.setItem('user-token',response['data']['token']);
      //   localStorage.setItem('_id',response['data']['_id']);
      //  localStorage.setItem('admin-name',response['data']['name']);
      //  this._router.navigate(['admin/reports']);
      //  }
    // },error => {
      
    // }
  // )
}

checkEmail(data){

}

getValidationError(control:FormControl,name) {
  return ''
}

}
