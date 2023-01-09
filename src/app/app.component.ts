import { Component, QueryList, ViewChildren } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AlertController, IonRouterOutlet, NavController, Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet> | any;

  timePeriodToExit = 2000;
  lastTimeBackPress = 0;
 constructor(
   private platform:Platform,private location: Location, public navCtrl: NavController,
  public afAuth: AngularFireAuth,private router:Router,private alertController: AlertController
 ){ this.platform.ready().then(async () => {
  
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
       this.navCtrl.navigateRoot("menu/tabs/home");
      } else {
        this.router.navigateByUrl("getstarted");
      }
    });
setTimeout(()=>{
 // SplashScreen.hide();
},100);
 })
 
 this.backButtonEvent();
 }
 intializeApp()
 {
   
 }
 backButtonEvent() {
  console.log(this.router.url)
  this.platform.backButton.subscribeWithPriority(0, () => {
    console.log("backpress")
    this.routerOutlets.forEach(async (outlet: IonRouterOutlet) => {
      if (!this.router.url.includes('/home')) {
        // await this.router.navigate(['/']);
        await this.location.back();
      }
      else if (this.router.url.includes('/welcome')) {
        document.addEventListener('backbutton', function (event) {
          event.preventDefault();
          event.stopPropagation();
        }, false);
      }
      else if (this.router.url.includes('/login')) {
        document.addEventListener('backbutton', function (event) {
          event.preventDefault();
          event.stopPropagation();
        }, false);
      } else if (this.router.url.includes('/home')) {
        if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
          this.lastTimeBackPress = new Date().getTime();
          this.presentAlertConfirm();
        } else {
          navigator['app'].exitApp();
        }
      }
    });
  });
}
async presentAlertConfirm() {
  const alert = await this.alertController.create({
    // header: 'Confirm!',
    message: 'Are you sure you want to exit the app?',
    buttons: [{
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: (blah) => { }
    }, {
      text: 'Exit',
      handler: () => {
        navigator['app'].exitApp();
      }
    }]
  });

  await alert.present();
}

}
