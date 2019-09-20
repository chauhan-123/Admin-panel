import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeMainComponent } from './home-main/home-main.component';
import { RouterModule, Routes } from '@angular/router';
 const homeroutes:Routes= [
   {}
 ]


@NgModule({
  declarations: [ HomeMainComponent],
  imports: [
    CommonModule,
    RouterModule

  ]
})
export class HomeModule { }
