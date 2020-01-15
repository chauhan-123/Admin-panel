import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { ViewService } from './view.service';

export interface DialogData {
  url: string;
  config: any;
}
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  count: any;


  get url(): string {
    return this._data.url;
  }
  get isImage(): boolean {
    return this._data && this._data.config && this._data.config.type === 'Image';
  }
  


  constructor(
    private _dialogRef: MatDialogRef<ViewComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: DialogData,
    // private viewService:ViewService
  ) {
    this.getCountData();
  }


  ngOnInit() {
  }

  getCountData(){
    // this.viewService.dataSource.subscribe(count=>{
    //   this.count = count;
    //   console.log(this.count)
    // })
  }
  onCloseHandler() {
    this.count = this.count - 1;
    this._dialogRef.close();

  }
}
