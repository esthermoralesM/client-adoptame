import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalServicioService {

  private url = "http://localhost:3000/animales";
  private id:any;

  constructor(private http: HttpClient) { }


  public getAnimales(){
    return this.http.get(this.url)
  }

  public getAnimal(id:any)
  {
    let url= `http://localhost:3000/animales?id=${id}`; 
    return this.http.get(url);
  }

  public getAnimalesProtectora(id:any)
  {
    let url= `http://localhost:3000/animales?idProtectora=${id}`; 
    return this.http.get(url);
  }

  public setId(id){
    this.id=id;
  }

  public getId(){
    return this.id;
  }

  public postAnimal(nuevoAnimal:Animal){
     let  url = "http://localhost:3000/animal";
      return this.http.post(url, nuevoAnimal)

  }

  public putAnimal(modAnimal: Animal)
  {
   let url = "http://localhost:3000/animal";
    return this.http.put(url, modAnimal);
  }
}
