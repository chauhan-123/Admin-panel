import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule, MatToolbarModule, MatMenuModule, MatDividerModule, MatTooltipModule, MatListModule } from '@angular/material';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout.routing';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatTooltipModule,
    MatListModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
