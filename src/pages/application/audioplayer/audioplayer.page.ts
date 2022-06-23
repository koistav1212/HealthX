import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-audioplayer',
  templateUrl: './audioplayer.page.html',
  styleUrls: ['./audioplayer.page.scss'],
})
export class AudioplayerPage implements OnInit {
  @ViewChild('audioOption') audioPlayerRef!: HTMLAudioElement;
  togglePlay=false;currPos=0;arr:Observable<any[]>;
  audioSrc:any;
  constructor(private afs:AngularFirestore,private router:Router) {
    
    this.audioSrc = this.router.getCurrentNavigation()?.extras.state.item
    console.log(this.audioSrc)
  this.arr=this.afs.collection('therapist').valueChanges(); 
   }
  audioList = [];
  ngOnInit(): void {
    this.audioList.push({title:this.audioSrc.imagename,url:this.audioSrc.src,cover:this.audioSrc.imageurl})
    
    this.afs.collection('activity').doc('sleep').collection('data').valueChanges().subscribe((val:any)=>{
      val.forEach((item:any)=>{
        if(item.src!=this.audioList[0].url)
        this.audioList.push({title:item.imagename,url:item.src,cover:item.imageurl});
      })
      
   console.log(this.audioList)
    });
    
  }
  onAudioPlay(){
  }
}