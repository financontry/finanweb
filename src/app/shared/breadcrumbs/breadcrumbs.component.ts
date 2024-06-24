import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, every, filter } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.css'
})

export class BreadcrumbsComponent implements OnDestroy{
  
  public titulo!: string ;
  public tituloSubs$: Subscription ;


   constructor( private router : Router){
    this.tituloSubs$ =this.getArgumentosRuta()    
     .subscribe(({titulo}) =>{
      //console.log(titulo);
      this.titulo= titulo; 
      document.title=`Finan Web - ${titulo}`;
  });

  }


  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }


  getArgumentosRuta(){

    return this.router.events
      .pipe(

        filter<any>(event => event instanceof ActivationEnd),
        filter((event:ActivationEnd) => event.snapshot.firstChild === null ),
        map((event:ActivationEnd) => event.snapshot.data)        

      )

  }


  
}
