import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../models/usuario';
import { AdoptanteService } from '../shared/adoptante.service';

@Component({
  selector: 'app-perfil-adoptante',
  templateUrl: './perfil-adoptante.component.html',
  styleUrls: ['./perfil-adoptante.component.css']
})
export class PerfilAdoptanteComponent implements OnInit {

  public adoptante:Usuario;
  constructor(private servicioAdoptante:AdoptanteService, private activatedRoute:ActivatedRoute) { 
    this.adoptante=new Usuario(null, "", "", "", "", "", "", "", "", "", "");
  }

  ngOnInit(): void {

    const params=this.activatedRoute.snapshot.params;
    if(params['id']){

    this.servicioAdoptante.getAdoptante(params['id'])
    .subscribe((data:Usuario[])=>{
      this.adoptante=data[0];
    });

  }
}
}