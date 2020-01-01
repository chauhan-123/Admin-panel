import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AccountService } from 'src/app/modules/account/account.service';
import { DataTransferService } from 'src/app/modules/shared/services/data-transfer.service';
import { onSelectFile } from '../../../../../constant/file-input';
import { AdminService } from '../../admin.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { invalidImageError, invalidFileSize } from 'src/app/constant/message';


interface FormData {
  entries(): Iterator<any>;
}

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  profilePicURL: string;
  editProfileForm: FormGroup;
  minDateOfBirth = new Date();
  editProfileSubscription;
  loader: boolean = false;
  imageFile;
  profileDetail: any;
  constructor(
    private accountService: AccountService,
    private _dataService: DataTransferService,
    private _utilityService:UtilityService,
    private _adminService:AdminService
  ) {
    this.editProfileForm = this.accountService.createEditProfileForm();
  }

  ngOnInit() {
    this.getProfileDetail();
  }

  /**
   * @description Getting Admin Profile Detail
   */

  getProfileDetail() {
    this._dataService.getProfileDetail()
      .subscribe(
        (response: any) => {
          this.profileDetail = response.data;
          this.editProfileForm.patchValue({
            firstName: this.profileDetail.firstName,
            email: this.profileDetail.email,
            
          })
          this.profileDetail.image =  `data:image/jpeg;base64,${this.profileDetail['url']}`;
        }
      )
  }

  /**
 * @description Getting controls of editProfileForm
 * @param name 
 */

  getValidationError(control, name) {
    return this.accountService.getValidationError(control, name);
  }

  /**
   * @description This function is called when user change profile pic. Save that file
   * @param event 
   */

  async onSelectFile(event) {
    try {
      let result = await onSelectFile(event);
      this.imageFile = result.file;
      this.profilePicURL = result.url;
      this.profileDetail.image = result.url;
    } catch (err) {
      if (err.type) {
        this._utilityService.showAlert(invalidImageError());
     } else if (err.size) {
       this._utilityService.showAlert(invalidFileSize())
     }
   }
  }

  /**
   * @description First upload the profile picture then edit the profile
   */

  async editProfile() {
    if (this.editProfileForm.invalid)
      return;
    if (this.imageFile) {
      this.loader = true;
      this._adminService.uploadProfile(this.imageFile).subscribe(
        (res) => {
          this.profileDetail.image = `data:image/jpeg;base64,${res['files'][0]}`;
          this._dataService.updatedDataSelection(this.profileDetail.image)
        }
      )
    }
    let body = { images: this.imageFile, ...this.editProfileForm.value };
    this.editProfileForm.disable();
    this.editProfileSubscription = this._adminService.editProfile(body).subscribe(
      data => {
      },
    );
  }

  // onRemoveFileHandler(data){

  // }

  ngOnDestroy() {
    if (this.editProfileSubscription)
      this.editProfileSubscription.unsubscribe();
  }

}


















