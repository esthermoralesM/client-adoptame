import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public id_login: number;
  public sesion: Login;

  constructor(private loginServicio:LoginService, private router: Router) { }

  ngOnInit(): void {
  }



  login(email:string, password:string){
    let login=new Login(null, null, null, email, password);

    this.loginServicio.postLogin(login)
    .subscribe((data:any)=>{
      if(data.mensaje=="correcto"){
        this.id_login=data.respuesta[0].id_login;
        this.loginServicio.saveIDLogin(this.id_login);
        this.sesion=data.respuesta[0];
        this.loginServicio.saveData(this.sesion);

        if(this.sesion.id_adoptante != null){
          this.router.navigate(['lista-adopciones']);
        }

        if(this.sesion.id_protectora != null){
          this.router.navigate(['perfil-protectora', this.loginServicio.idUsuario]);
        }
        alert("Se ha logueado correctamente");
      }

      else {
        alert("Ha ocurrido un error al intentar loguearse, compruebe su correo electrónico y contraseña");
      }
    })
  }
}