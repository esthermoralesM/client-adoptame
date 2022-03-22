import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalesFelicesComponent } from './finales-felices/finales-felices.component';
import { FormAnyadirAnimalComponent } from './form-anyadir-animal/form-anyadir-animal.component';
import { FormAnyadirNoticiaComponent } from './form-anyadir-noticia/form-anyadir-noticia.component';
import { FormContactanosComponent } from './form-contactanos/form-contactanos.component';
import { FormFinalesFelicesComponent } from './form-finales-felices/form-finales-felices.component';
import { FormModNoticComponent } from './form-mod-notic/form-mod-notic.component';
import { FormModPerfAdopComponent } from './form-mod-perf-adop/form-mod-perf-adop.component';
import { FormModPerfAnimComponent } from './form-mod-perf-anim/form-mod-perf-anim.component';
import { FormModPerfProtecComponent } from './form-mod-perf-protec/form-mod-perf-protec.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaAdopcionesComponent } from './lista-adopciones/lista-adopciones.component';
import { LoginComponent } from './login/login.component';
import { NoticiaDetalleComponent } from './noticia-detalle/noticia-detalle.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PerfilAdoptanteComponent } from './perfil-adoptante/perfil-adoptante.component';
import { PerfilAnimalComponent } from './perfil-animal/perfil-animal.component';
import { PerfilProtectoraComponent } from './perfil-protectora/perfil-protectora.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: "inicio", component: InicioComponent},
  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroComponent},
  {path: "lista-adopciones", component: ListaAdopcionesComponent},
  {path: "perfil-animal/:id", component: PerfilAnimalComponent},
  {path: "noticias", component: NoticiasComponent},
  {path: "noticia-detalle/:id", component: NoticiaDetalleComponent},
  {path: "finales-felices", component: FinalesFelicesComponent},
  {path: "perfil-protectora/:id", component: PerfilProtectoraComponent},
  {path: "perfil-adoptante/:id", component: PerfilAdoptanteComponent},
  {path: "form-protectora", component: FormModPerfProtecComponent},
  {path: "form-adoptante", component: FormModPerfAdopComponent},
  {path: "form-mod-animal", component: FormModPerfAnimComponent},
  {path: "form-mod-notic", component: FormModNoticComponent},
  {path: "form-anyadir-animal", component: FormAnyadirAnimalComponent},
  {path: "form-anyadir-noticia", component: FormAnyadirNoticiaComponent},
  {path: "form-contactanos", component: FormContactanosComponent},
  {path: "form-finales-felices", component: FormFinalesFelicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
