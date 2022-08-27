import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminDashbordsComponent } from './components/admin-dashbords/admin-dashbords.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';


const routes: Routes = [
  {
  path: '' , 
  component: AdminDashbordsComponent,
  children: [

    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'about', component: AboutComponent },
    { path: 'news', component: NewsComponent},
    {path:'',  redirectTo:'/admin/home' ,  pathMatch:'full' },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
