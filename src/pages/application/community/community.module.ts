import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunityPageRoutingModule } from './community-routing.module';

import { CommunityPage } from './community.page';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommunityPageRoutingModule
  ],
  declarations: [CommunityPage]
})
export class CommunityPageModule {}
