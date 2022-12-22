import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { PokemonData } from 'src/app/models/pokemonData'



@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  private baseURL: string = ''
  private pokeData: PokemonData | any

  constructor(private http: HttpClient) {
    this.baseURL = 'https://pokeapi.co/api/v2/pokemon/'
  }

  getPokemon(pokemonName: string):Observable<PokemonData> {
    this.pokeData = this
                    .http
                    .get<PokemonData>
                    (`${this.baseURL}${pokemonName}`)

    return this.pokeData
  }
}
