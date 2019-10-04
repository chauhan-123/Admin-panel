import { Injectable } from '@angular/core';
import { FormBuilder,FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import {UtilityService} from '../../modules/shared/services/utility.service';
// import { ADMIN_URL } from 'src/app/constant/url';
import { HttpService } from '../shared/services/http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { Observable, of } from 'rxjs';

interface FormData {
  entries(): Iterator<any>;
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  baseUrl="http://localhost:3000/"
  subscribe:any;
  // Observable:any;

  constructor(private _formBuilder: FormBuilder, private _router: Router,private _utilityService:UtilityService,
    private http:HttpService, private httpclient:HttpClient, private router:Router, private token:SharedModule
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


createResetForm() {
  return this._formBuilder.group(
    {
      password:this._utilityService.getPasswordFormControl(),
      confirmPassword:this._utilityService.getPasswordFormControl()  
    },
    {
      validator: this.matchPassword
    }
  )
}


createForgotForm() {
  return this._formBuilder.group(
    {
      email:this._utilityService.getEmailFormControl() 
    }
  )
}

createChangePasswordForm(){
  return this._formBuilder.group(
    { 
      oldPassword:this._utilityService.getPasswordFormControl(),
      password:this._utilityService.getPasswordFormControl(),
      confirmPassword:this._utilityService.getPasswordFormControl()  
    },
    {
      validator: this.matchPassword
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
     if(response['status']===200) {
      //  var token = response['token'];
    
        localStorage.setItem('login',response['token']);
  
         localStorage.setItem('_id',response['id']);
         localStorage.setItem('admin-name',response['firstName']);
         localStorage.setItem('admin-email',response['email']);
         this.router.navigate(['/admin/home'])
         this._utilityService.openSnackBar('you are successfully login',true)
      }
      
    },error =>{

    }
    );
    
  };

  // response =>{
      // console.log(response)
 
    // },error => {
      
    // })

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
  //        localStorage.setItem('user-token',response['data']['token']);
  //       localStorage.setItem('_id',response['data']['_id']);
  //      localStorage.setItem('admin-name',response['data']['name']);
  //      this._router.navigate(['admin/reports']);
  //      }
  //   },error => { }
  // )
}


resetPassword(data) {
  data = this._utilityService.trim(data);
  console.log(data['token'],'data123')
//   let jwtData = data['token'].split('.')[1]
// let decodedJwtJsonData = window.atob(jwtData)
// let decodedJwtData = JSON.parse(decodedJwtJsonData)

// let isAdmin = decodedJwtData.admin

// console.log('jwtData: ' + jwtData)
// console.log('decodedJwtJsonData: ' + decodedJwtJsonData)
// console.log('decodedJwtData: ' + decodedJwtData)
// console.log('Is admin: ' + isAdmin)
  this.http.post(`${this.baseUrl}reset`,data).subscribe(
     response =>{
      if(response['status']===200) {
     this.router.navigate(['/account/login']); 
      }
    },error => {
      if(error.error.status===400&&error.error.responseType==='INVALID_TOKEN') {
        this.router.navigate(['link-expired']);
      }
      
     }
   )
}

changePassword(data){
  
  data = this._utilityService.trim(data);
  console.log(data,'data123');
  this.http.post(`${this.baseUrl}changePassword`,data).subscribe(
    response =>{
     if(response['status']===200) {
   
     this.router.navigate(['../admin']); 
     }
   },error => {
     if(error.error.status===400&&error.error.responseType==='INVALID_TOKEN') {
       this.router.navigate(['link-expired']);
     }
     
    }
  )
}



editProfile(images:File){
      let formData = new FormData();
      formData.append('images', images );
      // formData.append('data', JSON.stringify(images));
    return this.httpclient.post(`${this.baseUrl}upload`, formData);
  




}


checkEmail(data) {
  data = this._utilityService.trim(data);
  this.httpclient.post(`${this.baseUrl}forgot`,data).subscribe();
  this._router.navigate(['/account/login']);
}


matchPassword(form: AbstractControl) {
  let password = form.get('password').value; 
  let confirmPassword = form.get('confirmPassword').value;
  if (password !== confirmPassword) {
    form.get('confirmPassword').setErrors({ matchPassword: true })    
  } else {
    if(password === confirmPassword) {
      // delete form.get('confirmPassword').errors['matchPassword'];
      let keys = Object.keys(form.get('confirmPassword').errors);
      if(keys.length===0) {
        form.get('confirmPassword').setErrors(null);
      }
    }
    
  }
}

getValidationError(control:FormControl,name) {
  return ''
}
  

// showAlert(status) {
//   this._utilityService.showAlert(COMMON_MESSAGES[status]('Subscription'));
// }

}
