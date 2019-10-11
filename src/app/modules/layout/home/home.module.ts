import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MatDialogModule, MatCardModule, MatIconModule, MatInputModule, MatButtonModule, MatToolbarModule, MatMenuModule, MatDividerModule, MatTooltipModule, MatListModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AccountGuard } from '../../gaurd/account.guard';

const homeroutes: Routes = [
  { path: '', component: HomeComponent , canActivate:[AccountGuard] }
]

@NgModule({
  declarations: [HomeComponent],
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
    MatListModule

  ]
})
export class HomeModule { }
