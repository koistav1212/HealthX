import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fact-page',
  templateUrl: './fact-page.page.html',
  styleUrls: ['./fact-page.page.scss'],
})
export class FactPagePage implements OnInit {
  featuresData:Observable<any[]>;
  scrolledDown:boolean=false;  page:string;
  constructor(public afs:AngularFirestore, private router:Router) {
    this.featuresData= this.afs.collection('images').doc('featureimages').collection('features').valueChanges();
 
   }

  ngOnInit() {
  }
featureNav(item:any)
{
  this.router.navigate(['menu/blog-view'],{state:{item:item}})
}
}
