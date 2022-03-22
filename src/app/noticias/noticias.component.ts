import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Noticia } from '../models/noticia';
import { LoginService } from '../shared/login.service';
import { NoticiaService } from '../shared/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  public noticia:Noticia;
  public noticias:Noticia[];
  closeResult = '';
  constructor(private modalService: NgbModal, private servicioNoticias: NoticiaService, private sesion: LoginService) { 
    this.noticia=new Noticia(null, "", "", "", "", "", "", "", null);
  }

  ngOnInit(): void {
    this.mostrarNoticias();
  }


  mostrarNoticias(){

  if(this.sesion.tipo=="protectora"){

    this.servicioNoticias.getNoticiasProtectora(this.sesion.idUsuario)
    .subscribe((data:Noticia[])=>{
      this.noticias=data;
     

    })

  }else{

    this.servicioNoticias.getNoticias()
    .subscribe((data:Noticia[])=>{
      this.noticias=data;
    })
  }
  
  }
}