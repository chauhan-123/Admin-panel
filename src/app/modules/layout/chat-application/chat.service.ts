import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
@Injectable({
    providedIn: 'root'
  })

export class ChatService {
  // private url = 'http://localhost:3000';
  // private socket;
  baseUrl = "http://localhost:3000/"

   constructor(private httpClient:HttpService) {
    // this.socket = io(this.url);
    }

  //   sendMessage(message) {
  //     console.log('message' , message);
      
  //     this.socket.emit('new-message', message);
  // }

 sendMessage(message) {
 let data ={
     message: message
 }
    return this.httpClient.post(`${this.baseUrl}user_chat`, data);
    }

    // getMessages() {
    //     return Observable.create((observer) => {
    //         this.socket.on('new-message', (message) => {
    //             observer.next(message);
    //         });
    //     });
    // }
}