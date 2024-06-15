import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

//@ts-ignore
declare function customInitFunctions(): void;


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent implements OnInit{

  
  
  constructor( private settingsService: SettingsService ){}
  
  ngOnInit(): void {

    customInitFunctions();
      
  }

}
