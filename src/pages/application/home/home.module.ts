import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { IonBottomSheetModule } from 'ion-bottom-sheet';
import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { FlipCardComponent } from 'src/components/flip-card/flip-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,IonBottomSheetModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,FlipCardComponent]
})
export class HomePageModule {}
