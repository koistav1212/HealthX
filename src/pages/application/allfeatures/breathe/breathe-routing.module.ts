import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreathePage } from './breathe.page';

const routes: Routes = [
  {
    path: '',
    component: BreathePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreathePageRoutingModule {}
