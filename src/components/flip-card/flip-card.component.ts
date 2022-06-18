import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss'],
})
export class FlipCardComponent  {

  flipped: boolean = false;

  constructor() {

  }

  flip(){
    this.flipped = !this.flipped;
  }

}
