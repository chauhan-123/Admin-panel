import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { } from './admin/admin.module';

const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            { path: '', redirectTo: 'home' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
            {path :'dashboard', loadChildren :'./dashboard/dashboard.module#DashboardModule'},
            {path:'chat-Application', loadChildren:'./chat-application/chat-application.module#ChatApplicationModule'},
            {path:'subscription', loadChildren:'./subscribe/subscribe.module#SubscribeModule'},
            {path:'download_video', loadChildren:'./download/download.module#DownloadModule'}
        ]
    },
];
@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ],
    providers: [

    ]
})
export class LayoutRoutingModule {
}

