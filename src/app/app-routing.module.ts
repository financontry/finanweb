// RUtas de las paginas
import { NgModule } from '@angular/core';
import  { Route, RouterModule, Routes } from '@angular/router';

//Modulos
import { PagesRoutingModule } from './pages/pages.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ContdmRoutingModule } from './contdm/contdm.routing';
import { AuthRoutingModule } from './auth/auth.routing';



//rutas de la aplicacion de las paginas
const routes: Routes=[
  //van a estar todas las rutas protegidas
  
 // { path:'dashboard', component:DashboardComponent},  se encuentra pagesrouting
 // { path:'auth', component:ProgressComponent}, authrouting
 // { path:'grafica1', component:Grafica1Component},
  
 { path:'',redirectTo: '/dashboard',pathMatch:'full'}, 
 //cuando no existe esa ruta
  { path:'**',component: NopagefoundComponent},

]
;

@NgModule({
  //van los hijos
  imports: [
    //RUTAS PRINCIPALE
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    ContdmRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
