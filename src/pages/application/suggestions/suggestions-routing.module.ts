import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuggestionsPage } from './suggestions.page';

const routes: Routes = [
  {
    path: '',
    component: SuggestionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuggestionsPageRoutingModule {}
