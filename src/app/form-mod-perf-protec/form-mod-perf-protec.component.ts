import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Protectora } from '../models/protectora';
import { LoginService } from '../shared/login.service';
import { ProtectoraService } from '../shared/protectora.service';

@Component({
  selector: 'app-form-mod-perf-protec',
  templateUrl: './form-mod-perf-protec.component.html',
  styleUrls: ['./form-mod-perf-protec.component.css']
})
export class FormModPerfProtecComponent implements OnInit {

  public protectora:Protectora;

  constructor(private servicioProtectora:ProtectoraService, private servicioSesion: LoginService, private router:Router, private activatedRoute:ActivatedRoute) { 
    this.protectora=new Protectora(null, "", "", "", "", "", "", "", "");
  }

  ngOnInit(): void {

    this.servicioProtectora.getProtectora(this.servicioSesion.idUsuario)
    .subscribe((data:Protectora[])=>{
      this.protectora=data[0];
    })
  }


  updateProtectora(){

    let protectora=new Protectora(this.servicioSesion.idUsuario, this.protectora.nombreProtectora, this.protectora.direccion, this.protectora.localidad, null, null, this.protectora.telefono, this.protectora.descripcion, this.protectora.imagen);
  
    for(let propiedad in protectora){
      if(protectora[propiedad]==""){
        protectora[propiedad]=null
      }
    } 
  
    this.servicioProtectora.putProtectora(protectora)
    .subscribe((data:string)=>{

    if(data=="1"){
      alert("Updated correctly");
      this.router.navigate(['/perfil-protectora', this.servicioSesion.idUsuario])
      

    }else{
      alert("No updated")
    }
    })
      }

}
