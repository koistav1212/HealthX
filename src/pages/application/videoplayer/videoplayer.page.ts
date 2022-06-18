import { Component, OnInit } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';
@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.page.html',
  styleUrls: ['./videoplayer.page.scss'],
})
export class VideoplayerPage implements OnInit {
  preload: string = 'auto';
  api: VgApiService;
  constructor() { }

  ngOnInit() {
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
