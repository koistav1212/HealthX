import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { GestureController, IonHeader } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.page.html',
  styleUrls: ['./medicines.page.scss'],
})
export class MedicinesPage implements OnInit {
  scrolledDown:boolean=false;  page:string;
  //@ViewChild('drawer',{read: ElementRef}) drawer:ElementRef;  
  @ViewChild('header',{read: ElementRef}) header:ElementRef;
  @ViewChild('contents',{read: ElementRef}) contents:ElementRef; data:any;
  constructor(private route: ActivatedRoute,public afs:AngularFirestore, private router:Router) {
    this.route.queryParams.subscribe(params => {
  
      this.data= this.router.getCurrentNavigation().extras.state.activity;
     
    });
  }

  ngOnInit() {
      
   }
  ngAfterViewInit() {
    this.header.nativeElement.style.zindex="0"
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
