import { Component} from '@angular/core'
import { Pokemon  } from '../models/pokemon.model'
import { SelectedPokemonService } from '../services/pokemon-pokemon.service';
@Component({
    selector: 'app-pokemon-selected',
    templateUrl:'./pokemon-selected.component.html',
    styleUrls : ['./pokemon-selected.component.css']
})
export class PokemonSelectedCompnent{
  constructor(private readonly selectedPokemonService: SelectedPokemonService) {
  }
    get pokemon(): Pokemon|null{
        return this.selectedPokemonService.pokemon()
  }
  public getdata() {
  return  JSON.parse(localStorage.getItem('pokemon'));
  }
    public Name() {
   return localStorage.getItem('username');
  }

}


