import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule, MatToolbarModule, MatMenuModule, MatDividerModule, MatTooltipModule, MatListModule, MatBadgeModule, MatRippleModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout.routing';
import { HeaderComponent } from './layout parts/header/header.component';
import { SidebarComponent } from './layout parts/sidebar/sidebar.component';
import { CollespeDirective } from '../directive/collespe/collespe.directive';
import { HomeService } from './home/home.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomdateModule } from 'src/app/pipe/customdate/customdate.module';
import { InputFilesModule } from './input-files/input-files.module';


@NgModule({
  declarations: [
    LayoutComponent, 
    HeaderComponent, 
    SidebarComponent,
    CollespeDirective,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatTooltipModule,
    MatListModule,
    LayoutRoutingModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
    CustomdateModule,
    MatBadgeModule,
    MatRippleModule,
    InputFilesModule

  ],  
  providers:[HomeService]
})
export class LayoutModule { }
