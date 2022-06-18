import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreathePageRoutingModule } from './breathe-routing.module';

import { BreathePage } from './breathe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreathePageRoutingModule
  ],
  declarations: [BreathePage]
})
export class BreathePageModule {}
