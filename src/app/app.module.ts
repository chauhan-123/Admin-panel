import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AccountService } from './modules/account/account.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './modules/shared/services/http.service';
import { SharedModule } from './modules/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './modules/layout/header/header.component';




@NgModule({
  declarations: [
    AppComponent, NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    MatIconModule
  ],
  providers: [AccountService, HttpService, HeaderComponent
  ],

  bootstrap: [AppComponent]

})
export class AppModule { }
