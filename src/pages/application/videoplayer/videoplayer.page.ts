import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VgApiService } from '@videogular/ngx-videogular/core';
@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.page.html',
  styleUrls: ['./videoplayer.page.scss'],
})
export class VideoplayerPage implements OnInit {
  preload: string = 'auto';
  api: VgApiService;
  constructor(private router:Router) { }
  vdoSrc={}
  ngOnInit( ) {
    
    this.vdoSrc = this.router.getCurrentNavigation()?.extras.state.item
  }
  onPlayerReady(api: VgApiService) {
    this.api = api;

    this.api.getDefaultMedia().subscriptions.ended.subscribe(
        () => {
            // Set the video to the beginning
            this.api.getDefaultMedia().currentTime = 0;
        }
    );
}
  
}
