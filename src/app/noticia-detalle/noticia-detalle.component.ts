import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from '../models/noticia';
import { NoticiaService } from '../shared/noticia.service';

@Component({
  selector: 'app-noticia-detalle',
  templateUrl: './noticia-detalle.component.html',
  styleUrls: ['./noticia-detalle.component.css']
})
export class NoticiaDetalleComponent implements OnInit {

  public noticia:Noticia;

  constructor(private servicioNoticias: NoticiaService, private activatedRoute:ActivatedRoute, private router:Router) { 
    this.noticia=new Noticia(null, "", "", "", "", "", "", "", null);
  }

  ngOnInit(): void {

    const params=this.activatedRoute.snapshot.params;
    console.log(params);
    if(params['id']){
      this.servicioNoticias.setId(params['id']);

      
     this.servicioNoticias.getNoticia(params['id'])
     .subscribe((data:Noticia[])=>{
    
       this.noticia=data[0];
   
 
   
     })


  }


}
eliminar(idNoticia: any){
  if(idNoticia!=""){
       this.servicioNoticias.deleteNoticia(idNoticia)
       .subscribe((data:string) =>{
 
         if (data == "1"){
             alert("noticia eliminada");
             this.router.navigate(['/noticias']);
                  
         }else
             alert("Error al eliminar la noticia");               
          })
     }
 
   }
}