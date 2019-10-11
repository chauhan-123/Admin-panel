import { Injectable  } from '@angular/core';
import { FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilityService } from '../../modules/shared/services/utility.service';
import { HttpService } from '../shared/services/http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataTransferService } from '../shared/services/data-transfer.service';
import { HeaderComponent } from '../layout/header/header.component';
import {ADMIN_URL} from '../../constant/url';
import { JwtHelper, tokenNotExpired } from "angular2-jwt";
interface FormData {
  entries(): Iterator<any>;
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  // svcRenderer: Renderer2;
  loader: boolean = false;

  baseUrl = "http://localhost:3000/"
  subscribe: any;

  constructor(private _formBuilder: FormBuilder, private _router: Router, private _utilityService: UtilityService,
    private http: HttpService, private httpclient: HttpClient, private router: Router, private token: SharedModule,
    private _dataService: DataTransferService , private header : HeaderComponent
  ) { }


  /* 
   Method For Creating Edit Profile Form
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
        password: this._utilityService.getPasswordFormControl()
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
        // confirmPassword:this._utilityService.getPasswordFormControl()  
      },
      {
        // validator: this.matchPassword
      }
    );
  }


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

  isLoggedIn() {
    // return tokenNotExpired(); // exactly what we did below, provided by angular

    let jwt = new JwtHelper();

    let token = localStorage.getItem("login");
    console.log(token,'>>>>>>>>>>>>>>>>>>>>>>>>')
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
    this.httpclient.post(`${this.baseUrl}login`, data).subscribe(response => {
      if (response['status'] === 200) {
        localStorage.setItem('login', response['token']);
        localStorage.setItem('_id', response['id']);
        localStorage.setItem('admin-name', response['firstName']);
        localStorage.setItem('admin-email', response['email']);
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
    console.log(data);
    return this.http.post(`${this.baseUrl}registration`, data);
  }


  resetPassword(data) {
    data = this._utilityService.trim(data);

    /* this method is used for decoded the token
    
    
      let jwtData = data['token'].split('.')[1]
    let decodedJwtJsonData = window.atob(jwtData)
    let decodedJwtData = JSON.parse(decodedJwtJsonData)
    let isAdmin = decodedJwtData.admin
    console.log('jwtData: ' + jwtData)
    console.log('decodedJwtJsonData: ' + decodedJwtJsonData)
    console.log('decodedJwtData: ' + decodedJwtData)
    console.log('Is admin: ' + isAdmin)
    */
    this.http.post(`${this.baseUrl}reset`, data).subscribe(
      response => {
        if (response['status'] === 200) {
          this.router.navigate(['/account/login']);
        }
      }, error => {
        if (error.error.status === 400 && error.error.responseType === 'INVALID_TOKEN') {
          this.router.navigate(['link-expired']);
        }
      }
    )
  }

  changePassword(data) {
    data = this._utilityService.trim(data);
    this.http.post(`${this.baseUrl}changePassword`, data).subscribe(
      response => {
        if (response['status'] === 200) {
          this.router.navigate(['../admin']);
        }
      }, error => {
        if (error.error.status === 400 && error.error.responseType === 'INVALID_TOKEN') {
          this.router.navigate(['link-expired']);
        }
      }
    )
  }



  uploadProfile(images: File) {
    this.loader = true;
    let formData = new FormData();
    formData.append('images', images);
    // formData.append('data', JSON.stringify(images));
    return this.httpclient.post(`${this.baseUrl}upload`, formData);
  }


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
    return this.httpclient.put(`${this.baseUrl}edit_profile`, body)
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

  /**
    * @description Getting Admin Profile Detail
    */
  getProfileDetail() {
    return this._dataService.getProfileDetail();
  }


  checkEmail(data) {
    data = this._utilityService.trim(data);
    this.httpclient.post(`${this.baseUrl}forgot`, data).subscribe();
    this._router.navigate(['/account/login']);
  }


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
