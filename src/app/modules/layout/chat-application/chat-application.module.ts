import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { ChatApplicationComponent } from './chat-application.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

const chatRoute:Routes =[
  {path:'', component:ChatApplicationComponent}
]

@NgModule({
  declarations: [ChatApplicationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(chatRoute),
    FormsModule,
    SharedModule
  ]
})
export class ChatApplicationModule { }
