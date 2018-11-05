import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PetService } from '../Pets.service';
import { NgForm } from '@angular/forms';
import { Pet } from '../models/Pet';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
  @Output()
  sendPets: EventEmitter<any> = new EventEmitter<any>();

  Pets: Pet[] = [];
  selectedPet: Pet;

  constructor(
    private petService: PetService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.displayPets();
  }

  displayPets() {
    this.petService.getAllPets().subscribe(
      response =>
        response.forEach(element => {
          this.Pets.push(element);
        }),
      error => console.log('update array error was', error)
    );
  }

  showDescription(pet: Pet): void {
    this.petService.selectedPet = pet;
    console.log(this.selectedPet);
  }
}
