import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { FooterComponent } from './footer/footer.component';
import { ListaAdopcionesComponent } from './lista-adopciones/lista-adopciones.component';
import { PerfilAnimalComponent } from './perfil-animal/perfil-animal.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoticiaDetalleComponent } from './noticia-detalle/noticia-detalle.component';
import { PerfilProtectoraComponent } from './perfil-protectora/perfil-protectora.component';
import { PerfilAdoptanteComponent } from './perfil-adoptante/perfil-adoptante.component';
import { FormModPerfProtecComponent } from './form-mod-perf-protec/form-mod-perf-protec.component';
import { FormAnyadirAnimalComponent } from './form-anyadir-animal/form-anyadir-animal.component';
import { FormAnyadirNoticiaComponent } from './form-anyadir-noticia/form-anyadir-noticia.component';
import { FormContactanosComponent } from './form-contactanos/form-contactanos.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormFinalesFelicesComponent } from './form-finales-felices/form-finales-felices.component';
import { FormModPerfAdopComponent } from './form-mod-perf-adop/form-mod-perf-adop.component';
import { FinalesFelicesComponent } from './finales-felices/finales-felices.component';
import { FormModPerfAnimComponent } from './form-mod-perf-anim/form-mod-perf-anim.component';
import { FormModNoticComponent } from './form-mod-notic/form-mod-notic.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    InicioComponent,
    MenuLateralComponent,
    FooterComponent,
    ListaAdopcionesComponent,
    PerfilAnimalComponent,
    NoticiasComponent,
    NoticiaDetalleComponent,
    PerfilProtectoraComponent,
    PerfilAdoptanteComponent,
    FormModPerfProtecComponent,
    FormAnyadirAnimalComponent,
    FormAnyadirNoticiaComponent,
    FormContactanosComponent,
    FormFinalesFelicesComponent,
    FormModPerfAdopComponent,
    FinalesFelicesComponent,
    FormModPerfAnimComponent,
    FormModNoticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
