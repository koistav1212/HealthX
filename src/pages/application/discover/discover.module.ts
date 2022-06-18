import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscoverPageRoutingModule } from './discover-routing.module';
import { RouterModule } from '@angular/router';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DiscoverPage } from './discover.page';
import { IonBottomSheetModule } from 'ion-bottom-sheet';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscoverPageRoutingModule,IonBottomSheetModule,
    Ng2SearchPipeModule,
    RouterModule.forChild([
      {
        path: '',
        component: DiscoverPage
      }
    ])
  ],
  declarations: [DiscoverPage]
})
export class DiscoverPageModule {}
