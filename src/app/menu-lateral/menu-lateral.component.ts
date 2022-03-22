import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  constructor(public sesionServicio:LoginService) { 
    sesionServicio.clearSesion();
  }

  ngOnInit(): void {
    console.log("id usuario:")
    console.log(this.sesionServicio.idUsuario)
  }

}
