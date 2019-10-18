import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AccountService } from 'src/app/modules/account/account.service';
import { HomeService } from '../../home.service';
import { POPUP_MESSAGES } from 'src/app/constant/message';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book-model',
  templateUrl: './add-book-model.component.html',
  styleUrls: ['./add-book-model.component.scss']
})
export class AddBookModelComponent implements OnInit {
  addBookForm: FormGroup;

  constructor(private HomeService:HomeService ,
     private  _accountService:AccountService,
     private  _utilityService : UtilityService,
     private router : Router)
   { 
    this.addBookForm = this.HomeService.createBookForm();
  }

  ngOnInit() {
  }

  submit() {
    if (this.addBookForm.invalid) {
      return;
    }
    this.HomeService.submit(this.addBookForm.value).subscribe(
      response => {
        if (response['statusCode'] === 200) {
          let data = {
            title: POPUP_MESSAGES.bookTitle ,
            message: POPUP_MESSAGES.bookSave,
            yes: POPUP_MESSAGES.close,
            isHideCancel:true,
            successIcon:true
          }
          this._utilityService.openDialog(data).subscribe(success => {
            // this.router.navigate(['/account/login']);
          });
        }
      }, error => {
        // this.router.navigate(['/account/login']);
        // if (error.error.statusCode === 400 && error.error.responseType === 'INVALID_TOKEN') {
        //   this.router.navigate(['link-expired']);
        // }
      }
     
    );
    
  }

  getValidationError(control, name) {
    return this._accountService.getValidationError(control, name);
  }

  
}
