import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MoodtrackerPage } from '../moodtracker/moodtracker.page';

@Component({
  selector: 'app-mood-detail',
  templateUrl: './mood-detail.page.html',
  styleUrls: ['./mood-detail.page.scss'],
})
export class MoodDetailPage implements OnInit {

title = "geeksforgeeks-multiSelect";
  
positive = [
  { id: 1, name: "Happy" },
  { id: 2, name: "Proud" },
  { id: 3, name: "Confident" },
  { id: 4, name: "Excited" },
  { id: 5, name: "Peaceful" },
  { id: 6, name: "Inspired" },  
  { id: 7, name: "Refreshed" },
];
negative = [
  { id: 1, name: "Angry" },
  { id: 2, name: "Disappointed" },
  { id: 3, name: "Worried" },
  { id: 4, name: "Lonely" },
  { id: 5, name: "Sad" },
  { id: 6, name: "Nervous" },  
  { id: 7, name: "Upset" },
];

selectedPos = [];selectedNeg=[];
map = new Map<string, Array<string>>([
  ["energetic", ["Energetic", "#03fc3d","../../../assets/images/happy-boy.json"]],
  ["happy", ["Happy","#6ffc03","../../../assets/images/swinging-happy.json"]]	,
  ["mild",["Mild","#e2ed47","../../../assets/images/meditating-monkey.json"]],
  ["disappointed",["Disappointed","#f58751","../../../assets/images/stressed-woman.json"]],
  
  ["angry",["Angry","#f53636","../../../assets/images/angry.json"]]
]);
currenColor:string='';currMood:any;currLottie:any;disabled=true;
 @ViewChild('header')header:ElementRef;gender:any;
 @Input() mood:any; user:any={}
  constructor(private router:Router,private modalCtrl: ModalController,private afs:AngularFirestore,private afAuth:AngularFireAuth) { }

  ngOnInit() {
    this.afAuth.authState.subscribe((user:any)=>{
      if(user)
      this.user=user;
        
    })
    this.currenColor=this.map.get(this.mood)[1];
    this.currMood=this.map.get(this.mood)[0];
    console.log(this.mood)
    this.currLottie=this.map.get(this.mood)[2];
  }
  getChange()
  {
    if(this.selectedNeg.length+ this.selectedPos.length==4)
    this.disabled=false;
    else
    this.disabled=true
  }
  Continue()
  {
    let x= new Date().getTime();
    let res={
      moodName:this.mood,
      Neg:this.selectedNeg,
      Pos:this.selectedPos,
      timestamp:x,
      color:this.currenColor,
    }
   // console.log(res)
    this.afs.collection('users').doc(this.user.uid).collection('moodlog').add(res).then((res1:any)=>{
      console.log(res1)
    })
    this.router.navigate(['menu/moodTracker'],{state:{item:res}})
   
   //this.trackerModal()
    this.dismiss()
  }
  async trackerModal() {

    const modal = await this.modalCtrl.create({
      component: MoodtrackerPage,
     
    })
    return await modal.present();
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
}

