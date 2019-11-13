import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadComponent } from './download.component';
import { RouterModule , Routes } from '@angular/router';
import { MatIconModule, MatTableModule } from '@angular/material';
import { InputFilesModule } from '../input-files/input-files.module';

const dowRoute:Routes=[
  {path:'', component:DownloadComponent}
]

@NgModule({
  declarations: [DownloadComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dowRoute),
    MatIconModule,
    MatTableModule,
    InputFilesModule
  ]
})
export class DownloadModule { }
