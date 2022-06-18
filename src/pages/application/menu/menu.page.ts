import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
pages=[
  {
    title:'Home',
    url:'/menu/tabs/home'
  },
  {
    title:'Features',
    url:'/menu/features'
  },
  {
    title:'Go Premium',
    url:'/menu/plans'
  },
 

];
selectedPath='';
  constructor(private router:Router,public afAuth: AngularFireAuth) { 
    this.router.events.subscribe((event:RouterEvent)=>
    {
      if(event && event.url)
      {
        this.selectedPath =event.url
      }
    });
  }

  ngOnInit() {
  }
logout()
{
 this.afAuth.signOut();
  this.router.navigateByUrl("getstarted");
}
}
