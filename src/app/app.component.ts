import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medicalApp';

  constructor(private router: Router) {
    this.verificar();
  }

  private verificar() {
    if (sessionStorage.getItem('credentials') === 'null' || sessionStorage.getItem('credentials') == null) {
      //this.router.navigateByUrl('/login');
      this.router.navigateByUrl('/webpage');
    }
    else {
      this.router.navigateByUrl('/admin');
    }
  }


}
