import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlLogin = "http://localhost:3000/login";
  private idLogin:number;
  public tipo:string;
  public idUsuario:number;

  constructor(private http: HttpClient) { }


  public postLogin(login: Login){
    return this.http.post(this.urlLogin, login);
  }

  public saveIDLogin(id: number){
    this.idLogin = id;
  }

  public saveData(data: Login){
    if(data.id_adoptante == null){
      this.tipo = "protectora";
      this.idUsuario = data.id_protectora;
    }
    else {
      this.tipo = "adoptante";
      this.idUsuario = data.id_adoptante;
    }
  }


  clearSesion(){
    this.tipo = null;
    this.idUsuario = null;
  }

}
