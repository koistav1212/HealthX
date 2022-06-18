import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import firebase from 'firebase';
@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.page.html',
  styleUrls: ['./getstarted.page.scss'],
})
export class GetstartedPage implements OnInit {
  public loading: any;
  public isGoogleLogin = false;
  public user = null;
  constructor(public afAuth: AngularFireAuth,  public router: Router,
		public alertController: AlertController,
    public loadingController: LoadingController,
    private platform: Platform
) { }

  ngOnInit() {
  }
 /* doLogin(){
    let params: any;
    if (this.platform.is('cordova')) {
      if (this.platform.is('android')) {
        params = {
          webClientId: '204973711311-q8i9ebhurl9gf1f7nnrr9m7avo91m63c.apps.googleusercontent.com', //  webclientID 'string'
          offline: true
        };
      } else {
        params = {};
      }
      this.google.login(params)
      .then((response) => {
        const { idToken, accessToken } = response;
        this.onLoginSuccess(idToken, accessToken);
      }).catch((error) => {
        console.log(error);
        alert('error:' + JSON.stringify(error));
      });
    } else{
      console.log('else...');
      this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(success => {
        console.log('success in google login', success);
        this.isGoogleLogin = true;
        this.user =  success.user;
        this.router.navigateByUrl('menu/tabs/home')
      }).catch(err => {
        console.log(err.message, 'error in google login');
      });
    }
  }
  onLoginSuccess(accessToken, accessSecret) {
    const credential = accessSecret ? firebase.auth.GoogleAuthProvider
        .credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider
            .credential(accessToken);
    this.afAuth.signInWithCredential(credential)
      .then((success) => {
       
       this.router.navigateByUrl('menu/tabs/home')
      
      });

  }*/
}
