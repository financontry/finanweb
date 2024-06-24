import { Component, OnDestroy } from '@angular/core';
import { Observable, retry,interval, take, map ,filter, Subscription} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent implements OnDestroy{
  

  public intervalSubs: Subscription;

  constructor(){


    
/*
    this.retornaObservable().pipe(
      retry (1)
    )
    .subscribe(
      valor=> console.log('subs:', valor),
      error => console.warn('Error',error),
      () => console.info('obs terminado')
    );

    */
   this.intervalSubs= this.retornaIntervalo()
   .subscribe(
    (valor)=> console.log(valor)
   )

  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }
 
  retornaIntervalo(): Observable <number>{
    return  interval(500)
              .pipe(
                take(10),
                 map( valor => valor +1),
                 filter(valor =>(valor % 2 ===0) ? true : false),
                
                 
               )
  }



  retornaObservable(): Observable<number>{

    let i= -1;

    // $ si necesito almacenar
    const obs$ = new Observable <number>(observer =>{
      
      
      const intervalo = setInterval(() =>{
        
        i++;
        observer.next(i);
        
        // acabar con el obser
        if (i ==4){
          //cabncvelar intervalos en java
          clearInterval (intervalo);
          observer.complete();
        }

        if (i===2) {
          observer.error('i llego al valor de 2');

        }

      },1000)
    });  
    
    return obs$;
  }

}
