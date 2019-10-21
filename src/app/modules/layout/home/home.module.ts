import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
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
            MatSortModule
          } from '@angular/material';
          import {MatPaginatorModule} from '@angular/material/paginator';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AccountGuard } from '../../gaurd/account.guard';
import { HomeService } from './home.service';
import { AddBookModelComponent } from './addBookModel/add-book-model/add-book-model.component';


const homeroutes: Routes = [
  { path: '', component: HomeComponent , canActivate:[AccountGuard] }
]

@NgModule({
  declarations: [HomeComponent, AddBookModelComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homeroutes),
    SharedModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatTooltipModule,
    MatListModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

  ], 
  providers:[HomeService],
  entryComponents:[AddBookModelComponent ]
})
export class HomeModule { }
