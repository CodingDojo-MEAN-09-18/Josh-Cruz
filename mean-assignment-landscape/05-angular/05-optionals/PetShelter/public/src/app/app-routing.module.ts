import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { DisplayPetComponent } from './display-pet/display-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'pets', pathMatch: 'full' },
  { path: 'pets', component: HomeComponentComponent },
  { path: 'pets/new', component: AddPetComponent },
  { path: 'pets/:id', pathMatch: 'full', component: DisplayPetComponent },
  { path: 'pets/:id/edit', pathMatch: 'full', component: EditPetComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
