import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MoodDetailPageRoutingModule } from './mood-detail-routing.module';
import { MoodDetailPage } from './mood-detail.page';
import { IonicModule } from '@ionic/angular';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoodDetailPageRoutingModule,NgSelectModule
  ],
  declarations: [MoodDetailPage]
})
export class MoodDetailPageModule {}
