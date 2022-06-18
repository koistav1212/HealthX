import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 constructor(
   private platform:Platform,
  public afAuth: AngularFireAuth,private router:Router
 ){
   this.intializeApp();
 }
 intializeApp()
 {
   this.platform.ready().then(()=>{
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
       this.router.navigateByUrl("menu/tabs/home");
      } else {
        this.router.navigateByUrl("getstarted");
      }
    });
setTimeout(()=>{
 
},300);
 })

 }
}
