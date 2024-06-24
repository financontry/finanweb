import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  // crear un menu
  //
  menu: any[] =[
    {
      titulo:'Principal',
      icono: '"mdi mdi-gauge',
      submenu: [
        { titulo: 'Principal',url:'/' },
        { titulo: 'ProgressBar',url:'/progress' },
        { titulo: 'Graficas',url:'/grafica1' },
        { titulo: 'Promesas',url:'/promesas' },
        { titulo: 'Rxjs',url:'/rxjs' },

      ]
    },

    // Inventario Flor
    { 
      titulo:'Inventario Flor',
      icono: '"mdi mdi-gauge',
      submenu: [
        { titulo: 'Proveedor Flor',url:'/proveflor' },
        { titulo: 'Bloque',url:'/bloque' },
        { titulo: 'Especie',url:'/especie' },
        { titulo: 'Variedad',url:'/grvariedad' },
        { titulo: 'Grado',url:'/grado' },
        { titulo: 'Corte',url:'/corte' },

      ]
    },
    //

// prod Flor
{
  titulo:'Produccion Flor',
  icono: '"mdi mdi-gauge',
  submenu: [
    { titulo: 'Mantenimiento', 
      submenu:[
       { titulo: 'Bloque ',url:'/bloque' },
       { titulo: 'Bloque Variedad',url:'/bloquevard' },
      ]

    },
     
  ]
},

  ]


  constructor() { }
}
