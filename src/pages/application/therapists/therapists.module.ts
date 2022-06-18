import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { TherapistsPageRoutingModule } from './therapists-routing.module';

import { TherapistsPage } from './therapists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,Ng2SearchPipeModule,
    TherapistsPageRoutingModule,
  ],
  declarations: [TherapistsPage]
})
export class TherapistsPageModule {}
