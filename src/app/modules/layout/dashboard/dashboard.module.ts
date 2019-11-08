import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule , Routes } from '@angular/router';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { MatDialogModule,
  MatCardModule, 
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
     MatSortModule,
     MatExpansionModule,
     MatOptionModule,
     MatSelectModule,
     MatPaginatorModule,          
} from '@angular/material';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { CustomdateModule } from 'src/app/pipe/customdate/customdate.module';
const dashboardRoute: Routes =[
  { path :''  , component:DashboardComponent},
  {path :'admindetails' , component: AdmindetailsComponent},
  {path :'userdetails' , component: UserdetailsComponent},
]




@NgModule({
  declarations: [DashboardComponent, AdmindetailsComponent, UserdetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoute),
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
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
export class DashboardModule { }
