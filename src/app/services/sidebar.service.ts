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

      ]
    }
  ];
  
  //
  constructor() { }
}
