import { DatePipe } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-moodtracker',
  templateUrl: './moodtracker.page.html',
  styleUrls: ['./moodtracker.page.scss'],
})
export class MoodtrackerPage implements OnInit {
arr:any=[];currenColor:any;currMood:any;
  constructor(private alertCntrl:AlertController,private datePipe: DatePipe,private afs:AngularFirestore) { }
  map = new Map<string, Array<string>>([
    ["energetic", ["Energetic", "#03fc3d","../../../assets/images/happy-boy.json"]],
    ["happy", ["Happy","#6ffc03","../../../assets/images/swinging-happy.json"]]	,
    ["mild",["Mild","#e2ed47","../../../assets/images/meditating-monkey.json"]],
    ["disappointed",["Disappointed","#f58751","../../../assets/images/stressed-woman.json"]],
    
    ["angry",["Angry","#f53636","../../../assets/images/angry.json"]]
  ]);
  ngOnInit() {
    
    
    //this.currenColor=this.map.get(this.res.moodName)[1];
    //this.currMood=this.map.get(this.res.moodName)[0];
    this.arr= this.afs.collection('moodlog').valueChanges();
   // this.arr.push(this.res)
  }
showAlert()
{
    this.alertCntrl.create({
      header: 'Confirm Reset',
      subHeader: '',
      message: 'Are you sure? you want to leave without safty mask?',
      buttons: [
        {
          text: 'Never',
          handler: () => {
            console.log('I care about humanity');
          }
        },
        {
          text: 'Not Sure',
          handler: () => {
            console.log('Let me think');
          }
        },
        {
          text: 'Yes!',
          handler: () => {
            console.log('Whatever');
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  
}
public getDate(dateSent:any)
  {
    return this.datePipe.transform(new Date(dateSent).getTime(),'EEE dd MMM yyyy')
  }
  public getTime(dateSent:any)
  {
    return this.datePipe.transform(new Date(dateSent).getTime(),'hh:mm a')
  }

}
