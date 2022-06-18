import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, Platform, ModalController, GestureController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import {CreatePostModalPage} from 'src/pages/application/create-post-modal/create-post-modal.page';

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {
  posts:any;
  scrolledDown:boolean=false;  
  @ViewChild('drawer',{read: ElementRef}) drawer:ElementRef;  
  @ViewChild('contents',{read: ElementRef}) contents:ElementRef;  
  //photoUrl= firebase.auth().currentUser.photoURL;
  constructor( public platform:Platform, public router:Router,private auth: AngularFireAuth,
    private angularfs: AngularFirestore, private modalCtrl: ModalController, private gestureCntrl:GestureController) {
    this.platform.backButton.subscribeWithPriority(10,()=>
     {
       this.router.navigateByUrl('menu/tabs/home')
     })
      }

      async openModal() {
        const modal = await this.modalCtrl.create({
          component: CreatePostModalPage 
        })
        return await modal.present();
      }

  // Fetches all the posts when screen is loaded first
  ngOnInit() {
    this.angularfs.collection('posts').valueChanges().subscribe(res => {
      console.log(res)
      let temp = [];
      res.forEach(post=> {
        temp.push({post})
      })
      this.posts = temp;
      console.log(temp);
    })
  }

  @ViewChild(IonContent) content: IonContent;
  class = '';


  toolbar = ''; calenderVisible:Boolean=false;
  async ngAfterViewInit()
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
  }
  
  Scroll(e) {
    const contents= this.contents.nativeElement;
    if (e.detail.scrollTop >= 100) {
      this.toolbar = 'shrink';  
      contents.style.transition ='.25s ease-in-out';
    contents.style.transform = `translateY(-7%)`;
    console.log(e.detail.scrollTop);
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
    console.log(this.scrolledDown)
  }

}
