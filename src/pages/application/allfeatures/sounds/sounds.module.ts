import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoundsPageRoutingModule } from './sounds-routing.module';

import { SoundsPage } from './sounds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoundsPageRoutingModule
  ],
  declarations: [SoundsPage]
})
export class SoundsPageModule {}
