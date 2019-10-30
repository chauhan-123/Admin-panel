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
            MatSortModule,
            MatExpansionModule,
            MatOptionModule,
            MatSelectModule,          
     } from '@angular/material';
          import {MatPaginatorModule} from '@angular/material/paginator';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AccountGuard } from '../../gaurd/account.guard';
import { HomeService } from './home.service';
import { AddBookModelComponent } from './addBookModel/add-book-model/add-book-model.component';
import { SearchFilterModule } from '../layout-shared/search-filter/search-filter.module';
import { AddBookDetailsComponent } from './addBookView/add-book-details/add-book-details.component';



const homeroutes: Routes = [
  {path:'', redirectTo:'user' , pathMatch:'full'},
  { path: 'user', component: HomeComponent , canActivate:[AccountGuard] },
  {path :'user_details/:bookId', component: AddBookDetailsComponent }
 
]

@NgModule({
  declarations: [HomeComponent, AddBookModelComponent, AddBookDetailsComponent],
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
    MatSortModule,
    SearchFilterModule,
    MatExpansionModule,
     MatOptionModule,
     MatSelectModule,
    

  ], 
  providers:[HomeService ,HomeComponent],
  entryComponents:[AddBookModelComponent ]
})
export class HomeModule { }
