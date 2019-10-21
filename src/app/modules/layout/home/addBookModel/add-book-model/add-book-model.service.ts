import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HomeComponent } from '../../home.component';

@Injectable({
  providedIn: 'root'
})
export class AddBookModelService {
  baseUrl = "http://localhost:3000/"
  constructor( private httpClient:HttpClient , private _router : Router ) { }

  submit(data) {
    let body = {
      images: data.images,
      name: data.name,
      author: data.author,
      price: data.price,
      description: data.description
    }
    return this.httpClient.post(`${this.baseUrl}add_book`, body)
      .pipe(
        map(
          response => {
            console.log(response,'oooooooooooo')
            if (response['statusCode'] == 200) {
              // this.home.getBookListDetail();   
           }
          }
        )
      )
  }
  
}
