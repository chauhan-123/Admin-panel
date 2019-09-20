import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:'account',pathMatch:'full'},
  {path:'account',loadChildren:'./modules/account/account.module#AccountModule'},
  {path:'**',component:NotfoundComponent},
  {path:'link-expired',component:NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
