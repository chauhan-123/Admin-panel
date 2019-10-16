import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UtilityService } from './utility.service';


@Injectable()
export class HttpService {

    constructor(
        public http: HttpClient,
    ) { }

    post(url, data) {
        let postUrl;
        postUrl = url;
        return this.http.post(postUrl, data);
    }


    get(url, httpParams?: any) {

        const header = {};
        if (httpParams) {
            header['params'] = httpParams; 
        }
         const getUrl =  url;
        return this.http.get(getUrl, header);
    }

    handleError(error) {
        console.error(error);
    }
}
