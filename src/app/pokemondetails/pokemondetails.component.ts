import { Component, OnInit } from '@angular/core';
import { Pokemon  } from '../models/pokemon.model'
import { SelectedPokemonService } from '../services/pokemon-pokemon.service';

@Component({
  selector: 'app-pokemondetails',
  templateUrl: './pokemondetails.component.html',
  styleUrls: ['./pokemondetails.component.css']
})
export class PokemondetailsComponent implements OnInit {
constructor(private readonly selectedPokemonService: SelectedPokemonService) {
  }
    get contact(): Pokemon|null{
        return this.selectedPokemonService.pokemon()
  }
  public getdata() {
  return  JSON.parse(localStorage.getItem('pokemon'));
  }
    public Name() {
   return localStorage.getItem('username');
  }

  ngOnInit(): void {
  }
}
