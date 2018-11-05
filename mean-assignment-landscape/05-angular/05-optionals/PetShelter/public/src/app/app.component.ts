import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PetService } from './Pets.service';
import { NgForm } from '@angular/forms';
import { Pet } from './models/Pet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pageTitle = 'Pet Shelter';


  updateClicked = false;
  alert = '';
  constructor(
    private petService: PetService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
   }





  showPetUpdateForm() {
    this.updateClicked = true;
    console.log(this.updateClicked);
  }

}
