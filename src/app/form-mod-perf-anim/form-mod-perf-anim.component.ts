import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from '../models/animal';
import { AnimalServicioService } from '../shared/animal-servicio.service';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-form-mod-perf-anim',
  templateUrl: './form-mod-perf-anim.component.html',
  styleUrls: ['./form-mod-perf-anim.component.css']
})
export class FormModPerfAnimComponent implements OnInit {

  public animal:Animal;
  constructor(private servicioAnimal: AnimalServicioService, private servicioLogin:LoginService, private router:Router) { 
    this.animal=new Animal(null, "", "", "", "", "", "", "", "", null, "");
  }

  ngOnInit(): void {

    this.servicioAnimal.getAnimal(this.servicioAnimal.getId())
    .subscribe((data:Animal[])=>{
      this.animal=data[0];
    })
  }


  
  updateAnimal(){

    let animal=new Animal(this.servicioAnimal.getId(), this.animal.nombre, this.animal.raza, this.animal.sexo, this.animal.imagen, this.animal.tipo_animal, this.animal.estado, this.animal.fecha_ingresso, this.animal.descripcion, this.servicioLogin.idUsuario, this.animal.tamanyo);

    for(let propiedad in animal){
      if(animal[propiedad]==""){
        animal[propiedad]=null
      }
  } 

  this.servicioAnimal.putAnimal(animal)
  .subscribe((data:string)=>{

    if(data=="1"){
      alert("Updated correctly");
      this.router.navigate(['/lista-adopciones'])

    }else{
      alert("No updated")
    }
  })
  }
}