import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent {
  
  progreso1: number= 25;
  progreso2: number= 50;
  
  cambioValorHijo(valor:number){
    console.log('hey canbio',valor);

  }
  
}
