import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetService } from './Pets.service';
import { AddPetComponent } from './add-pet/add-pet.component';
import { DisplayPetComponent } from './display-pet/display-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { HomeComponentComponent } from './home-component/home-component.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPetComponent,
    DisplayPetComponent,
    EditPetComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
