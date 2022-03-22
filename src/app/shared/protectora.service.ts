import { Injectable } from '@angular/core';
import { Protectora } from '../models/protectora';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProtectoraService {

  private url = "http://localhost:3000/protectora/registro";

  constructor(private http: HttpClient) { }

      public getProtectora(id:any)
      {
        let url= `http://localhost:3000/protectora?id=${id}`; 
        return this.http.get(url);
      }

      postProtectora(nuevaProtectora: Protectora)
      {
        
        return this.http.post(this.url, nuevaProtectora)
      }


      public putProtectora(modProtectora: Protectora)
      {
      let url = "http://localhost:3000/protectora";
        return this.http.put(url, modProtectora);
      }
}
