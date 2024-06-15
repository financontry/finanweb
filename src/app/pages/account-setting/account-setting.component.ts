import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrl: './account-setting.component.css'
})
export class AccountSettingComponent implements OnInit{

   
  //public links: NodeListOf<Element>;

  constructor(private settingsService: SettingsService){

  }

  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();

      
  }

  changeTheme( theme: string){
   this.settingsService.changeTheme( theme);

  }
  
}
