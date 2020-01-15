import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountGuard } from './modules/gaurd/account.guard';
import {HomeGuard} from './modules/gaurd/home.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  { path: 'account', loadChildren: './modules/account/account.module#AccountModule' },
  { path: 'admin', loadChildren: './modules/layout/layout.module#LayoutModule', canLoad: [AccountGuard] },
  { path: '**', component: NotFoundComponent},
  { path: 'link-expired', component:  NotFoundComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes
  )],
  exports: [RouterModule],
  providers: [AccountGuard , HomeGuard]
})
export class AppRoutingModule { }
