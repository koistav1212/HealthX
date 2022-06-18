import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoundsPage } from './sounds.page';

const routes: Routes = [
  {
    path: '',
    component: SoundsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoundsPageRoutingModule {}
