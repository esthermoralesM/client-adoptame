import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/animal';
import { AnimalServicioService } from '../shared/animal-servicio.service';
import {ActivatedRoute, Router } from '@angular/router';
import { Protectora } from '../models/protectora';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-perfil-animal',
  templateUrl: './perfil-animal.component.html',
  styleUrls: ['./perfil-animal.component.css']
})
export class PerfilAnimalComponent implements OnInit {

  public id:number;
  public animal:Animal;
  public protectora:Protectora;
  

  constructor(private servicioAnimal: AnimalServicioService, private activatedRoute:ActivatedRoute, public servicioLogin:LoginService) {
    this.animal=new Animal(null, "", "", "", "", "", "", "", "", null, "");
    this.protectora=new Protectora(null, "", "", "", "", "", "", "", "");
   }

  ngOnInit(): void {

    const params=this.activatedRoute.snapshot.params;
   
    if(params['id']){
  
     this.servicioAnimal.getAnimal(params['id'])
     .subscribe((data:Animal[])=>{
    
       this.animal=data[0];
   
 
   
     })

     this.servicioAnimal.getAnimal(params['id'])
     .subscribe((data:Protectora[])=>{
    
       this.protectora=data[0];
     })
    }

  }

}
