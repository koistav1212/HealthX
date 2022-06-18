import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisionPage } from './vision.page';

const routes: Routes = [
  {
    path: '',
    component: VisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisionPageRoutingModule {}
