import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetstartedPage } from './getstarted.page';

const routes: Routes = [
  {
    path: '',
    component: GetstartedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetstartedPageRoutingModule {}
