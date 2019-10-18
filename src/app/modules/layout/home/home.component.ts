import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { HomeService } from './home.service';
import { MatDialog } from '@angular/material';
import { AddBookModelComponent } from './addBookModel/add-book-model/add-book-model.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position','Image', 'name', 'price', 'author','description'];
  bookList = new MatTableDataSource<any>([]);

 constructor( private homeService:HomeService,
  public dialog: MatDialog
  ){
 this.getBookListDetail();
 }
  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  ngOnInit(){
  }

  getBookListDetail(){
    this.homeService.getBookListing().subscribe(
      (response: any) => {
        if (response) {
          console.log(response.result ,'-------------');
           this.bookList = new MatTableDataSource(response.result);
 
        }
      }
    )
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
