import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { GestureController, IonContent, IonList, IonSlides, Platform } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-therapists',
  templateUrl: './therapists.page.html',
  styleUrls: ['./therapists.page.scss'],
})
export class TherapistsPage implements OnInit {
  arr:Observable<any[]>;bookBtn=false;moreBtn=false;
  @ViewChild('drawer',{read: ElementRef}) drawer:ElementRef;  
  @ViewChild('contents',{read: ElementRef}) contents:ElementRef;  
 currentDoctor:any;
  constructor( public platform:Platform, public router:Router, public afs:AngularFirestore,private gestureCntrl:GestureController) {
    this.platform.backButton.subscribeWithPriority(10,()=>
     {
       this.router.navigateByUrl('menu/tabs/home')
     })
     
  this.arr=this.afs.collection('therapist').valueChanges(); 
      }
  ngOnInit() {
  }
 
  @ViewChild(IonSlides) slider: IonSlides;
  
  scrolledDown:boolean=false;
@ViewChild(IonList ,{read: ElementRef}) list:ElementRef
  segment = 0;
  @ViewChild(IonContent) content1: IonContent;
async segmentChanged(event) {
  if(event==0)
  {
    this.content1.scrollToPoint(0,50 ,500);
  }
  if(event==1)
  {
    this.content1.scrollToPoint(0,40+250*event ,500);
  }
  if(event==2)
  {
    this.content1.scrollToPoint(0,250*event ,500);
  }
  else if(event==3){

this.content1.scrollToPoint(0,250*event -40 ,500);
  }
  else if(event>3){
    event=3
    this.content1.scrollToPoint(0,50 + 250*event ,500);
      }
  
}

toolbar = ''; calenderVisible:Boolean=false;
/*async ngAfterViewInit()
{
const drawer= this.drawer.nativeElement;
const contents= this.contents.nativeElement;
const gesture= await this.gestureCntrl.create({
  el:drawer,
  gestureName:'swipe',
  direction:'y',
  onMove:ev =>{
  if(ev.deltaY< -0) {
  contents.style.transition ='.25s ease-in-out';
  contents.style.transform = `translateY(0%)`;
  this.calenderVisible=true;
  }
  else if(ev.deltaY> 10) {
    
  contents.style.transition ='.25s ease-in-out';
  contents.style.transform = `translateY(75%)`;
  
  }

  }    
   
});
gesture.enable(true)
}*/
bookModal(item:any) {
  this.currentDoctor=item;
  this.bookBtn = !this.bookBtn;
}
moreModal(item:any){
  
  this.currentDoctor=item;
  this.moreBtn=!this.moreBtn
}
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
