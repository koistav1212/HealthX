import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogViewPage } from './blog-view.page';

const routes: Routes = [
  {
    path: '',
    component: BlogViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogViewPageRoutingModule {}
