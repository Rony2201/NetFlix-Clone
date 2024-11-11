import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { CardsUsersComponent } from './components/cards-users/cards-users.component';
import { CardsComponent } from './components/cards-users/cards/cards.component';
import { HomeComponent } from './pages/home/home.component';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CardsUsersComponent,
    CardsComponent,
    HomeComponent,
    LoadingPageComponent,
    HomeHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
