//rutas a pages
import { Routes,RouterModule } from "@angular/router"
import { NgModule  } from "@angular/core"
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";

const routes :Routes=[

   //definir las rutas hijas internamente
   { path:'register', component:RegisterComponent},
   { path:'login', component:LoginComponent},
   //para el path vacio
   { path:'',redirectTo: '/dashboard' , pathMatch:'full'},
  
    ];

@NgModule(
    {
        imports:[RouterModule.forChild(routes)],
        exports:[RouterModule]
    }
)
export class AuthRoutingModule{}


