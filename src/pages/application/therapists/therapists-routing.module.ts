import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TherapistsPage } from './therapists.page';

const routes: Routes = [
  {
    path: '',
    component: TherapistsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TherapistsPageRoutingModule {}
