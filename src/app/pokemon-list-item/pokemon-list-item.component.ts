import{Component, EventEmitter, Input, Output} from '@angular/core'
import { Pokemon } from '../models/pokemon.model'

@Component({
    selector : 'app-pokemon-list-item',
    templateUrl:'./pokemon-list-item.component.html',
    styleUrls:['./pokemon-list-item.component.css']
})
 export class PokemonListItemComponent{
      @Input() pokemon : Pokemon | undefined;
      @Output() clicked : EventEmitter<Pokemon> = new EventEmitter();
      public onpokemonClicked(): void {
      this.clicked.emit(this.pokemon);

      }
 }
