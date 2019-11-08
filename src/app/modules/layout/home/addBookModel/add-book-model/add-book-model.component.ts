import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AccountService } from 'src/app/modules/account/account.service';
import { HomeService } from '../../home.service';
import { POPUP_MESSAGES, invalidImageError, invalidFileSize } from 'src/app/constant/message';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { onSelectFile } from 'src/app/constant/file-input';
import { AddBookModelService } from './add-book-model.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-add-book-model',
  templateUrl: './add-book-model.component.html',
  styleUrls: ['./add-book-model.component.scss']
})
export class AddBookModelComponent implements OnInit {
  addBookForm: FormGroup;
  imageFile;
  url: any;
  addBookData: any;
  logoError: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<AddBookModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private HomeService: HomeService,
    private _accountService: AccountService,
    private addBookService: AddBookModelService,
    private _utilityService:UtilityService
  ) {
    this.addBookForm = this.HomeService.createBookForm();
  }

  ngOnInit() {
    if (this.data) {
      console.log(this.data);
      if (this.data.images) {
        this.url= [this.data.images];
      }
      this.addBookForm.patchValue({
     name : this.data.name,
     author : this.data.author,
     price : this.data.price,
     description: this.data.description,
     code : this.data.code,
     status: this.data.status
      })
    }
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
           this._utilityService.openDialog(data).subscribe(response => {
             if (response) {
              this._utilityService.showAlert(this.data ? 'UPDATED' : 'ADDED');
              this.dialogRef.close(body);
            } else {
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
