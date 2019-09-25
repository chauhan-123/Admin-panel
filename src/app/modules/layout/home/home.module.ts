import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule,Routes } from '@angular/router';
import { HeaderComponent } from '../header/header.component';


const homeroutes:Routes=[
  {path:'', component:HomeComponent}
]

@NgModule({
  declarations: [HomeComponent,HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homeroutes)
  ]
})
export class HomeModule { }
