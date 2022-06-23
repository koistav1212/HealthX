import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeatureDetailsPageRoutingModule } from './feature-details-routing.module';

import { FeatureDetailsPage } from './feature-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeatureDetailsPageRoutingModule
  ],
  declarations: [FeatureDetailsPage]
})
export class FeatureDetailsPageModule {}
