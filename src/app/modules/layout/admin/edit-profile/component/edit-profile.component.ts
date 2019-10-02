import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AccountService } from 'src/app/modules/account/account.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  url: string;
  image:any;
  editProfileForm:FormGroup
  constructor( private accountService:AccountService) {
    this.url = 'assets/images/admin.jpg'; // for Placeholder
   }

  ngOnInit() {
  }

  editProfile(){
this.accountService.editProfile(this.image).subscribe(console.log);
    }
 

   
  
  

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
    // if (event.target.files && event.target.files.item(0)) {
      // console.log(event.target.files[0],'result');
      
      // this.imgLoader = true;
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (imgsrc: any) => { // called once readAsDataURL is completed
      this.url = imgsrc.target.result;
      this.image = event.target.files.item(0);
      // console.log(event.target.files[0].name,'this url is comming')
      // this.imgLoader = false;
        };
  
      }
  }



}
