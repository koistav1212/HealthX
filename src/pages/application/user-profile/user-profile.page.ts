import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/pages/dataModels/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  user:any={};userData:any={};
  constructor(private router:Router,public afAuth: AngularFireAuth,public afs:AngularFirestore) { }

  ngOnInit() {
    this.afAuth.authState.subscribe((user:any)=>{
      if(user)
      this.user=user;
      this.userData=this.getVendorDetailsById().subscribe((data:any)=>{
        this.userData=data
      })
    
    })
    //this.afs.collection('users').doc(this.user.uid).get().subscribe((data:any)=>{  })

 
  }
  getVendorDetailsById(): Observable<User> {
    return this.afs.collection("users").doc(this.user.uid).get().pipe(map(docSnapshot => {
       const data = JSON.parse(JSON.stringify(docSnapshot.data()));
       return data as User;
       }));
     }
  navPlans()
  {
    this.router.navigate(['menu/plans'])
  }
}
