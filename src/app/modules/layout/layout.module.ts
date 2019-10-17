import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule, MatToolbarModule, MatMenuModule, MatDividerModule, MatTooltipModule, MatListModule } from '@angular/material';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout.routing';
import { HeaderComponent } from './layout parts/header/header.component';
import { SidebarComponent } from './layout parts/sidebar/sidebar.component';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SidebarComponent],
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
