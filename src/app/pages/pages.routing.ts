//rutas a pages
import { Routes,RouterModule } from "@angular/router"
import { NgModule  } from "@angular/core"
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { PagesComponent } from "./pages/pages.component";
import { AccountSettingComponent } from "./account-setting/account-setting.component";

const routes :Routes=[

   //definir las rutas hijas internamente
  { 
    path:'',
    component: PagesComponent,
    children:[
        { path:'dashboard', component:DashboardComponent}, //lugar vacio
        { path:'progress', component: ProgressComponent } ,
        { path:'grafica1', component: Grafica1Component },
        { path:'account-settings', component: AccountSettingComponent },
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


