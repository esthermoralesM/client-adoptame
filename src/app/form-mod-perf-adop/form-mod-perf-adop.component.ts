import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { AdoptanteService } from '../shared/adoptante.service';
import { LoginService } from '../shared/login.service';


@Component({
  selector: 'app-form-mod-perf-adop',
  templateUrl: './form-mod-perf-adop.component.html',
  styleUrls: ['./form-mod-perf-adop.component.css']
})
export class FormModPerfAdopComponent implements OnInit {

  public adoptante:Usuario;
  constructor(private servicioAdoptante: AdoptanteService,  private servicioSesion: LoginService, private router:Router, private activatedRoute:ActivatedRoute) {
    this.adoptante=new Usuario(null, "", "", "", "", "", "", "", "", "", "");
   }

  ngOnInit(): void {
    this.servicioAdoptante.getAdoptante(this.servicioSesion.idUsuario)
    .subscribe((data:Usuario[])=>{
      this.adoptante=data[0];
    })
  }


  updateAdoptante(){
    
    let adoptante=new Usuario(this.servicioSesion.idUsuario, this.adoptante.nombre, this.adoptante.apellidos, this.adoptante.fechaNacimiento, this.adoptante.telefono, null, null, this.adoptante.localidad, this.adoptante.direccion, this.adoptante.descripcion, this.adoptante.imagenPerfil)

    for(let propiedad in adoptante){
      if(adoptante[propiedad]==""){
        adoptante[propiedad]=null
      }
    } 

    
this.servicioAdoptante.putAdoptante(adoptante)
.subscribe((data:string)=>{

if(data=="1"){
  alert("Updated correctly");
  this.router.navigate(['/perfil-adoptante', this.servicioSesion.idUsuario])
  

}else{
  alert("No updated")
}
})
  }

}
