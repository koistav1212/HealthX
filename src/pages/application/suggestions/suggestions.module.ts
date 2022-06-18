import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuggestionsPageRoutingModule } from './suggestions-routing.module';

import { SuggestionsPage } from './suggestions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuggestionsPageRoutingModule
  ],
  declarations: [SuggestionsPage]
})
export class SuggestionsPageModule {}
