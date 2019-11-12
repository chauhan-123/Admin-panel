import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';

@Injectable({
    providedIn: 'root'
  })

export class ChatService {
  baseUrl = "http://localhost:3000/"

   constructor(private httpClient:HttpService) {
        
    }

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