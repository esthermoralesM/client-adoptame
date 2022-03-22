import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/animal';
import { AnimalServicioService } from '../shared/animal-servicio.service';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-lista-adopciones',
  templateUrl: './lista-adopciones.component.html',
  styleUrls: ['./lista-adopciones.component.css']
})
export class ListaAdopcionesComponent implements OnInit {

  public animales: Animal[];
  public animal:Animal;
 

  constructor(private servicioAnimal: AnimalServicioService, private sesion: LoginService) {
    this.animal=new Animal(null, "", "", "", "", "", "", "", "", null, "");
   }

  ngOnInit(): void {
    this.mostrarAnimales()
  }

  mostrarAnimales(){
    if(this.sesion.tipo=="protectora"){
      this.servicioAnimal.getAnimalesProtectora(this.sesion.idUsuario)
    .subscribe((data:Animal[])=>{
      this.animales=data;
    })
    
  }else{
 
    this.servicioAnimal.getAnimales()
    .subscribe((data:Animal[])=>{
      this.animales=data;
    })
  }
  }
}