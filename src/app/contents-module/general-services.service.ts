import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GeneralServicesService {

  Token = "";

  constructor() {
    this.StractToken(JSON.parse(sessionStorage.getItem('credentials')));
    console.log('ingreso al contructor del servicio general services extrajo el token');
  }


  // ------------------------extracion de token armado de header --------------------
  StractToken(credentials) {
    if (credentials.token) {
      this.Token = JSON.stringify(credentials.token).replace(/\\/g, '').replace(/['"]+/g, '');
      console.log(this.Token);
    }
    else{
      this.Token = null;
      alert('hubo un error en la extraccion del token en session storage');

    }
  }

  public getToken() {
    return this.Token;
  }

}