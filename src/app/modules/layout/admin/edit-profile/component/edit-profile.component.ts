import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  url: string;
  constructor() {
    this.url = 'assets/images/admin.jpg'; // for Placeholder
   }

  ngOnInit() {
  }
  

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      // this.imgLoader = true;
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (imgsrc: any) => { // called once readAsDataURL is completed
      this.url = imgsrc.target.result;
      // this.imgLoader = false;
        };
  
      }
  }

}
