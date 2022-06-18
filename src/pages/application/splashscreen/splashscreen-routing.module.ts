import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashscreenPage } from './splashscreen.page';

const routes: Routes = [
  {
    path: '',
    component: SplashscreenPage
  },
  {
    path: 'login',
    loadChildren: () => import("../../authentication/login/login.module").then( m => m.LoginPageModule)
 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplashscreenPageRoutingModule {}
