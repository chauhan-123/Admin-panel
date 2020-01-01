import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilityService } from '../../modules/shared/services/utility.service';
import { HttpService } from '../shared/services/http.service';
import { HttpClient } from '@angular/common/http';
import { JwtHelper } from "angular2-jwt";
import { BehaviorSubject } from 'rxjs';
import { POPUP_MESSAGES } from 'src/app/constant/message';

interface FormData {
  entries(): Iterator<any>;
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  sendtoken = new BehaviorSubject<any>(null);
  loader: boolean = false
  baseUrl = "http://localhost:3000/"
  subscribe: any;

  constructor(private _formBuilder: FormBuilder, private _utilityService: UtilityService,
    private http: HttpService,
    private httpclient: HttpClient, private router: Router
  ) {
  }


  /* 
  //  Method For Creating Edit Profile Form
*/
  createEditProfileForm() {
    return this._formBuilder.group(
      {
        firstName: this._utilityService.getNameFormControl(),
        email: this._utilityService.getEmailFormControl()
      }
    )
  }

  /* 
      Method For Creating Login Form
  */
  createLoginForm() {
    return this._formBuilder.group(
      {
        email: this._utilityService.getEmailFormControl(),
        password: this._utilityService.getPasswordFormControl(),
      }
    )
  }

  // Method for create token form
  createVerifyTokenForm() {
    return this._formBuilder.group(
      {
        otp: this._utilityService.getVerifyControl()
      }
    )
  }


  /* 
      Method For Creating Registration Form
  */
  createSignUpForm() {
    return this._formBuilder.group(
      {
        firstName: this._utilityService.getNameFormControl(),
        email: this._utilityService.getEmailFormControl(),
        phone: this._utilityService.getPhoneFormControl(),
        address: this._utilityService.getLocationFormControl(),
        termsAndCondition: [true],
        password: this._utilityService.getPasswordFormControl(),
      },
      {
      }
    );
  }

// reset password form
  createResetForm() {
    return this._formBuilder.group(
      {
        password: this._utilityService.getPasswordFormControl(),
        confirmPassword: this._utilityService.getPasswordFormControl()
      },
      {
        validator: this.matchPassword
      }
    )
  }

  createForgotForm() {
    return this._formBuilder.group(
      {
        email: this._utilityService.getEmailFormControl()
      }
    )
  }

  // create password form
  createChangePasswordForm() {
    return this._formBuilder.group(
      {
        oldPassword: this._utilityService.getPasswordFormControl(),
        password: this._utilityService.getPasswordFormControl(),
        confirmPassword: this._utilityService.getPasswordFormControl()
      },
      {
        validator: this.matchPassword
      }
    )
  }

  // method for cashondeliveryForm
  createCashOnDeliveryForm(){
    return this._formBuilder.group(
      {
        firstName: this._utilityService.getNameFormControl(),
        email: this._utilityService.getEmailFormControl(),
        phone: this._utilityService.getPhoneFormControl(),
        address: this._utilityService.getLocationFormControl(),
        // pincode: this._utilityService.getPincodeControl(),
        country: this._utilityService.getNameFormControl(),
        state: this._utilityService.getNameFormControl(),
        city: this._utilityService.getNameFormControl(),
      },
      {
      }
    );
  }

  // method for creating pincode Form
  createPincodeForm(){
    return this._formBuilder.group(
      {
        pincode: this._utilityService.getPincodeControl(),
      })
  }

  isLoggedIn() {
    // return tokenNotExpired(); // exactly what we did below, provided by angular
    let jwt = new JwtHelper();
    let token = localStorage.getItem("login");
    if (!token) return false;
    let date = jwt.getTokenExpirationDate(token);
    let isExpired = jwt.isTokenExpired(token);
    return !isExpired;
  }

  /*  
       Method For Login
   */
  login(data) {
    data = this._utilityService.trim(data);
    data.role = 'admin';
    this.http.post(`${this.baseUrl}login`, data).subscribe(response => {
      if (response['statusCode'] === 200) {
        localStorage.setItem('login', response['result']['token']);
        localStorage.setItem('_id', response['result']['_id']);
        localStorage.setItem('admin-name', response['result']['firstName']);
        localStorage.setItem('admin-email', response['result']['email']);
        this.router.navigate(['/admin/home'])
        this._utilityService.openSnackBar('you are successfully login', true);
      }
    },
      error => {  
      }
    );
  };

  // method for signup

  signup(data) {
    data = this._utilityService.trim(data);
    data.role = 'admin';
    return this.http.post(`${this.baseUrl}registration`, data);
  }

  // method for verify token
  verify(data, sendtoken) {
    var sendToken = {
      data: data,
      sendtoken: sendtoken
    }
    return this.http.post(`${this.baseUrl}verify-otp`, sendToken);
  }

  // method for reset password
  resetPassword(data) {
    data = this._utilityService.trim(data);
    /* this method is used for decoded the token
      let jwtData = data['token'].split('.')[1]
    let decodedJwtJsonData = window.atob(jwtData)
    let decodedJwtData = JSON.parse(decodedJwtJsonData)
    let isAdmin = decodedJwtData.admin
    */
    this.http.post(`${this.baseUrl}reset-password`, data).subscribe(
      response => {
        if (response['statusCode'] === 200) {
          let data = {
            title: POPUP_MESSAGES.passwordResetTitle ,
            message: POPUP_MESSAGES.passwordChanged,
            yes: POPUP_MESSAGES.close,
            isHideCancel:true,
            successIcon:true
          }
          this._utilityService.openDialog(data).subscribe(success => {
            this.router.navigate(['/account/login']);
          });
        }
      }, error => {
        this.router.navigate(['/account/login']);
        if (error.error.statusCode === 400 && error.error.responseType === 'INVALID_TOKEN') {
          this.router.navigate(['link-expired']);
        }
      }
    )
  }

  // forgot password 
  checkEmail(data) {
    data = this._utilityService.trim(data);
    this.http.post(`${this.baseUrl}forgot-password`, data).subscribe(
      response =>{
        if(response['statusCode']===200) {
          let data = {
            title: POPUP_MESSAGES.passwordResetTitle ,
            message: POPUP_MESSAGES.passwordResetLink,
            yes: POPUP_MESSAGES.close,
            isHideCancel:true,
            successIcon:true
          }
         this._utilityService.openDialog(data).subscribe(success => {
            this.router.navigate(['/account/login']);
          });
        }
      },error => {
        }
    )

  }

  //  password match function 
  matchPassword(form: AbstractControl) {
    let password = form.get('password').value;
    let confirmPassword = form.get('confirmPassword').value;
    if (password !== confirmPassword) {
      form.get('confirmPassword').setErrors({ matchPassword: true })
    } else {
      if (password === confirmPassword) {
        // delete form.get('confirmPassword').errors['matchPassword'];
        let keys = Object.keys(form.get('confirmPassword').errors);
        if (keys.length === 0) {
          form.get('confirmPassword').setErrors(null);
        }
      }
    }
  }

  getValidationError(control: FormControl, name) {
    return ''
  }
  // showAlert(status) {
  //   this._utilityService.showAlert(COMMON_MESSAGES[status]('Subscription'));
  // }

}
