import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoodtrackerPage } from './moodtracker.page';

const routes: Routes = [
  {
    path: '',
    component: MoodtrackerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoodtrackerPageRoutingModule {}
