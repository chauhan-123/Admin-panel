import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AccountService } from 'src/app/modules/account/account.service';
import { HomeService } from '../../home.service';
import { POPUP_MESSAGES, invalidImageError, invalidFileSize } from 'src/app/constant/message';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { Router } from '@angular/router';
import { onSelectFile } from 'src/app/constant/file-input';
import { AddBookModelService } from './add-book-model.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HomeComponent } from '../../home.component';
import { HeaderComponent } from '../../../layout parts/header/header.component';

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
  logoError: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<AddBookModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private HomeService: HomeService,
    private _accountService: AccountService,
    private addBookService: AddBookModelService,
    // public home : HomeComponent,
    private _utilityService:UtilityService


  ) {
    // this.url = 'assets/images/avatar.png';   // for Placeholder 
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
          this.HomeService.imageUrl(res);
        }
      )
    }
    let body = { images: this.url, ...this.addBookForm.value };
    this.addBookForm.disable();
     this.addBookService.submit(body).subscribe(
      response => {
        console.log(response);
        if (response['statusCode'] == 200) {
            let data = {
              title: POPUP_MESSAGES.bookTitle ,
              message: POPUP_MESSAGES.bookSave,
              yes: POPUP_MESSAGES.close,
              isHideCancel:true,
              successIcon:true
            }
           this._utilityService.openDialog(data).subscribe(success => {
             console.log(success);
             if(success){
               this.dialogRef.close();
             }
            }); 
        }
      },
    );
    
  }

  /**
    * @description This function is called when user change profile pic. Save that file
    * @param event 
    */

  async onSelectFile(event) {
    try {
      let result = await onSelectFile(event);
      this.imageFile = result.file;
      console.log(this.imageFile.name,'-------')
      this.url = result.url;
      this.logoError = false;
    } catch (err) {
      console.log(err.type)
     if (err.type) {
       this._utilityService.showAlert(invalidImageError());
    } else if (err.size) {
      this._utilityService.showAlert(invalidFileSize())
    }
  }
  }



  getValidationError(control, name) {
    return this._accountService.getValidationError(control, name);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
