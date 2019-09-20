import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signForm:FormGroup;

  constructor( private _router: Router,   private _accountService:AccountService,private router:Router) 
  {
    this.signForm = this._accountService.createSignUpForm();
   }

  ngOnInit() {
  }

  signup() {
    if(this.signForm.invalid) {
      return;
    }
    this._accountService.signup(this.signForm.value).subscribe(console.log);
    this.router.navigate(['/account/login/']);

  }

  getValidationError(control,name) {
    return this._accountService.getValidationError(control,name);
  }

}
