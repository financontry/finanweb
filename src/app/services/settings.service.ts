import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');

  constructor() { 
    const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    //href="./assets/css/colors/default-dark.css"
    //const url =` ./assets/css/colors/${ theme }.css`;
    this.linkTheme?.setAttribute('href',url);
  }

  changeTheme( theme: string){
   
    const url =` ./assets/css/colors/${ theme }.css`;
    this.linkTheme?.setAttribute('href',url);
    //graba localmente
    localStorage.setItem('theme',url);
    this.checkCurrentTheme();
     
   }

   checkCurrentTheme(){

    const links = document.querySelectorAll('.selector');

       links.forEach( elem =>{
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl =` ./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');
      // si getAttribute('href') = ` ./assets/css/colors/${ btnTheme }.css`; a espo se le pone la clase
      if (btnThemeUrl === currentTheme){
        //añadir la clase
        elem.classList.add('working');

      }

    });
  }

 
}
