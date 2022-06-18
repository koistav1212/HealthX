import { IonTabs } from '@ionic/angular';
import { Component, ContentChild, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
svg1:any[];
  tabsArray:any=[];homeTitle:boolean=true;discoverTitle:boolean=false;
  communityTitle:boolean=false;theraTitle:boolean=false;
  @ViewChild('home',{read: ElementRef}) home:ElementRef;
  @ViewChild('homeSVG',{read: ElementRef}) homeSVG:ElementRef;
  @ViewChild('discoverSVG',{read: ElementRef}) discoverSVG:ElementRef;
  @ViewChild('communitySVG',{read: ElementRef}) communitySVG:ElementRef;
  @ViewChild('theraSVG',{read: ElementRef}) theraSVG:ElementRef;
  @ViewChild('discover',{read: ElementRef}) discover:ElementRef;  
  @ViewChild('community',{read: ElementRef}) community:ElementRef;  
   @ViewChild('therapist',{read: ElementRef}) therepist:ElementRef; 
   @ViewChildren('svg') svg:QueryList<any>;
  @ViewChild('tabs', { static: false }) tabs: IonTabs;
 
  constructor() { 
    this.tabsArray=[
      {
        name:'Home',
        color:'#8ABCE1',
      },
      {
        name:'Discover',
        color:'#CB8AE1',
      },
      {
        name:'Community',
        color:'#F39F3C',
      },
      {
        name:'Therapist',
        color:'#5EBB83',
      }
    ];
    
  }
  ngOnInit() {
  }
 
  setCurrentTab() {
     let svg1=document.getElementsByClassName('cls-1');
    
const home= this.home.nativeElement;
const discover= this.discover.nativeElement;
const community= this.community.nativeElement;
const therepist= this.therepist.nativeElement;

    if( this.tabs.getSelected()=='home'){
    this.homeTitle=true;
this.discoverTitle=false;
this.communityTitle=false
this.theraTitle=false
home.style.width = `auto`; 
home.style.transition =' .25s ease-in-out';
home.style.background = this.tabsArray[0].color;
this.homeSVG.nativeElement.style.display="none";
discover.style.width = `auto`; 
discover.style.transition =' .25s ease-in-out';
discover.style.background = 'transparent';
this.discoverSVG.nativeElement.style.display="block";
community.style.width = `auto`; 
community.style.transition =' .25s ease-in-out';
community.style.background = 'transparent';
this.communitySVG.nativeElement.style.display="block";
therepist.style.width = `auto`; 
therepist.style.transition =' .25s ease-in-out';
therepist.style.background = 'transparent';
this.theraSVG.nativeElement.style.display="block";
this.svg.forEach(svg=> svg.nativeElement.style.stroke=this.tabsArray[0].color);

    }
   else if(this.tabs.getSelected() =='discover')
    {
    this.homeTitle=false;
    this.discoverTitle=true;
    this.communityTitle=false
    this.theraTitle=false
    home.style.width = `auto`; 
    home.style.transition =' .25s ease-in-out';
    home.style.background = 'transparent';
    this.homeSVG.nativeElement.style.display="block";
    
    discover.style.width = `auto`; 
    discover.style.transition =' .25s ease-in-out';
    discover.style.background = '#CB8AE1';
    this.discoverSVG.nativeElement.style.display="none";
    community.style.width = `auto`; 
    community.style.transition =' .25s ease-in-out';
    community.style.background = 'transparent';    
this.communitySVG.nativeElement.style.display="block";
    therepist.style.width = `auto`; 
    therepist.style.transition =' .25s ease-in-out';
    therepist.style.background = 'transparent';
    this.theraSVG.nativeElement.style.display="block";
this.svg.forEach(svg=> svg.nativeElement.style.stroke=this.tabsArray[1].color);
    }
   else if(this.tabs.getSelected() =='community')
    {
    this.homeTitle=false;
    this.discoverTitle=false;
    this.communityTitle=true
    this.theraTitle=false
    
home.style.width = `auto`; 
home.style.transition =' .25s ease-in-out';
home.style.background = 'transparent';
this.homeSVG.nativeElement.style.display="block";

discover.style.width = `auto`; 
discover.style.transition =' .25s ease-in-out';
discover.style.background = 'transparent';
this.discoverSVG.nativeElement.style.display="block";

community.style.width = `auto`; 
community.style.transition =' .25s ease-in-out';
community.style.background = '#F39F3C';
this.communitySVG.nativeElement.style.display="none";
therepist.style.width = `auto`; 
therepist.style.transition =' .25s ease-in-out';
therepist.style.background = 'transparent';
this.theraSVG.nativeElement.style.display="block";
this.svg.forEach(svg=> svg.nativeElement.style.stroke=this.tabsArray[2].color);
    }
    else if(this.tabs.getSelected() =='therapists')
    {
    this.homeTitle=false;
    this.discoverTitle=false;
    this.communityTitle=false
    this.theraTitle=true
    
home.style.width = `auto`; 
home.style.transition =' .25s ease-in-out';
home.style.background = 'transparent';
this.homeSVG.nativeElement.style.display="block";

discover.style.width = `auto`; 
discover.style.transition =' .25s ease-in-out';
discover.style.background = 'transparent';
this.discoverSVG.nativeElement.style.display="block";

community.style.width = `auto`; 
community.style.transition =' .25s ease-in-out';
community.style.background = 'transparent';
this.communitySVG.nativeElement.style.display="block";

therepist.style.width = `auto`; 
therepist.style.transition =' .25s ease-in-out';
therepist.style.background = '#5EBB83';
this.theraSVG.nativeElement.style.display="none";
this.svg.forEach(svg=> svg.nativeElement.style.stroke=this.tabsArray[3].color
  
  );
    }
  }
  
}
