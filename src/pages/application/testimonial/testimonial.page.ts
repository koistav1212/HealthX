import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.page.html',
  styleUrls: ['./testimonial.page.scss'],
})
export class TestimonialPage implements OnInit {

  featuresData:Observable<any[]>;
  scrolledDown:boolean=false;  page:string;
  constructor(public afs:AngularFirestore, private router:Router) { 
    this.featuresData= this.afs.collection('images').doc('featureimages').collection('features').valueChanges();
 
  }

  ngOnInit() {
  }

}
