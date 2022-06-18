import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestimonialPage } from './testimonial.page';

const routes: Routes = [
  {
    path: '',
    component: TestimonialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestimonialPageRoutingModule {}
