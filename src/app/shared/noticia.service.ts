import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private url = "http://localhost:3000/noticias";
  private id:any;
  
  constructor(private http: HttpClient) { }

  public setId(id){
    this.id=id;
  }

  public getId(){
    return this.id;
  }


  public getNoticias(){
    return this.http.get(this.url)
  }

  public getNoticia(id:any)
  {
    let url= `http://localhost:3000/noticias?id=${id}`; 
    return this.http.get(url);
  }

  public getNoticiasProtectora(id:any)
  {
    let url= `http://localhost:3000/noticias?id_Protectora=${id}`; 
    return this.http.get(url);
  }

  public postNoticia(nuevaNoticia:Noticia){
    
  console.log("nueva noticia");
  console.log(nuevaNoticia);
        return this.http.post(this.url, nuevaNoticia)
  
    }

 public putNoticia(modNoticia: Noticia)
    {
     let url = "http://localhost:3000/noticia";
      return this.http.put(url, modNoticia);
    }



 public deleteNoticia(idNoticia:any)
    {
      let data ={"idNoticias": idNoticia}
      let param={
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body : JSON.stringify(data),
        method: "DELETE"
   }
  
      return this.http.delete(this.url, param)
    }
}
