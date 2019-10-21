import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AccountService } from 'src/app/modules/account/account.service';
import { HomeService } from '../../home.service';
import { POPUP_MESSAGES } from 'src/app/constant/message';
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

  constructor(
    private dialogRef: MatDialogRef<AddBookModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private HomeService:HomeService ,
     private  _accountService:AccountService,
     private  _utilityService : UtilityService,
     private router : Router,
     private addBookService :AddBookModelService,


)
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
          this.HomeService.imageUrl(res);
        }
      )
    }
    let body = { images: this.url, ...this.addBookForm.value };
    this.addBookForm.disable();
    this.addBookData = this.addBookService.submit(body).subscribe(
      response => {

   
      },
    );
    this.dialogRef.close( );

    

  }


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

    }
  }



  getValidationError(control, name) {
    return this._accountService.getValidationError(control, name);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
