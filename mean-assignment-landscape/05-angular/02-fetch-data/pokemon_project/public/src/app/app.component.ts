import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Pokemon APi request';
  constructor(private _httpService: HttpService) {}

  Pokemon = [];
  relatedPokemon = [];

  displayPokemon() {
    this._httpService.getPokemon().subscribe(
      response => {
        this.Pokemon.push(response);
        console.log(this.Pokemon);
      },
      error => console.log(error)
    );
  }

  findRelatedPokemon(url) {
    console.log(url.pokemon);
    this._httpService.getRelatedPokemon(url).subscribe(
      response => {
        this.relatedPokemon.push(response);
        console.log(this.relatedPokemon);
      },
      error => console.log(error)
    );
  }
}
