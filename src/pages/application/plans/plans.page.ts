import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.page.html',
  styleUrls: ['./plans.page.scss'],
})
export class PlansPage implements OnInit {

  constructor() { }
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
  slidesData2 = [
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
  ngOnInit() {
  }

}
