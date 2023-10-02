import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogDetailComponent } from './pages/home/blog-carousel/blog-detail/blog-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '',  component: HomeComponent},
  { path :"blog/:id",component:BlogDetailComponent},
  { path: 'contact', component: ContactUsComponent },
  {path: 'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
