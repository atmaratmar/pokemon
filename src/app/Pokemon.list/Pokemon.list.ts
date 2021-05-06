import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './Pokemon.list.html',
  styleUrls:['./Pokemon.list.css']
})
export class PokemonList implements OnInit{
  constructor(
   private dataservice:DataService
  ) { }

  ngOnInit(): void{
    this.dataservice.getPokemons()
      .subscribe((res: any) => {
      console.log(res)
    })
  }
}
