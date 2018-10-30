import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getPokemon();
  }
  getPokemon() {
    const pokemon = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    return pokemon;
}
  getRelatedPokemon(url) {
    const ability = this._http.get(url);
    return ability;
}
}
