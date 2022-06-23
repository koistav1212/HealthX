import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { GestureController, IonContent, IonSlides, ModalController, Platform } from "@ionic/angular";
import { ActionSheetController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { MoodDetailPage } from '../mood-detail/mood-detail.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  flipped:boolean;mood='';
  scrolledDown:boolean=false;  
  @ViewChild('drawer',{read: ElementRef}) drawer:ElementRef;  
  @ViewChild('contents',{read: ElementRef}) contents:ElementRef; 
  //photoUrl= firebase.auth().currentUser.photoURL;
  @ViewChild('featureImg',{read: ElementRef}) featuresImg:ElementRef; 
  @ViewChild('slides', { static: false }) slides: IonSlides;
  featuresData:Observable<any[]>;slidesData2 = [];slidesData3 = [];currentSlide:any;
  featuresAnim:any[];  
  constructor(public actionsheetCtrl: ActionSheetController  ,public platform:Platform,private modalCtrl:ModalController
     , public router:Router,private gestureCntrl:GestureController,public afs:AngularFirestore) { 
      this.platform.backButton.subscribeWithPriority(-1,()=>
     {
      navigator['app'].exitApp();
     })
     this.featuresData= this.afs.collection('images').doc('featureimages').collection('features').valueChanges();
 
    }
    slideOpts2 = {
      slidesPerView: 1.5,
      freeMode: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }
    }
    slideOpts3 = {
      slidesPerView: 2.5,
      freeMode: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }
    }
    slideOpts4 = {
      slidesPerView: 2,
      freeMode: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }
    }
    public slideOpts = {
      slidesPerView: 2.5,
      spaceBetween:25,     
      centeredSlides: true,
      initialSlide: 2,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      },
      on: {
        beforeInit() {
          const swiper = this;
  
          swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
          swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
  
          swiper.params.watchSlidesProgress = true;
          swiper.originalParams.watchSlidesProgress = true;
        },
        setTranslate() {
          const swiper = this;
          const {
            width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid, $
          } = swiper;
          const params = swiper.params.coverflowEffect;
          const isHorizontal = swiper.isHorizontal();
          const transform$$1 = swiper.translate;
          const center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
          const rotate = isHorizontal ? params.rotate : -params.rotate;
          const translate = params.depth;
          //console.log(center)
          // Each slide offset from center
          for (let i = 0, length = slides.length; i < length; i += 1) {
            const $slideEl = slides.eq(i);
            const slideSize = slidesSizesGrid[i];
            const slideOffset = $slideEl[0].swiperSlideOffset;
            const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;
  
            let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
            let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
            // var rotateZ = 0
            let translateZ = -translate * Math.abs(offsetMultiplier);
  
            let translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
            let translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;
  
            // Fix for ultra small values
            if (Math.abs(translateX) < 0.001) translateX = 0;
            if (Math.abs(translateY) < 0.001) translateY = 0;
            if (Math.abs(translateZ) < 0.001) translateZ = 0;
            if (Math.abs(rotateY) < 0.001) rotateY = 0;
            if (Math.abs(rotateX) < 0.001) rotateX = 0;
  
            const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  
            $slideEl.transform(slideTransform);
            $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
  
          }
  
          // Set correct perspective for IE10
          if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
            const ws = $wrapperEl[0].style;
            ws.perspectiveOrigin = `${center}px 100%`;
          }
        },
        setTransition(duration) {
          const swiper = this;
          swiper.slides
            .transition(duration)
            .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
            .transition(duration);
        }
      }
    }
   ngOnInit() {
    this.featuresAnim=[
      {
        animationurl:'../../../assets/images/breathe.json'
      },
      {
        animationurl:'../../../assets/images/journal.json'
      },
      {
        animationurl:'../../../assets/images/Medicine.json'
      },
      {
        animationurl:'../../../assets/images/meditate.json'
      },
      {
        animationurl:'../../../assets/images/Sleeping.json'
      },
      {
        animationurl:'../../../assets/images/sounds.json'
      },
      {
        animationurl:'../../../assets/images/VisionBoard.json'
      },
    ]
           this.slidesData2 = [
        {
          title: 'Relaxation Technique',
          image: "../../../assets/images/MaskGroup.png",
          description: 'The ionic conference app is a practical preview of the ionic framework in action, and a demonstration of proper code use.'
        },
        {
          title: 'Stop Pill',
          image: "../../../assets/images/online.png",
          description: 'Ionic Framework is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.'
        },
        {
          title: 'Sleep',
          image:"../../../assets/images/vision2.png",
          description: 'Ionic Appflow is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.'
        },
        {
          title: 'Sleep',
          image:"../../../assets/images/vision3.png",
          description: 'Ionic Appflow is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.'
        },
        {
          title: 'Vision Board',
          image:"../../../assets/images/vision3.png",
          description: 'Ionic Appflow is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.'
        }
      ];
      this.slidesData3 = [
        {
          title: 'Riana Roy',
          designation:'Teacher',
          image: "../../../assets/images/feed1.png",
          description: 'The ionic conference app is a practical preview of the ionic framework in action, and a demonstration of proper code use.'
        },
        {
          title: 'Arik Arya',
          designation:'Data Scientist',
          image: "../../../assets/images/online.png",
          description: 'Ionic Framework is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.'
        },
        {
          title: 'Sleep',
          designation:'Data Scientist',
          image:"../../../assets/images/vision2.png",
          description: 'Ionic Appflow is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.'
        },
        {
          title: 'Sleep',designation:'Data Scientist',
          image:"../../../assets/images/vision3.png",
          description: 'Ionic Appflow is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.'
        },
        {
          title: 'Vision Board',designation:'Data Scientist',
          image:"../../../assets/images/vision3.png",
          description: 'Ionic Appflow is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.'
        }
      ];
     
    }
    async slideChanged(slides: IonSlides) {
  
      slides.getActiveIndex().then((index: number) => {
       console.log(index);
      this.currentSlide=index;
      });
    }
    hello()
    {
      this.router.navigateByUrl('menu/features')
    }
    
  flip(item:any){
    this.mood=item;
    if(this.mood!='')
    this.moodModal()
    this.flipped = !this.flipped;
    console.log(this.mood)
  }
  async moodModal() {

    const modal = await this.modalCtrl.create({
      component: MoodDetailPage,
      componentProps: {
        'mood': this.mood,  
      }
    })
    return await modal.present();
  }
    blogView(item:any)
    {
      this.router.navigate(['menu/blogview'],{state:{item:item}})
    }
    reviewView(item:any)
    {
      this.router.navigate(['menu/review'],{state:{item:item}})
    }
    featureNav(event){
     
      this.router.navigate(['menu/featureLists'], { state: { category:event}})
     //this.router.navigateByUrl(`/menu/${page}`,navigationExtras);
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
      //console.log(e.detail.scrollTop);
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
     // console.log(this.scrolledDown)
    }
}
