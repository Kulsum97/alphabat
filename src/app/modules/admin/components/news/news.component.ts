import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  

  customOptions: OwlOptions = {
    items:1,
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    autoplaySpeed: 2000,
    smartSpeed: 2000,
    autoplayHoverPause:true,
    navText:['','']
  }

  
}
