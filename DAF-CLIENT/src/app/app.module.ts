import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientsPicComponent } from './pages/home/clients-pic/clients-pic.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { AuthHeaderIneterceptor } from './http-interceptors/auth-header-interceptor';
import { BlogCarouselComponent } from './pages/home/blog-carousel/blog-carousel.component';
import { BlogDetailComponent } from './pages/home/blog-carousel/blog-detail/blog-detail.component';
import { TeamsComponent } from './teams/teams.component';
import { ProjectsComponent } from './projects/projects.component';
import { TotalCountsComponent } from './total-counts/total-counts.component';
import { ServicesComponent } from './services/services.component';
import { QuestionsComponent } from './questions/questions.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WorksComponent } from './works/works.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Other routes
  { path: 'contact', component: ContactUsComponent },
  {path: 'home', component:HomeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ClientsPicComponent,
    SpinnerComponent,
    BlogCarouselComponent,
    BlogDetailComponent,
    TeamsComponent,
    ProjectsComponent,
    TotalCountsComponent,
    ServicesComponent,
    QuestionsComponent,
    AboutUsComponent,
    WorksComponent,
    ContactUsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    [RouterModule.forRoot(routes)],
  
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHeaderIneterceptor,
    multi: true,
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
