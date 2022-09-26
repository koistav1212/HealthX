import { DatePipe } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-moodtracker',
  templateUrl: './moodtracker.page.html',
  styleUrls: ['./moodtracker.page.scss'],
})
export class MoodtrackerPage implements OnInit {
arr:any=[];currenColor:any;currMood:any;user:any={};
  constructor(private alertCntrl:AlertController,private datePipe: DatePipe,private afs:AngularFirestore,private afAuth:AngularFireAuth) { }
  map = new Map<string, Array<string>>([
    ["energetic", ["Energetic", "#03fc3d","../../../assets/images/happy-boy.json"]],
    ["happy", ["Happy","#6ffc03","../../../assets/images/swinging-happy.json"]]	,
    ["mild",["Mild","#e2ed47","../../../assets/images/meditating-monkey.json"]],
    ["disappointed",["Disappointed","#f58751","../../../assets/images/stressed-woman.json"]],
    
    ["angry",["Angry","#f53636","../../../assets/images/angry.json"]]
  ]);
  ngOnInit() {
    
    this.afAuth.authState.subscribe((user:any)=>{
      if(user)
      this.user=user;
      this.afs.collection('users').doc(this.user.uid).collection('moodlog').valueChanges().subscribe((data:any)=>{
        console.log(data)
        this.arr=data
      });
    
    
    })
    
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
