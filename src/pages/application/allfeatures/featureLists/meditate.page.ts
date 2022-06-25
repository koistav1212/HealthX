import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-meditate',
  templateUrl: './meditate.page.html',
  styleUrls: ['./meditate.page.scss'],
})
export class MeditatePage implements OnInit {
  category:any;
  scrolledDown:boolean=false;  page:string;featuresData:Observable<any[]>;;
  //@ViewChild('drawer',{read: ElementRef}) drawer:ElementRef;  
  @ViewChild('header',{read: ElementRef}) header:ElementRef;
  @ViewChild('contents',{read: ElementRef}) contents:ElementRef; data:any;
  constructor(private afs:AngularFirestore,private router:Router) {
    
    this.category = router.getCurrentNavigation()?.extras.state
    console.log(this.category)
    let page=this.category.category.imagename.toString().toLowerCase().split(" ")[0] 
    this.featuresData=afs.collection('activity').doc(page).collection('data').valueChanges();
   }

  ngOnInit() {
  }
  nav(item:any)
  {
    if(item.type=='mp3')
    this.router.navigate(['../menu/audioplayer'],{state:{item:item}})
    else if(item.type=='json')    
    this.router.navigate(['../menu/featureDetails'],{state:{item:item}})
    else if(item.type=='mp4')
    this.router.navigate(['../menu/videoplayer'],{state:{item:item}})
    

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
