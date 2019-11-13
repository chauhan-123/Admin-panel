export class FileData {
  uploaded = false;
  url: string = null;
  type: string = null;
  id = `${btoa(Date.now().toString())}.${Date.now()}`;
  thumbnail: File;
  private _readComplete: Subject<void> = new Subject();
  readonly onload: Observable<void> = this._readComplete.asObservable();
  private _imageElement: HTMLImageElement = document.createElement('img');
  private _canvasElement: HTMLCanvasElement = document.createElement('canvas');
  constructor(public file: File, url: string = null) {
    // create thumnail
    if (!url) {
      this.type = file.type;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.url = e.target.result;
        this._readComplete.next();
        this._readComplete.complete();
        this.createImageThumnail(this.url, 50, 50);
      };
      reader.readAsDataURL(file);
    }
    else {
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
  createImageThumnail(url: string, height: number, width: number): Promise<File> {
    return new Promise((resolve, reject) => {
      const context = this._canvasElement.getContext('2d');
      this._canvasElement.height = height;
      this._canvasElement.width = width;
      this._imageElement.src = url;
      context.drawImage(this._imageElement, 0, 0, height, width);
      this._canvasElement.toBlob((blob) => {
        const file = new File([blob], name, { type: 'image/png' });
        this.thumbnail = file;
      });
    });
  }
}
