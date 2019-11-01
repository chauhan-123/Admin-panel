import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { AccountGuard } from './modules/gaurd/account.guard';

import {HomeGuard} from './modules/gaurd/home.guard';

const routes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  { path: 'account', loadChildren: './modules/account/account.module#AccountModule' },
  { path: 'admin', loadChildren: './modules/layout/layout.module#LayoutModule', canLoad: [AccountGuard] },
  {path : 'user' , loadChildren : './modules/account/account.module#AccountModule'},
  { path: '**', component: NotfoundComponent },
  { path: 'link-expired', component: NotfoundComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes
  )],
  exports: [RouterModule],
  providers: [AccountGuard , HomeGuard]
})
export class AppRoutingModule { }
