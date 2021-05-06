import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './Pokemon.list.html',
  styleUrls:['./Pokemon.list.css']
})
export class PokemonList implements OnInit{
  pokemons: any[] = []
  constructor(
   private dataservice:DataService
  ) { }

  ngOnInit(): void{
    this.dataservice.getPokemons()
      .subscribe((response: any) => {
        response.results.forEach((result: { name: string; }) => {
          this.dataservice.getMoreData(result.name)
            .subscribe((response: any) => {
              this.pokemons.push(response);
              console.log(this.pokemons)
            });
        });
      });
  }
}

