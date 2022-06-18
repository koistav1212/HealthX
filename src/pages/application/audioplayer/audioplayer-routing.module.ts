import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudioplayerPage } from './audioplayer.page';

const routes: Routes = [
  {
    path: '',
    component: AudioplayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudioplayerPageRoutingModule {}
