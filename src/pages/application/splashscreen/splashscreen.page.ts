import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {

  constructor(public router:Router) {
    setTimeout(()=>
    {
      router.navigateByUrl('login')
    },2200)
   }

  ngOnInit() {
  }

}
