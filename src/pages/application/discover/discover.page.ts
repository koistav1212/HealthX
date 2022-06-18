import { Component,ViewChild, OnInit, ElementRef } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { GestureController, IonContent, IonList, IonSlides, Platform } from "@ionic/angular";
import { Observable } from 'rxjs';
enum SheetState{
  Bottom=0,
 Docked=1,
 Top=2
}
@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  slidesData = []; sheetState=SheetState.Docked;
  slideOpts3 = {
    slidesPerView: 2,
    freeMode: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  }
scrollTo=null;arr=[];arr1=[]; videosData:Observable<any[]>;healthData:Observable<any[]>;
assessmentData:Observable<any[]>;
blogsData:Observable<any[]>;relaxationData:Observable<any[]>;
height:any;
  @ViewChild('drawer',{read: ElementRef}) drawer:ElementRef;  
  @ViewChild('contents',{read: ElementRef}) contents:ElementRef;  


constructor( public platform:Platform, public router:Router,public afs:AngularFirestore,
  private plt:Platform,
   private gestureCntrl:GestureController) {
 this.platform.backButton.subscribeWithPriority(10,()=>
  {
    this.router.navigateByUrl('menu/tabs/home')
  })
  this.videosData=this.afs.collection('recommendedvideos').valueChanges(); 
 
    this.healthData=this.afs.collection('healthpacks').valueChanges(); 

    this.assessmentData=this.afs.collection('selfassessment').valueChanges(); 
  
      this.blogsData=this.afs.collection('blogs').valueChanges(); 

    this.relaxationData=this.afs.collection('relaxationtechnique').valueChanges(); 



  this.arr = [  
    {
      title: 'Recomended Videos',
      arrayname:this.videosData
       },
  {
title:'Health Packs',
arrayname:this.healthData
  },
  {
    title:'Self Assessment',
    arrayname:this.assessmentData
  },
  {
    title:'Blogs',
    arrayname:this.blogsData
  },
  {
    title:'Relaxation Techniques',
    arrayname:this.relaxationData
  }

];
   }
   scrolledDown:boolean=false;
  ngOnInit() {
     
  }
  @ViewChild(IonSlides) slider: IonSlides;
  
@ViewChild(IonList ,{read: ElementRef}) list:ElementRef
  segment = 0;
  @ViewChild(IonContent) content1: IonContent;
playVideo(item:any)
{
  this.router.navigate(['../videoplayer'],{state:{item:item}})
}
playAudio(item:any)
{
  this.router.navigate(['../audioplayer'],{state:{item:item}})

}
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
/*
async slideChanged() {
  this.segment = await this.slider.getActiveIndex();
  this.focusSegment(this.segment+1);
}

focusSegment(segmentId) {
  document.getElementById('seg-'+segmentId).scrollIntoView({ 
    behavior: 'smooth',
    block: 'center',
    inline: 'center'
  });
}
scrollListVisible()
{
  let arr=this.list.nativeElement.children;
  let item=arr[this.scrollTo];
  item.scrollIntoView({behavior:'smooth'})
}*/
toolbar = ''; calenderVisible:Boolean=false;
/*async ngAfterViewInit()
{
const drawer= this.drawer.nativeElement;
const contents= this.contents.nativeElement;
const gesture= await this.gestureCntrl.create({
  el:drawer,
  gestureName:'nj',
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
viewall(ind:any)
{  
   this.router.navigate(['../../viewall'], { state: { category:this.arr[ind].title}})
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
