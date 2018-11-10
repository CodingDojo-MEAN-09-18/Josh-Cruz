import { Injectable } from '@angular/core' ;
import { HttpClient } from '@angular/common/http';
import { Pet } from './models/Pet';
import { Observable } from 'rxjs';

@Injectable()
export class PetService {

  constructor(private http: HttpClient ) {}
  dataFromChild: any;
  selectedPet;
  // getData(){
  //   return this.dataFromChild
  // }
  // sendData(data){
  //   this.dataFromChild = data;
  // }

  createPet(pet: Pet): Observable <Pet> {
    console.log('from create pet functionn', pet);
    return this.http.post<Pet>('/api/pets', pet);
  }

  getAllPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>('/api/pets');
  }

  updatePet(pet): Observable <Pet> {
    console.log('made it to update pet with' , pet);
    return this.http.put<Pet>(`/api/pets/${pet._id}`, pet);
  }

  findPet(id) {
    console.log ('id from service', id);
    return this.http.get(`/api/pets/${id}`, id);
  }

  deletePet(pet): Observable <Pet> {
    return this.http.delete<Pet>(`/api/pets/${pet._id}`);
  }

}
