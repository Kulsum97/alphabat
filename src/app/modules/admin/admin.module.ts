import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashbordsComponent } from './components/admin-dashbords/admin-dashbords.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NewsComponent } from './components/news/news.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminDashbordsComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    NewsComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CarouselModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
