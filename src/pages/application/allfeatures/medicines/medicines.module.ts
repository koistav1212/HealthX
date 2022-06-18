import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicinesPageRoutingModule } from './medicines-routing.module';

import { MedicinesPage } from './medicines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicinesPageRoutingModule
  ],
  declarations: [MedicinesPage]
})
export class MedicinesPageModule {}
