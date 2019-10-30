import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { HomeService } from './home.service';
import { MatDialog, MatPaginator } from '@angular/material';
import { AddBookModelComponent } from './addBookModel/add-book-model/add-book-model.component';
import {Pagination} from  '../../../model/pagination';
import { FormGroup } from '@angular/forms';
import { AccountService } from '../../account/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends Pagination  implements OnInit {
  displayedColumns: string[] = ['position', 'book_code','Image','name', 'price', 'author','description' , 'status','action'];
  bookList = new MatTableDataSource<any>([]);
  images : any;
  limit;
  showFilter = false;
  bookForm:FormGroup;

 constructor( private homeService:HomeService,
  private _accountService:AccountService,
  public dialog: MatDialog
  ){
    super();
    this.bookForm = this.homeService.createFilterForm();
    this.imageUrl();
 this.getBookListDetail();
 }
 

  ngOnInit(){
  }



  imageUrl(){
    this.homeService.images.subscribe(images=>{
      this.images = images;
      this.images =  `data:image/jpeg;base64,${this.images['files']}`;
    })
  }

  getBookListDetail(sort?, formVal?){
    let data = formVal ? {...this.validPageOptions, ...sort, ...formVal } : {...this.validPageOptions, ...sort };
    this.homeService.getBookListing(data).subscribe(
      (response: any) => {
        if (response) {
           this.bookList = new MatTableDataSource(response.result);
          this.total = response.total;
        }
      }
    )
  }



  /*
    Method For Changing The Pagination
  */
 changePage(event: MatPaginator) {
  this.pageOptionsOnChange = event;
  if (this.total == 0) {
  }
  this.getBookListDetail();
}

 /*
    Method For Searching
  */
 setSearch(event) {
  this.search = event;
   this.resetPages();
  this.getBookListDetail();
}

/*
    Method For Sorting
  */
 sortData(event) {
  if(event.direction) {
    let sort = { field: event.active, order: event.direction === 'asc' ? 1 : -1 };
    this.getBookListDetail(sort);
  }
}

  /*
    Method For Applying The Filters
  */
 filter() {
  if (this.bookForm.valid) {
    console.log('here')
    let data = this.bookForm.value;
    this.bookForm.setValue(data);
    this.getBookListDetail(this.bookForm.value);
  }
  // this.resetPages();
}

// change the serial number

getSerialNumber(i) {
  return i + ((this.validPageOptions['page'] - 1) * this.validPageOptions['limit']);
}
//  function for deleted admin panel
changeStatus(status, bookId) {
  const data = {
    id: bookId,
    status: status
  }
  this.homeService.changeStatus(data).subscribe(
    data => {
      if (data) {
        this.getBookListDetail();
      }
    }
  )
}


//  function for active and block for admin panel
changeStatusActive(status, bookId){
  const data = {
    id: bookId,
    status: status
  }
  this.homeService.changeStatusActive(data).subscribe(
    data => {
      if (data) {
        this.getBookListDetail();
      }
    }
  )
 
}

 /*
    Method For Resetting The Filters
  */
 resetFilter() {
  this.bookForm.reset();
  this.resetPages();
  this.getBookListDetail();

}

  // add the book 
  addBookCategory(category?){
    const dialogRef = this.dialog.open(AddBookModelComponent, {
      width: '500px',
      height:'600px',
      data: category||''
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log(result,';;;;;;;;;;;;;')
        if(category) {
          category.name = result.name;
           category.images = result.images;
           category.status = result.status;
           category.price = result.price;
           category.description = result.description;
           category.author = result.author;
           category.code = result.code
        } else {
          this.resetFilter();
        }
      }
    });
  }



  getValidationError(control, name) {
    return this._accountService.getValidationError(control, name);
  }
  
}
