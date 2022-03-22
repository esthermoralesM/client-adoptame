import { Component, OnInit } from '@angular/core';
import { Protectora } from '../models/protectora';
import { NgForm } from '@angular/forms';
import { ProtectoraService } from '../shared/protectora.service';
import { Usuario } from '../models/usuario';
import { AdoptanteService } from '../shared/adoptante.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public protectora:Protectora;
  public adoptante:Usuario;
  public esAdoptantes:boolean=true;

  constructor(private servivioProtectora:ProtectoraService, private servicioAdoptante: AdoptanteService) { 
    this.protectora=new Protectora(null, "", "", "", "", "", "", "", "");
    this.adoptante=new Usuario(null, "", "", "", null, "", "", "", "", "", "")
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){

    if(this.esAdoptantes){
 
      this.servicioAdoptante.postAdoptante(this.adoptante)
      .subscribe((data:any) =>
      {
    
        if (data.usuario == "adoptante")
          alert("Se ha insertado el usuario correctamente")
        else
          alert("Error al insertar el usuario");

      })

  }else{


 
      this.servivioProtectora.postProtectora(this.protectora)
      .subscribe((data:any) =>
      {

        if (data.usuario == "protectora")
          alert("Se ha insertado la protectora correctamente")
        else
          alert("Error al insertar la protectora");

      })

  }

  }

 public esProtectora(){
    this.esAdoptantes=false;
  }

  public esAdoptante(){
    this.esAdoptantes=true;
  }

}