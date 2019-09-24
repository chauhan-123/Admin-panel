import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const layoutroutes:Routes =[
  { path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',loadChildren:'./home/home.module#HomeModule'}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(layoutroutes),
    SharedModule
  ]
})
export class LayoutModule { }
