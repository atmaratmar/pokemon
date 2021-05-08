import {Component, OnInit} from '@angular/core'
import { Pokemon } from '../models/pokemon.model';
import { PokemonsService } from '../services/pokemon.service';
import { SelectedPokemonService } from '../services/pokemon-pokemon.service';
import { Router } from '@angular/router';
@Component({
    selector:'app-pokemon-list',
    templateUrl:'./pokemon-list-componenet.html',
    styleUrls:['./pokemon-list-componenet.css']
})
export class PokemonListComponent implements OnInit{
  private _pokemons: Pokemon[] = []
  page = 1;
  totalpokemons : number
    private _error : string='';
    constructor(private readonly pokemontService: PokemonsService,
        private readonly selectedPokemonService: SelectedPokemonService
        ) {

  }

     ngOnInit(): void{
    this.pokemontService.getPokemons()
      .subscribe((response: any) => {
        this.totalpokemons = response.count;
        response.results.forEach((result: { name: string; }) => {
          this.pokemontService.getMoreData(result.name)
            .subscribe((response: any) => {
              this._pokemons.push(response);
              console.log(this._pokemons)
            });
        });
      });
  }


    get pokemons(): Pokemon[]{
        return this._pokemons
    }
    handleContactClick(pokemon : Pokemon):void{
      this.selectedPokemonService.setPokemon(pokemon)
  }

}
