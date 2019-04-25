import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { UpcomingEventsComponent } from './components/upcoming-events/upcoming-events.component';
import { CatchUpComponent } from './components/catch-up/catch-up.component';
import { LiveComponent } from './components/live/live.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'upcomingEvent', component: UpcomingEventsComponent },
  { path: 'catchUp', component: CatchUpComponent },
  { path: 'live', component: LiveComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
