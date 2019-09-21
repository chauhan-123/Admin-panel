import { Injectable } from '@angular/core';
import { FormBuilder,FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import {UtilityService} from '../../modules/shared/services/utility.service';
import { ADMIN_URL } from 'src/app/constant/url';
import { HttpService } from '../shared/services/http.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  baseUrl="http://localhost:3002/"
  subscribe:any;
  // Observable:any;

  constructor(private _formBuilder: FormBuilder, private _router: Router,private _utilityService:UtilityService,
    private http:HttpService, private httpclient:HttpClient, private router:Router
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
      firstName:this._utilityService.getNameFormControl(),
      email:this._utilityService.getEmailFormControl(), 
      phone:this._utilityService.getPhoneFormControl(),
      // status:
      address:this._utilityService.getLocationFormControl(),
      termsAndCondition:[true],
      password:this._utilityService.getPasswordFormControl(),
      // confirmPassword:this._utilityService.getPasswordFormControl()  
    },
    {
      // validator: this.matchPassword
    }
  );
}

createForgotForm() {
  return this._formBuilder.group(
    {
      email:this._utilityService.getEmailFormControl() 
    }
  )
}



 /*  
      Method For Login
  */
 login(data) {
  data = this._utilityService.trim(data);
  console.log(data,'outside');
  this.httpclient.post(`${this.baseUrl}login`,data).subscribe(response =>{
  console.log(response,'inside');
  //  this._router.navigate(['/admin/home']);
  });

  // response =>{
      // console.log(response)
      // if(response['statusCode']===200) {
      //   localStorage.setItem('login',response['data']['token']);
      //   localStorage.setItem('_id',response['data']['_id']);
      //   localStorage.setItem('admin-name',response['data']['name']);
      //   this.router.navigate(['/admin/home'])
 
      //   // 
      // }
    // },error => {
      
    // })
}

// method for signup

signup(data) {
  data = this._utilityService.trim(data);
  console.log(data);
  return this.http.post(`${this.baseUrl}registration`, data);
 
  

  // this.httpclient.post('http://localhost:3002/registration', data); 
  // this.http.post("http://127.0.0.1:3000/signup",{data}).subscribe(
  //   response =>{
  //     console.log(response)
  //     if(response['statusCode']===200) {
      //    localStorage.setItem('user-token',response['data']['token']);
      //   localStorage.setItem('_id',response['data']['_id']);
      //  localStorage.setItem('admin-name',response['data']['name']);
      //  this._router.navigate(['admin/reports']);
      //  }
  //   },error => {
      
  //   }
  // )
}

checkEmail(data) {
  data = this._utilityService.trim(data);
  this.httpclient.post(`${this.baseUrl}forgot`,data).subscribe();
  this._router.navigate(['/account/login']);
  // this.httpclient.post(,data).subscribe(
    // response =>{
    //   if(response['statusCode']===200) {
    //     let data = {
    //       title: POPUP_MESSAGES.passwordResetTitle ,
    //       message: POPUP_MESSAGES.passwordResetLink,
    //       yes: POPUP_MESSAGES.close,
    //       isHideCancel:true,
    //       successIcon:true
    //     }
    //    this._utilityService.openDialog(data).subscribe(success => {
    //       this._router.navigate(['/account/login']);
    //     });
    //   }
    // },error => {
      
    // }
  // )
}


getValidationError(control:FormControl,name) {
  return ''
}
  

// showAlert(status) {
//   this._utilityService.showAlert(COMMON_MESSAGES[status]('Subscription'));
// }

}
