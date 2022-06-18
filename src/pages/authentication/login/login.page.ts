import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import firebase from 'firebase';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loading: any;
  public isGoogleLogin = false;
  public user = null;
	username: string = ""
	password: string = ""
	constructor(public afAuth: AngularFireAuth,  public router: Router,
		public alertController: AlertController,
    public loadingController: LoadingController,

    private platform: Platform,
		) { }

    async ngOnInit() {
      this.loading = await this.loadingController.create({
        message: 'Connecting ...'
      });
    }
	async presentAlert(title: string, content: string) {
		const alert = await this.alertController.create({
			header: title,
			message: content,
			buttons: ['OK']
		})

		await alert.present()
	}
	async login() {
		const { username, password } = this
		try {
			// kind of a hack. 
			const res = await this.afAuth.signInWithEmailAndPassword(username.trim(), password)
			this.presentAlert('Welcome', "It's Good to see you again")
			this.router.navigateByUrl('menu/tabs/home')
		
		}
     catch(err) {
			console.dir(err)
			if(err.code === "auth/user-not-found") {
				this.presentAlert('Error', "User not found please Register")
			
			}
		}
	}

  logout() {
    this.afAuth.signOut().then(() => {
      this.isGoogleLogin = false;
    });
  }

}