import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdoptanteService {

  private url = "http://localhost:3000/adoptante/registro";

  constructor(private http: HttpClient) { }

  public getAdoptante(id:any)
  {
    let url= `http://localhost:3000/adoptante?id=${id}`; 
    return this.http.get(url);
  }

  postAdoptante(nuevoUsuario: Usuario){
    
     return this.http.post(this.url, nuevoUsuario)
  }


  public putAdoptante(modAdoptante: Usuario)
  {
   let url = "http://localhost:3000/adoptante";
    return this.http.put(url, modAdoptante);
  }
}
