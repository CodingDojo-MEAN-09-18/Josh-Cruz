import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm, FormArray, FormsModule } from '@angular/forms';
// import { Component, ViewChild } from '@angular/core';
import { Pet } from '../models/Pet';
import { PetService } from '../Pets.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css'],
})
export class AddPetComponent  {
  @ViewChild('form') addPetForm: NgForm;

//    <{
//   name: string, type: string, description: string,
//   skills: Array<any>
// }>
  petData = {
    'name': '',
    'type': '',
    'description': '',
    'skills': [],
  };
  Pets = [];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private petService: PetService
  ) {}


  onAddPet(form: NgForm) {

    const { value: pet } = form;
    let i = 1;

    this.petData.name = pet.name;
    this.petData.type = pet.type;
    this.petData.description = pet.description;

    while (i <= 3) {
      const skillz = `skill${i}`;
      if (pet.hasOwnProperty(skillz)) {
        this.petData.skills.push({skill: pet[`skill${i}`]});
      }
      i++;
    }
    console.log('new this.petData', this.petData);
    this.petService.createPet(this.petData).subscribe(
        response => {
          console.log('response', response);
          this.goHome();
        },
        error => console.log('error from addpet comp subscribe method', error)
      );



  }

  goHome() {
    this._router.navigate(['/pets']);
  }
}
