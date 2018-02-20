import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


let config_key_name = "config";

@Injectable()
export class ConfigProvider {
  constructor() {
    
  }

  // recuperar dados do localstorage
  getConfigData(): any {
    return localStorage.getItem(config_key_name);

  }

  // gravar os dados do localstorage
  setConfigData(showSlide?: boolean, name?: string, username?: string) { // ?: significa opcionais, não é obrigado a enviar esses parametros
    let config = {
      showSlide: false,
      name: "",
      username: ""
    };

    if(showSlide) {
      config.showSlide = showSlide;
    }

    if(name) {
      config.name = name;
    }

    if(username) {
      config.username = username;
    }

    localStorage.setItem(config_key_name, JSON.stringify(config));
  }
}
