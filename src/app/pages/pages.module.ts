import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule} from '@angular/router' // en ves import { AppRoutingModule } from '../app-routing.module';
import {FormsModule} from '@angular/forms'

//funciones
import { ComponentsModule } from '../components/components.module';
import{ChartsModule} from 'ng2-charts';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from '../shared/shared.module';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProveflorComponent } from './mantenimientos/proveflor/proveflor.component';
import { EspecieComponent } from './mantenimientos/especie/especie.component';
import { VariedadComponent } from './mantenimientos/variedad/variedad.component';





@NgModule({
  declarations: [
    DashboardComponent ,
    ProgressComponent,
    Grafica1Component ,
    PagesComponent,
    AccountSettingComponent,
    PromesasComponent,
    RxjsComponent,
    ProveflorComponent,
    EspecieComponent,
    VariedadComponent
  ],
  exports:[
    DashboardComponent ,
    ProgressComponent,
    Grafica1Component ,
    AccountSettingComponent,
    PagesComponent
  ],

  imports: [
    FormsModule,
    CommonModule, 
    SharedModule,
    RouterModule,
    ComponentsModule
  ]
})
export class PagesModule { }
