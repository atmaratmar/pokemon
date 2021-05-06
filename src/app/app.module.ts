import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutnigMudule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { LandingPage } from './landin.page/Landing.page';
import { PokemonList } from './Pokemon.list/Pokemon.list';
import { Header } from './header/header';

@NgModule({
  declarations: [
    AppComponent,
    LandingPage,
      PokemonList,
      Header
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutnigMudule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
