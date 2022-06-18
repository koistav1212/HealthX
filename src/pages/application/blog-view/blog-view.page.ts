import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.page.html',
  styleUrls: ['./blog-view.page.scss'],
})
export class BlogViewPage implements OnInit {
  
  constructor(private router:Router) { }
  item:any={};
 
  ngOnInit() {
    this.item = this.router.getCurrentNavigation()?.extras.state.item
    console.log(this.item)
  }

}
