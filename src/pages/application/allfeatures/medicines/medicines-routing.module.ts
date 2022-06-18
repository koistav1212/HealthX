import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicinesPage } from './medicines.page';

const routes: Routes = [
  {
    path: '',
    component: MedicinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicinesPageRoutingModule {}
