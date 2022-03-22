import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../models/animal';
import { Protectora } from '../models/protectora';
import { AnimalServicioService } from '../shared/animal-servicio.service';
import { LoginService } from '../shared/login.service';
import { ProtectoraService } from '../shared/protectora.service';

@Component({
  selector: 'app-perfil-protectora',
  templateUrl: './perfil-protectora.component.html',
  styleUrls: ['./perfil-protectora.component.css']
})
export class PerfilProtectoraComponent implements OnInit {

  public protectora:Protectora;
  public animales:Animal[];

  constructor(private servicioProtectora:ProtectoraService, private sesionServicio:LoginService, private servicioAnimProtec:AnimalServicioService, private activatedRoute:ActivatedRoute) {
    this.protectora=new Protectora(null, "", "", "", "", "", "", "", "");
   }

  ngOnInit(): void {

    const params=this.activatedRoute.snapshot.params;

    if(params['id']){

    this.servicioProtectora.getProtectora(params['id'])
    .subscribe((data:Protectora[])=>{
      this.protectora=data[0];
    });

    this.servicioAnimProtec.getAnimalesProtectora(params['id'])
    .subscribe((data:Animal[])=>{
      this.animales=data;
    });
  }
  }
}