import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatureDetailsPage } from './feature-details.page';

const routes: Routes = [
  {
    path: '',
    component: FeatureDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureDetailsPageRoutingModule {}
