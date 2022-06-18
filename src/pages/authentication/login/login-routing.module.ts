import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'tabs',
    loadChildren: () => import("../../application/tabs/tabs.module").then( m => m.TabsPageModule)
 
  },{
    path: 'home',
    loadChildren: () => import("../../application/home/home.module").then( m => m.HomePageModule)
 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
