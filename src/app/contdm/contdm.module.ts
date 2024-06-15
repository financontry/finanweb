import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router'

import { ActividadComponent } from './datmae/actividad/actividad.component';
import { CuentaComponent } from './datmae/cuenta/cuenta.component';
import { EjercicioComponent } from './datmae/ejercicio/ejercicio.component';
import { SharedModule } from '../shared/shared.module';
import { ContdmComponent } from './contdm/contdm.component';




@NgModule({
  declarations: [
    ActividadComponent,
    CuentaComponent,
    EjercicioComponent,
    ContdmComponent
    
  ],
  exports:[
    ActividadComponent,
    CuentaComponent,
    EjercicioComponent
        
  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class ContdmModule { }
