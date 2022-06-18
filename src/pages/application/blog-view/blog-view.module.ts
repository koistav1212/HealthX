import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogViewPageRoutingModule } from './blog-view-routing.module';

import { BlogViewPage } from './blog-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogViewPageRoutingModule
  ],
  declarations: [BlogViewPage]
})
export class BlogViewPageModule {}
