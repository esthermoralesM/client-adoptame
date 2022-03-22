import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Noticia } from '../models/noticia';
import { LoginService } from '../shared/login.service';
import { NoticiaService } from '../shared/noticia.service';

@Component({
  selector: 'app-form-anyadir-noticia',
  templateUrl: './form-anyadir-noticia.component.html',
  styleUrls: ['./form-anyadir-noticia.component.css']
})
export class FormAnyadirNoticiaComponent implements OnInit {

  public noticia:Noticia;

  constructor(public servicioNoticias: NoticiaService, public loginServicio: LoginService) { 
    this.noticia=new Noticia(null, "", "", "", "", "", "", "", null);
  }

  ngOnInit(): void {
  }


  onSubmit(form: NgForm){
    this.noticia.id_Protectora=this.loginServicio.idUsuario;
    this.servicioNoticias.postNoticia(this.noticia)
    .subscribe((data:string) =>
    {
      if (data != "-1"){
        alert("Se ha insertado la noticia con id: " + data);
      }
      else
        alert("Error al insertar la noticia");
    })
  }
}