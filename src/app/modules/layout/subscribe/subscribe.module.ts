import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from './subscribe.component';
import { RouterModule , Routes } from '@angular/router';
import { MatCardModule, MatDialogModule, MatIconModule, MatInputModule, MatButtonModule, MatToolbarModule, MatMenuModule, MatDividerModule, MatTooltipModule, MatFormFieldModule, MatListModule, MatTableModule, MatOptionModule, MatPaginatorModule, MatSelectModule, MatExpansionModule } from '@angular/material';
import { CustomdateModule } from 'src/app/pipe/customdate/customdate.module';

const subRoute:Routes =[
  {path:'', component:SubscribeComponent}
]

@NgModule({
  declarations: [SubscribeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(subRoute),
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatTooltipModule,
    MatListModule,
    MatFormFieldModule,
    MatTableModule,
    CustomdateModule,
    MatExpansionModule,
     MatOptionModule,
     MatSelectModule,
     MatPaginatorModule
  ]
})
export class SubscribeModule { }
