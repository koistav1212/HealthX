import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { GestureController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-features',
  templateUrl: './features.page.html',
  styleUrls: ['./features.page.scss'],
})
export class FeaturesPage implements OnInit {
  featuresData:Observable<any[]>;
  scrolledDown:boolean=false;  page:string;
  //@ViewChild('drawer',{read: ElementRef}) drawer:ElementRef;  
  @ViewChild('contents',{read: ElementRef}) contents:ElementRef; 
  constructor(private gestureCntrl:GestureController,public afs:AngularFirestore, private router:Router) {
   
    this.featuresData= this.afs.collection('images').doc('featureimages').collection('features').valueChanges();
   }

  ngOnInit() {
  }
  featureNav(event){
 let page=event.imagename.toString().toLowerCase().split(" ")[0] 
 console.log(event)
 let navigationExtras: NavigationExtras = { state: { activity:event } };
this.router.navigateByUrl(`/menu/${page}`,navigationExtras);
  }
  
  toolbar = ''; calenderVisible:Boolean=false;
  Scroll(e) {
    const contents= this.contents.nativeElement;
    if (e.detail.scrollTop >= 100) {
      this.toolbar = 'shrink';  
      contents.style.transition ='.25s ease-in-out';
    contents.style.transform = `translateY(-7%)`;
    }
    else {
      this.toolbar = '';
     contents.style.transition ='.25s ease-in-out';
     contents.style.transform = `translateY(0%)`;
    } 
    if (e.detail.scrollTop >= 120)
    {
      this.scrolledDown=true
    }
    else{
      this.scrolledDown=false
    }
  }
}
