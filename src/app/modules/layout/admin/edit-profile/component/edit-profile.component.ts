import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AccountService } from 'src/app/modules/account/account.service';
import { DataTransferService } from 'src/app/modules/shared/services/data-transfer.service';
import {onSelectFile} from '../../../../../constant/file-input'; 
interface FormData {
  entries(): Iterator<any>;
}
// import { CustomValidators, MAT_ERROR } from '@form-field';
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
  imageFile;
  profileDetail: any;
  constructor( private accountService:AccountService, private _dataService:DataTransferService) {
    this.editProfileForm = this.accountService.createEditProfileForm();
   }

  ngOnInit( ) {
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
            email: this.profileDetail.email
          })
          this.profilePicURL = this.profileDetail.image;
        }
      )
  }

    /**
   * @description Getting controls of editProfileForm
   * @param name 
   */
  getValidationError(control,name) {
    return this.accountService.getValidationError(control,name);
  }

  /**
   * @description This function is called when user change profile pic. Save that file
   * @param event 
   */
  async onSelectFile(event) {
    try {
      let result = await onSelectFile(event);
      this.imageFile = result.file;
      console.log(this.imageFile,'image file ');
      let arr = [];
      let files = Object.keys(this.imageFile);
      console.log(files,'files....')
       files.forEach(file => {
       arr.push(this.imageFile[file]);
      });
      console.log(arr , ' arr i sworking....')
      this.profilePicURL = result.url;
    } catch (err) {
      // if (err.type) {
      //   this._editProfileService.showAlert(invalidImageError());
      // } else if (err.size) {
      //   this._editProfileService.showAlert(invalidFileSize())
      // }
    }
  }

  /**
   * @description First upload the profile picture then edit the profile
   */
  async editProfile() {
    if (this.editProfileForm.invalid)
      return;
    if (this.imageFile) {
       this.accountService.uploadProfile(this.imageFile).subscribe(
        (res)=>{
          console.log(res , 'response');
        }
      )
    }
    
    let body = { images:this.imageFile , ...this.editProfileForm.value };
    this.editProfileForm.disable();
    this.editProfileSubscription = this.accountService.editProfile(body).subscribe(
      data => {
   console.log(data)
      },
      err => {
        this.editProfileForm.enable();
      }
    );
  }

  ngOnDestroy() {
    if (this.editProfileSubscription)
      this.editProfileSubscription.unsubscribe();
  }

}



  // editProfile(){
  //   this.accountService.editProfile(this.image).subscribe((response)=>{
  //     let mimetype = response['mimetype'];
  //     console.log(mimetype,'result-message');
  //     if(mimetype === 'image/jpeg' ){
  //       this.url = `data:image/jpeg;base64,${response['files'][0]}`;
  //       this.editProfileForm.controls['image'].setValue(this.url);
  //       this._updateProfile();
  //     } else  if(mimetype == 'image/jpg' ){
  //       this.url = `data:image/jpg;base64,${response['files'][0]}`;
  //       this.editProfileForm.controls['image'].setValue(this.url);
  //     } else  if(mimetype == 'image/png' ){
  //       this.url = `data:image/png;base64,${response['files'][0]}`;
  //       this.editProfileForm.controls['image'].setValue(this.url);
  //     }
   
      
  //   }, error=>{
      
  //   }

    
  //   );
  // }
 

  // private _updateProfile() {
    // this._profile.updateProfile(this.profileForm.value).finally(() => {
    //   this._loader.completeLoading();
    // });
  // }
  
  

  // onSelectFile(event) { // called each time file input changes
  //   if (event.target.files && event.target.files[0]) {

  //     // this.imgLoader = true;
  //     const reader = new FileReader();
  //     reader.readAsDataURL(event.target.files[0]); // read file as data url
  //     reader.onload = (imgsrc: any) => { // called once readAsDataURL is completed
  //     this.image = event.target.files.item(0);
  //     // this.imgLoader = false;
  //       };
  //     }  
  // }


  
    
  
  



