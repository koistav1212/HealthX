import { Injectable, QueryList, ViewChildren } from '@angular/core';
import { AlertController, IonRouterOutlet, Platform } from '@ionic/angular';
import { Location } from '@angular/common';
@Injectable({
    providedIn: 'root'
})
export class BackPressFunc {
    constructor(private location: Location,private platform: Platform,private alertController: AlertController,) { }
    @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet> | any;

    lastTimeBackPress = 0;
    timePeriodToExit = 2000;
    backButtonEvent(router: any) {
        console.log(router.url)
        this.platform.backButton.subscribeWithPriority(0, () => {
            this.routerOutlets.forEach(async (outlet: IonRouterOutlet) => {
                if (!router.url.includes('/home')) {
                    // await this.router.navigate(['/']);
                    await this.location.back();
                }
                else if (router.url.includes('/welcome')) {
                    document.addEventListener('backbutton', function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                    }, false);
                }
                else if (router.url.includes('/login')) {
                    document.addEventListener('backbutton', function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                    }, false);
                } else if (router.url.includes('/home')) {
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
