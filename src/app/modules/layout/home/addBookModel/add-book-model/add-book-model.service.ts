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
      description: data.description,
      code:data.code
    }
    return this.httpClient.post(`${this.baseUrl}add_book`, body);
  }
  
}
