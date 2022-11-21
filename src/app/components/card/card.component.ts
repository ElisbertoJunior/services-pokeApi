import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  pokemon: PokemonData
  attributesTypes: string[] = ['FIRE', 'ROCK']

  constructor(private service: PokemonService) {
   this.pokemon = {
        id: 0,
        name: '',
        sprites: {
          front_default: '',
        },
        types: []
      }
  }


  ngOnInit(): void {
    this.service.getPokemon('pikachu').subscribe(
      {
        next: (res) => {
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }

          console.log(this.pokemon)

        },
        error: (err) => console.log(err)
      }
    )
  }

}
