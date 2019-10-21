import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { HomeService } from './home.service';
import { MatDialog, MatPaginator } from '@angular/material';
import { AddBookModelComponent } from './addBookModel/add-book-model/add-book-model.component';
import {Pagination} from  '../../../model/pagination';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends Pagination  implements OnInit {
  displayedColumns: string[] = ['position','Image','name', 'price', 'author','description'];
  bookList = new MatTableDataSource<any>([]);
  images : any;


 constructor( private homeService:HomeService,
  public dialog: MatDialog
  ){
    super();
    this.imageUrl();
 this.getBookListDetail();
 }
  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  ngOnInit(){
  }



  imageUrl(){
    this.homeService.images.subscribe(images=>{
      this.images = images;
      this.images =  `data:image/jpeg;base64,${this.images['files']}`;
    })
  }

  getBookListDetail(){
    let data = {...this.validPageOptions , ...this.sortOptions};
    this.homeService.getBookListing(data).subscribe(
      (response: any) => {
        if (response) {
           this.bookList = new MatTableDataSource(response.result);
          this.total = response.total.length;
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
    Method For Sorting
  */
 sortData(event) {
  console.log(event)
  this.sortOptions = event;
  this.resetPages();
  this.getBookListDetail();
}



// change the serial number

getSerialNumber(i) {
  return i + ((this.validPageOptions['page'] - 1) * this.validPageOptions['limit']);
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
        // if(category) {
        //   category.name = result.name;
        //   category.image = result.image;
        //   category.statusInfo = result.statusInfo;
        // } else {
        //   // this.resetFilter();
        // }
      }
    });
  }
  
}
