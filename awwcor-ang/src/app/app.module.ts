import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NavbarComponent } from './components/nav-bar/nav-bar.component';
import { OurServiceComponent } from './components/our-service/our-service.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardServiceComponent } from './components/our-service/card-service/card-service.component';
import { CardPortfolioComponent } from './components/portfolio/card-portfolio/card-portfolio.component';
import { ModalNavComponent } from './components/modal-nav/modal-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    NavbarComponent,
    OurServiceComponent,
    AboutUsComponent,
    ContactsComponent,
    FooterComponent,
    SliderComponent,
    CardServiceComponent,
    CardPortfolioComponent,
    ModalNavComponent
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
