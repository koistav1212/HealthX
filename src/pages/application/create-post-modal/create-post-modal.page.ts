import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { GestureController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-post-modal',
  templateUrl: './create-post-modal.page.html',
  styleUrls: ['./create-post-modal.page.scss'],
})
export class CreatePostModalPage implements OnInit {

  scrolledDown:boolean=false;  
  @ViewChild('drawer',{read: ElementRef}) drawer:ElementRef;  
  @ViewChild('contents',{read: ElementRef}) contents:ElementRef;  
  title: string;
  body: string;
  photoUrl= firebase.auth().currentUser.photoURL;
  constructor(private modalCtrl: ModalController,
    private auth: AngularFireAuth,
    private angularfs: AngularFirestore, private gestureCntrl:GestureController) { }

  ngOnInit() {
  }

  _dismiss() {
    this.modalCtrl.dismiss();
  }
  createPost() {
    console.log("Title"+this.title);
    console.log("Body"+this.body);
    this.angularfs.collection('posts').add({
      title: this.title,
      body: this.body,
      createBy: firebase.auth().currentUser.displayName,
      createDate: new Date().toLocaleString(),
      lastUpdated: new Date().toLocaleString(),
      photoUrl: this.photoUrl
    })
    this.modalCtrl.dismiss();
  }
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
