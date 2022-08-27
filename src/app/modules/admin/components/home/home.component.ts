import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  
  //Images Section//
  image1 = "./assets/bg-1.png";
  image2 = "./assets/bg-2.png";
  image3 = "./assets/bg-3.png";
  image4 = "./assets/bg-4.png";
  image5 = "./assets/bg-6.png";
  image6 = "./assets/bg-7.png";

  img1 = "./assets/img-1.jpg";
  img2 = "./assets/img-2.jpg";
  img3 = "./assets/img-3.jpg";
  img4 = "./assets/img-4.jpg";
  img5 = "./assets/img-5.jpg";
  img6 = "./assets/img-6.jpg";
  imgs1 = "./assets/imgs-6.jpg";
  imgs2 = "./assets/imgs-7.jpg";
  imgs3 = "./assets/imgs-8.jpg";
  imgs4 = "./assets/imgs-5.jpg";
  imgs5 = "./assets/imgs-4.jpg";
  imgs6 = "./assets/imgs-3.jpg";
  new1 = "./assets/news-1.jpg";
  new2 = "./assets/news-2.jpg";
  new3 = "./assets/news-3.jpg";
  new4 = "./assets/news-2.jpg";
}
