import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AccountService } from 'src/app/modules/account/account.service';
import { HomeService } from '../../home.service';
import { POPUP_MESSAGES } from 'src/app/constant/message';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { Router } from '@angular/router';
import { onSelectFile } from 'src/app/constant/file-input';

@Component({
  selector: 'app-add-book-model',
  templateUrl: './add-book-model.component.html',
  styleUrls: ['./add-book-model.component.scss']
})
export class AddBookModelComponent implements OnInit {
  addBookForm: FormGroup;
  imageFile;
  url: string;
  addBookData: any;
  constructor(private HomeService:HomeService ,
     private  _accountService:AccountService,
     private  _utilityService : UtilityService,
     private router : Router)
   { 
     this.url = 'assets/images/avatar.png';   // for Placeholder 
    this.addBookForm = this.HomeService.createBookForm();
  }

  ngOnInit() {
  }

   /**
   * @description First upload the profile picture then edit the profile
   */

  async submit() {
    if (this.addBookForm.invalid)
      return;
    if (this.imageFile) {
      this.HomeService.uploadProfile(this.imageFile).subscribe(
        (res) => {
          console.log(res,'>>>>>');
          this.HomeService.imageUrl(res);
        }
      )
    }
    let body = { images: this.imageFile, ...this.addBookForm.value };
    this.addBookForm.disable();
    this.addBookData = this.HomeService.submit(body).subscribe(
      data => {
      },
    );
  }

  // submit() { 
  //   if (this.addBookForm.invalid) {
  //     return;
  //   }
  //   let data = {
  //      data : this.addBookForm.value,
  //     images :this.imageFile
  //   }
  //   console.log('dfghjk')
  //   this.HomeService.submit(data).subscribe(
  //     response => {
  //       if (response['statusCode'] === 200) {
  //         let data = {
  //           title: POPUP_MESSAGES.bookTitle ,
  //           message: POPUP_MESSAGES.bookSave,
  //           yes: POPUP_MESSAGES.close,
  //           isHideCancel:true,
  //           successIcon:true
  //         }
  //         this._utilityService.openDialog(data).subscribe(success => {
  //           this.router.navigate(['/account/login']);
  //         });
  //       }
  //     }, error => {
    
  //     }
     
  //   );
    
  // }

 /**
   * @description This function is called when user change profile pic. Save that file
   * @param event 
   */

  async onSelectFile(event) {
    try {
      let result = await onSelectFile(event);
      this.imageFile = result.file;
      this.url = result.url;
    } catch (err) {
      // if (err.type) {
      //   this._editProfileService.showAlert(invalidImageError());
      // } else if (err.size) {
      //   this._editProfileService.showAlert(invalidFileSize())
      // }
    }
  }



  getValidationError(control, name) {
    return this._accountService.getValidationError(control, name);
  }

  
}
