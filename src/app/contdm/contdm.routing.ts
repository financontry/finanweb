//rutas a pages
import { Routes,RouterModule } from "@angular/router"
import { NgModule  } from "@angular/core"
import { ActividadComponent } from "./datmae/actividad/actividad.component";
import { CuentaComponent } from "./datmae/cuenta/cuenta.component";
import { EjercicioComponent } from "./datmae/ejercicio/ejercicio.component";
import { ContdmComponent } from "./contdm/contdm.component";

const routes :Routes=[

   //definir las rutas hijas internamente
  { 
    path:'contdm',
    component: ContdmComponent,
    children:[
        { path:'actividad', component:ActividadComponent},
        { path:'cuenta', component:CuentaComponent},
        { path:'ejercicio', component:EjercicioComponent},
        //para el path vacio
        { path:'',redirectTo: '/dashboard' , pathMatch:'full'},
  
    ]
},

];

@NgModule(
    {
        imports:[RouterModule.forChild(routes)],
        exports:[RouterModule]
    }
)
export class ContdmRoutingModule{}


