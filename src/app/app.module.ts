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
import { NavMainComponent } from './components/nav-main/nav-main.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardFilmesComponent } from './components/card-filmes/card-filmes.component';
import { FilmesComponent } from './components/card-filmes/filmes/filmes.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CardsUsersComponent,
    CardsComponent,
    HomeComponent,
    LoadingPageComponent,
    HomeHeaderComponent,
    NavMainComponent,
    CardFilmesComponent,
    FilmesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
