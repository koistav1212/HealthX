import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FactPagePage } from './fact-page.page';

const routes: Routes = [
  {
    path: '',
    component: FactPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactPagePageRoutingModule {}
