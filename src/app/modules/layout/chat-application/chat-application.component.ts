import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import * as moment from 'moment';
@Component({
  selector: 'app-chat-application',
  templateUrl: './chat-application.component.html',
  styleUrls: ['./chat-application.component.scss']
})
export class ChatApplicationComponent {
  message: string;
  messages: string[] = [];

  constructor(private chatService:ChatService) { }

  sendMessage() {
    this.chatService.sendMessage(this.message).subscribe(response =>{
      console.log(response['result'].message)
      const currentTime = moment().format('hh:mm:ss a');
      const messageWithTimestamp = `${currentTime}: ${response['result'].message}`;
      this.messages.push(messageWithTimestamp);
    });
    this.message = '';
  }


}
