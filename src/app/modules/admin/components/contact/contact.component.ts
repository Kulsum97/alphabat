import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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

  icon1="./assets/icon-1.jpg";
  icon2="./assets/icon-2.jpg"
  icon3="./assets/icon-7.jpg"
  icon4="./assets/icon-4.jpg"
  icon5="./assets/icon-5.jpg"
  icon6="./assets/icon-7.jpg"

}
