import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-input-files',
  templateUrl: './input-files.component.html',
  styleUrls: ['./input-files.component.scss']
})
export class InputFilesComponent implements OnInit {
  private _input: HTMLInputElement;
  private _canvas: HTMLCanvasElement;
  public isDropActive = false;
  @Input() label: any
  public _validators: ((file: FileData) => Promise<boolean>)[] = [];

  // data store
  _store: FileData[] = [];
  get data(): FileData[] {
    return this._store;
  }

  constructor(renderer: Renderer2) {

  }

  ngOnInit() {
  }


  validate(validator: (file: FileData) => Promise<boolean>) {
    if (validator && typeof validator === 'function') {
      this._validators.push(validator);
    }
  }

  onAddFileHandler() {
    this._input.click();
  }

  onDropHandler(event: DragEvent) {
    event.stopPropagation();
    event.preventDefault();
    this.isDropActive = false;
    this._fileHandler(event.dataTransfer.files);
  }

  private _fileHandler(files: FileList) {
    console.log('hello running project')
    // for (let i = 0; i < files.length; i++) {
    //   const file = files.item(i);
    //   if (this._accept && this._accept.split(',').indexOf(file.type) === -1) {
    //     alert(this.errorMessage);
    //     this.error = this.errorMessage;
    //     return;
    //   } else if (this.maxSize && this.maxSize < ((file.size / 1024)/1024)) {
    //     alert(`File size must be less than ${this.maxSize}MB.${file.size}`);
    //     this.error = `File size must be less than ${this.maxSize}MB`;
    //     return; 
    //   } else if (this._store.some((fileData) => fileData.file.name === file.name)) {
    //     this.error = `File is already added.`;
    //     return;
    //   } else {
    //     this.error = null;
    //   }
    //   if (this._maxFiles && this._maxFiles < files.length) {
    //     alert(`No of files must be less than or equal to ${this._maxFiles}.`);
    //     this.error = `No of files must be less than or equal to ${this._maxFiles}.`;
    //     return;
    //   }
    //   const fileData = new FileData(file);
    //   fileData.onload.subscribe(() => {
    //     Promise.all(this._validators.map(fn => fn(fileData))).then((result) => {
    //       if (result.every(status => status)) {
    //         this._store.push(fileData);
    //       }
    //     }).catch((error) => {
    //       this.error = error;
    //     });
    //   });
    // }
  }

}
  
  export class FileData {
  uploaded = false;
  url: string = null;
  type: string = null;
  id = `${btoa(Date.now().toString())}.${Date.now()}`;

  thumbnail: File;
  // private _readComplete: Subject<void> = new Subject();
  // readonly onload: Observable<void> = this._readComplete.asObservable();
  // private _imageElement: HTMLImageElement = document.createElement('img');
  // private _canvasElement: HTMLCanvasElement = document.createElement('canvas');
  constructor(public file: File, url: string = null) {
    // create thumnail
    if (!url) {
      this.type = file.type;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.url = e.target.result;
        // this._readComplete.next();
        // this._readComplete.complete();
        // this.createImageThumnail(this.url, 50, 50);
      };
      reader.readAsDataURL(file);
    } else {
      // this.type
      const ext = url.substr(url.lastIndexOf('.') + 1);
      if (['jpg', 'jpeg', 'png'].indexOf(ext) !== -1) {
        this.type = `image/${ext}`;
      }
      if (['mp4', '3gp', 'flv'].indexOf(ext) !== -1) {
        this.type = `video/${ext}`;
      }
      this.url = url;
      this.uploaded = true;
    }
  }
  // createImageThumnail(url: string, height: number, width: number): Promise<File> {
  //   return new Promise((resolve, reject) => {
  //     const context = this._canvasElement.getContext('2d');
  //     this._canvasElement.height = height;
  //     this._canvasElement.width = width;
  //     this._imageElement.src = url;
  //     context.drawImage(this._imageElement, 0, 0, height, width);
  //     this._canvasElement.toBlob((blob) => {
  //       const file = new File([blob], name, { type: 'image/png' });
  //       this.thumbnail = file;
  //     });
  //   });
  // }
}






