import {Injectable} from '@angular/core'
import {HttpClient,HttpErrorResponse} from '@angular/common/http'
import {Pokemon} from '../models/pokemon.model'

@Injectable({
    providedIn: 'root'
})

export class PokemonsService{

  private _pokemon: Pokemon[] = []
    private _error : string='';
    constructor(private readonly http:HttpClient ){
    }
    getPokemons() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=10`);
  }

  //get more data from pokemon
  getMoreData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }
    public Pokemon():Pokemon[]{
        return this._pokemon;
    }
    public error(): string{
        return this._error
    };
}
