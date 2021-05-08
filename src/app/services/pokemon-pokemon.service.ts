import {Injectable}from '@angular/core'
import { Pokemon } from '../models/pokemon.model';

@Injectable({
    providedIn : 'root'
})
export class SelectedPokemonService{
    public _storage : string []=[]
    private _pokemons : Pokemon [] = []
    private _pokemon  : Pokemon |null =null;
    public setPokemon(pokemon : Pokemon){
       this._pokemon = pokemon;
      this._pokemons.push(this._pokemon)

     localStorage.setItem('pokemon', JSON.stringify(this._pokemons));

      // localStorage.setItem("pokemon", JSON.stringify(this._contacts))

    }

    public pokemon():Pokemon | null{
        return this._pokemon;
  }
}
