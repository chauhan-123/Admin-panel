import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ViewComponent } from './view.component';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  // public dataSource = new BehaviorSubject<any>(Number);
  // data = this.dataSource.asObservable();
  // countGet(count : Number){
  //   console.log(count)
  //   this.dataSource.next(count);
  // }


  constructor(private _dialog: MatDialog) { }

  open(url: string, config: any): Observable<void> {
    return this._dialog.open(ViewComponent, {
      disableClose: true,
      data: { url, config }
    }).afterClosed();
  }

}
