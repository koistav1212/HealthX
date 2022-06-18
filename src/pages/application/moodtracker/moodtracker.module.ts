import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoodtrackerPageRoutingModule } from './moodtracker-routing.module';

import { MoodtrackerPage } from './moodtracker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoodtrackerPageRoutingModule
  ],
  declarations: [MoodtrackerPage]
})
export class MoodtrackerPageModule {}
