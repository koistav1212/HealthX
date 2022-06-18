import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore'
import { AlertController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import firebase from 'firebase';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
	public isGoogleLogin = false;
	public user = null;
	username: string = ""
	password: string = ""
	cpassword: string = ""
	email: string = ""

	constructor(
		public afAuth: AngularFireAuth,
		public afs: AngularFirestore,
		public alertController: AlertController,
		public router: Router,  
		private platform: Platform,
		) { }

	ngOnInit() {
	}

	async presentAlert(title: string, content: string) {
		const alert = await this.alertController.create({
			header: title,
			message: content,
			buttons: ['OK']
		})

		await alert.present()
	}

	async register() {
		const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

		const {email, username, password, cpassword } = this
		if(password !== cpassword) {
			this.presentAlert('Mismatched', "Confirm password and password didn't match!")
		}

		try {
			this.afAuth.createUserWithEmailAndPassword(email , password).then((res:any)=>{
				console.log(res)
				this.afs.collection('users').doc(res.user.uid).set(
					{
					  username:username,
					  date:today.toLocaleDateString()
			   
					}
				   )
				   res.user.sendEmailVerification();
				this.presentAlert('Success', 'You are registered!')
				this.router.navigateByUrl('menu/tabs/home')
			})
            
		

		} catch(error) {
			console.dir(error)
		}
	}
	
}