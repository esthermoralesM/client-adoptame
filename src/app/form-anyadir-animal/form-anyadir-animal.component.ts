import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/animal';
import { NgForm } from '@angular/forms';
import { AnimalServicioService } from '../shared/animal-servicio.service';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-anyadir-animal',
  templateUrl: './form-anyadir-animal.component.html',
  styleUrls: ['./form-anyadir-animal.component.css']
})
export class FormAnyadirAnimalComponent implements OnInit {

  public animal:Animal;
  constructor(public animalServicio: AnimalServicioService, public loginServicio: LoginService, private router:Router) { 
    this.animal=new Animal(null, "", "", "", "", "", "", "", "", null, "");
  }

  ngOnInit(): void {
  }

  
  onSubmit(form: NgForm){

   this.animal.id_protectora=this.loginServicio.idUsuario;

    this.animalServicio.postAnimal(this.animal)
    .subscribe((data:string) =>
    {

      if (data != "-1"){
        alert("Se ha insertado el animal con id: " + data);
      }
      else
        alert("Error al insertar el animal");

    })
  }
}