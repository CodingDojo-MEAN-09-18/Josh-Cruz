import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PetService } from '../Pets.service';
import { NgForm } from '@angular/forms';
import { Pet } from '../models/Pet';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css'],
})
export class EditPetComponent implements OnInit {
   @ViewChild('form') updatePetForm: NgForm;

  constructor(
    private petService: PetService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  selectedPet;
  petData = {
    name: '',
    type: '',
    description: '',
    skills: [],
  };
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

  onUpdatePet(updateForm: NgForm) {
    const { value: pet } = updateForm;

    console.log('form', pet, 'this:', this.selectedPet);
    this.petService.updatePet({ ...this.selectedPet, ...pet }).subscribe(
      response => console.log('response was:', response),
      error => console.log(error)
    );
      this.goHome();

  }

  goHome() {
    this._router.navigate(['/pets']);
  }
}
