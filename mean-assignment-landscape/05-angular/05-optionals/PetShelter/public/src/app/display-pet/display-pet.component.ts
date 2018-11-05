import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Pet } from '../models/Pet';
import { PetService } from '../Pets.service';

@Component({
  selector: 'app-display-pet',
  templateUrl: './display-pet.component.html',
  styleUrls: ['./display-pet.component.css'],
})
export class DisplayPetComponent implements OnInit {
  constructor(
    private petService: PetService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  selectedPet;
  id;
  Pets = [];
   ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log('tshis is param', params);
      this.id = params.id;
      console.log('thisid', this.id);
    });
    this.getPet();
  }

  getPet() {
    this.petService.findPet(this.id).subscribe(
      response => {
        console.log('response was ', response);
        this.selectedPet = response;

      },
      error => console.log(error)
    );
  }

  onAdoptPet() {
    this.petService.deletePet(this.selectedPet).subscribe(
      response => console.log('deleted', response),
      error => console.log(error)
    );
      this.goHome();
  }

  goHome() {
    this._router.navigate(['/pets']);
  }
}
