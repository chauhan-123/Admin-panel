import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { UtilityService } from './utility.service';


@Injectable()
export class HttpService {
    // private apiUrl: string;

    constructor(
        private http: HttpClient,
    ) {
        // this.apiUrl = environment.url;
     }
    
    post(url, data,loader = true) {
        if(loader) {
          console.log(loader,'loader');
            UtilityService.loader.next(loader);
        }
        let postUrl;
        postUrl = url;
        return this.http.post(postUrl, data)
            .pipe(
                map((res: HttpResponse<any>) => {
                    return res;
                }),
                catchError((error: HttpErrorResponse) => {
                    throw(error);
                })
            );
    }

  

   

 
    handleError(error) {
        console.error(error);
    }

    

}
