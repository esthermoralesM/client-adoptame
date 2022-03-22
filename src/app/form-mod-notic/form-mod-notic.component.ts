import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from '../models/noticia';
import { LoginService } from '../shared/login.service';
import { NoticiaService } from '../shared/noticia.service';

@Component({
  selector: 'app-form-mod-notic',
  templateUrl: './form-mod-notic.component.html',
  styleUrls: ['./form-mod-notic.component.css']
})
export class FormModNoticComponent implements OnInit {

  public noticia:Noticia;
  constructor(public servicioNoticia: NoticiaService, public servicioLogin: LoginService, private router:Router) { 
    this.noticia=new Noticia(null, "", "", "", "", "", "", "", null);
  }

  ngOnInit(): void {
  }


  updateNoticia(){
let noticia=new Noticia(this.servicioNoticia.getId(), this.noticia.titulo, this.noticia.categoria, this.noticia.prioridad,
this.noticia.fecha_publicacion, this.noticia.titular, this.noticia.descripcion, this.noticia.imagen, this.servicioLogin.idUsuario);


console.log("noticia sin this");
console.log(noticia.titulo);
console.log(this.servicioNoticia.getId());
console.log("noticia con this");
console.log(this.noticia.titulo);


for(let propiedad in noticia){
  if(noticia[propiedad]==""){
    noticia[propiedad]=null
  }
} 

this.servicioNoticia.putNoticia(noticia)
.subscribe((data:string)=>{

if(data=="1"){
  alert("Updated correctly");
  this.router.navigate(['/noticias']);

}else{
  alert("No updated")
}
})
}

}


