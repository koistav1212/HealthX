import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { environment } from 'src/environments/environment';

import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngMusicPlayerModule } from 'ang-music-player';
import { NgSelectModule } from '@ng-select/ng-select';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,AngMusicPlayerModule,NgSelectModule,
    VgBufferingModule],
    providers: [GooglePlus,DatePipe,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
 
})
export class AppModule {}
