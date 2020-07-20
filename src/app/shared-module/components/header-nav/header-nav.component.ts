import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  UserName = "Usuario no Registrado";

  constructor(private router: Router) {
    this.extractUsername();
  }

  ngOnInit(): void {
  }

  private extractUsername() {
    let data = JSON.parse(sessionStorage.getItem('credentials'));
    if (data) {
      this.UserName = data.username;
    }
  }
// metodo  para cerrar sesion deja en null sessionStorage
  LogOut() {
    this.deleteCredentialsStorage()
    .then(
      (data) => {
        this.router.navigateByUrl('/home');
      },
      (err) => {
        alert(err);
      }
    );
  }

  private deleteCredentialsStorage() {
    console.log("entro");
    return new Promise(function(success, error){
      sessionStorage.removeItem('credentials');
      if (localStorage.getItem('credentials') === 'null' || localStorage.getItem('credentials') === null) {
        return success(true);
      }
      return error("Hubo un error al eliminar las credenciales");
    });
  }

}
