import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeaturesPageRoutingModule } from './features-routing.module';

import { FeaturesPage } from './features.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeaturesPageRoutingModule
  ],
  declarations: [FeaturesPage]
})
export class FeaturesPageModule {}
