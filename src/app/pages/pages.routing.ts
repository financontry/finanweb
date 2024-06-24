//rutas a pages
import { Routes,RouterModule } from "@angular/router"
import { NgModule  } from "@angular/core"
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { PagesComponent } from "./pages/pages.component";
import { AccountSettingComponent } from "./account-setting/account-setting.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";

//manteniminetos
import { ProveflorComponent } from "./mantenimientos/proveflor/proveflor.component";

const routes :Routes=[

   //definir las rutas hijas internamente
  { 
    path:'',
    component: PagesComponent, 
    children:[
        { path:'dashboard', component:DashboardComponent,data:{titulo:'Dashboard'}}, //lugar vacio
        { path:'progress', component: ProgressComponent ,data:{titulo:'Progress'}} ,
        { path:'grafica1', component: Grafica1Component ,data:{titulo:'grafica1'}},
        { path:'account-settings', component: AccountSettingComponent,data:{titulo:'accoun'} },
        { path:'promesas', component: PromesasComponent,data:{titulo:'promesas'} },
        { path:'rxjs', component: RxjsComponent ,data:{titulo:'rxjs'}},

        //mantenimientos
        // el nombre en path debe ser igual an sidebar.service.ts el url
        { path:'proveflor', component: ProveflorComponent ,data:{titulo:'Proveedor de Flor'}},

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
export class PagesRoutingModule{}


