import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-add-book-details',
  templateUrl: './add-book-details.component.html',
  styleUrls: ['./add-book-details.component.scss']
})
export class AddBookDetailsComponent implements OnInit {
bookId = '';
userDetails: any;
  constructor(private _route:ActivatedRoute,
    private homeService:HomeService
    ) { 
    this.bookId = this._route.snapshot.params.bookId;
    this.getUserDetails();
  }

  ngOnInit() { 
  }

getUserDetails(){
  this.homeService.getUserDetails({ bookId: this.bookId })
  .subscribe(response=>{
  this.userDetails = response.result[0];
  }  
  )
}


}
