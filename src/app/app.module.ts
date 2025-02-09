import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

 
//Modulos
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module'; 

//modulos contabilidad
import { ContdmModule } from './contdm/contdm.module';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule,
    ContdmModule,
    AuthModule
  ],
  providers: [],  
  bootstrap: [AppComponent] 
}) 
export class AppModule { }
