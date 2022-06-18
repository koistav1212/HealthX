import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.page.html',
  styleUrls: ['./viewall.page.scss'],
})
export class ViewallPage implements OnInit {

  category: any
  featuresData: Observable<any[]>; videosData: Observable<any[]>; healthData: Observable<any[]>;
  assessmentData: Observable<any[]>;
  blogsData: Observable<any[]>; relaxationData: Observable<any[]>;
  scrolledDown: boolean = false; page: string;
  constructor(public afs: AngularFirestore, private router: Router) {
    this.featuresData = this.afs.collection('images').doc('featureimages').collection('features').valueChanges();

  }
  map: any; currentData: any
  ngOnInit() {
    this.category = this.router.getCurrentNavigation()?.extras.state
    this.videosData = this.afs.collection('recommendedvideos').valueChanges();

    this.healthData = this.afs.collection('healthpacks').valueChanges();

    this.assessmentData = this.afs.collection('selfassessment').valueChanges();

    this.blogsData = this.afs.collection('blogs').valueChanges();
//console.log(this.blogsData)
    this.relaxationData = this.afs.collection('relaxationtechnique').valueChanges();
    this.map = new Map<string, any>([["Recomended Videos", this.videosData], ["Health Packs", this.healthData],
    ["Self Assessment", this.assessmentData], ["Blogs", this.blogsData], ["Relaxation Techniques", this.relaxationData]]);
    this.currentData = this.map.get(this.category.category);
  }
  routing(ind:any){
    if(this.category.category=="Recomended Videos")
    this.playVideo(ind)
    if(this.category.category=="Calming Sounds")
    this.playAudio(ind)
    if(this.category.category=="Blogs")
    this.blogView(ind)
  }
  playVideo(item: any) {
    console.log(item)
    this.router.navigate(['../videoplayer'], { state: { item: item } })
  }
  playAudio(item:any)
{
 
  this.router.navigate(['../audioplayer'],{state:{item:item}})

}
blogView(item:any)
{ console.log(item)
  this.router.navigate(['menu/blog-view'],{state:{item:item}})
}
}
