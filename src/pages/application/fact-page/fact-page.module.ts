import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FactPagePageRoutingModule } from './fact-page-routing.module';

import { FactPagePage } from './fact-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FactPagePageRoutingModule
  ],
  declarations: [FactPagePage]
})
export class FactPagePageModule {}
