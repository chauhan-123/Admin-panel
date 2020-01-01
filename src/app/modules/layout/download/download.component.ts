import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator/typings/paginator';
import { InputFilesComponent } from '../input-files/component/input-files.component';
import { LayoutService } from '../layout.service';
import { POPUP_MESSAGES } from 'src/app/constant/message';
import { UtilityService } from '../../shared/services/utility.service';
import { DomSanitizer } from '@angular/platform-browser';
import { saveAs } from 'file-saver'
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  @ViewChild(InputFilesComponent , {static: true} ) inputFilesComponent: InputFilesComponent;
imageid:any;

  isDropActive = false;
  validPageOptions: any;
  response: any;
  fileUrl:any;
  // downloadZipLink: any;
  constructor( private _layoutService:LayoutService , private _utilityService:UtilityService,
    private sanitizer: DomSanitizer) { 
    this.getBookListDetail(); 
  }
  ngOnInit() {
  
  }



  // Method for get books details for 4 photos
  getBookListDetail(){
    let data = {...this.validPageOptions}
    this._layoutService.getBookListing( data).subscribe(
      (response: any) => {
        if (response) {
          var Response = response['result'];
          this.response = Response;

        }
      }
    )
  }

  downloadPhotos(imageid){
    let data = {
      title: POPUP_MESSAGES.download,
      message: POPUP_MESSAGES.downloadConfirmation,
      yes: POPUP_MESSAGES.download,
      no: 'No',
      isHideCancel: false
    }
    this._utilityService.openDialog(data).subscribe(success => {
      if (success != undefined && success != null) {
        console.log(imageid)
        this._layoutService.getImage(imageid).subscribe(
          (res) => {
     console.log(res.result[0]);
     var blob = new Blob([res.result[0]], { type: "image/png" });
     console.log(blob);
     console.log(window.btoa(blob.toString()));
     if (res.result != null) {
       saveAs(blob, 'attachment');
     }
          });
        }
  
      })
    
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

onAddFileHandler(){
  console.log('runing...')
}

}
