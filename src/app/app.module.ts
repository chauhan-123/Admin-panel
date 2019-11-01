import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AccountService } from './modules/account/account.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './modules/shared/services/http.service';
import { SharedModule } from './modules/shared/shared.module';
import { FormsModule, FormBuilder } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './modules/layout/layout parts/header/header.component';
import { CollespeModule } from './modules/directive/collespe/collespe.module';
import { HomeService } from './modules/layout/home/home.service';
import { CustomDatePipe } from './pipe/custom-date.pipe';








@NgModule({
  declarations: [
    AppComponent, NotfoundComponent, CustomDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    MatIconModule,
    CollespeModule,
    FormsModule


  ],
  providers: [AccountService, HttpService, HeaderComponent, HomeService , FormBuilder
  ],

  bootstrap: [AppComponent]

})
export class AppModule { }
