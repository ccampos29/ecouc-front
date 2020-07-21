import { ServiceLoginService } from './service-login.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {
  password = '';
  email = '';
  constructor(private router: Router, public serviceLoginService: ServiceLoginService) { }

  ngOnInit(): void {
  }

  // se conecta al servidor por medio de post
  Login(form) {
    this.sendServiceLogin(form.value);
  }

  private sendServiceLogin(form) {

    this.serviceLoginService.Login(form).subscribe( // llama al metodo en la clase service-login y metodo login
      data => {
        //console.log("kasfjñlsdfa",data);
        this.EnterCredentialsInStorage(data)
        .then(
          (data) => {
            this.router.navigateByUrl('/home');
          },
          (err) => {
            alert(err);
          }
        );
      },
      err => {
        console.log('data', err);
        alert(err.error);
        this.password = '';
        this.email = '';
      }
    );
  }

  // metodo asincrono que genera la variable credential con el json(credenciales) que llega del servidor
  private EnterCredentialsInStorage(data){

    return new Promise(function(success, error) {
      if (data) {
        //verificar que efectiviamente sea un token y no otra cosa------------------------------------------------
        sessionStorage.setItem('credentials', JSON.stringify(data.dataLoginSesion));
        return success(true);
      }
      else {
        return error('Hubo un error al encapsular las credenciales provenientes del server');
      }


    });


  }
}
