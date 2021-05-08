import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list-componenet';
import { PokemonSelectedCompnent } from './pokemon-selected/pokemon-selected.component';
import { PokemonListItemComponent } from './pokemon-list-item/pokemon-list-item.component';
import { AppRoutnigMudule } from './app-routing.module';
import { ContactCreatePage } from './contact-create/contact-create.page';
import { Header } from './header/header';
import { PokemonPage } from './pkoemons/pokemons.page';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemondetailsComponent } from './pokemondetails/pokemondetails.component'
@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonSelectedCompnent,
    PokemonListItemComponent,
    ContactCreatePage,
    Header,
    PokemonPage,
    ProfileComponent,
    NavbarComponent,
    PokemondetailsComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutnigMudule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
