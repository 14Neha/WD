import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { ComponentsComponent } from './components/components.component';
import { UpcomingEventsComponent } from './components/upcoming-events/upcoming-events.component';
import { CatchUpComponent } from './components/catch-up/catch-up.component';
import { LiveComponent } from './components/live/live.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import {LoginService} from './services/login.service';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MainComponent,
    HomeComponent,
    ComponentsComponent,
    UpcomingEventsComponent,
    CatchUpComponent,
    LiveComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoginService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
