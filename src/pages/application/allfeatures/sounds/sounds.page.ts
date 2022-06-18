import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sounds',
  templateUrl: './sounds.page.html',
  styleUrls: ['./sounds.page.scss'],
})
export class SoundsPage implements OnInit {

  scrolledDown:boolean=false;  page:string;
  //@ViewChild('drawer',{read: ElementRef}) drawer:ElementRef;  
  @ViewChild('header',{read: ElementRef}) header:ElementRef;
  @ViewChild('contents',{read: ElementRef}) contents:ElementRef; data:any;
  constructor() { }

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
