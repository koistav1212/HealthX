import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, RouterEvent } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/pages/dataModels/User';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
}) 
export class MenuPage implements OnInit {
  userData:any={};
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
title:"Mood Log",
url:'/menu/moodTracker'
  },
  {
    title:'Go Premium',
    url:'/menu/plans'
  },
 

];
selectedPath='';user:any={};
  constructor(private router:Router,public afAuth: AngularFireAuth,public afs:AngularFirestore) { 
    this.router.events.subscribe((event:RouterEvent)=>
    {
      if(event && event.url)
      {
        this.selectedPath =event.url

      }
    });
  }

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
logout()
{
 this.afAuth.signOut();
  this.router.navigateByUrl("getstarted");
}
}
