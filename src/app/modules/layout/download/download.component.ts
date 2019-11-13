import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator/typings/paginator';
import { InputFilesComponent } from '../input-files/component/input-files.component';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  @ViewChild(InputFilesComponent , {static: true} ) inputFilesComponent: InputFilesComponent
  constructor( ) { }

  ngOnInit() {
  }

  fileChange(event) {
    console.log(event.target.files , '---------')
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        // let headers = new Headers();
        // /** In Angular 5, including the header Content-Type can invalidate your request */
        // headers.append('Content-Type', 'multipart/form-data');
        // headers.append('Accept', 'application/json');
        // let options = new RequestOptions({ headers: headers });
        // this.http.post(`${this.apiEndPoint}`, formData, options)
        //     .map(res => res.json())
        //     .catch(error => Observable.throw(error))
        //     .subscribe(
        //         data => console.log('success'),
        //         error => console.log(error)
        //     )
    }
}

}
