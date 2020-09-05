import { ContenidoEnvasesYreciclajeComponent } from './web-page/components/contenido-envases-yreciclaje/contenido-envases-yreciclaje.component';
import { PrincipalComponent } from './web-page/components/principal/principal.component';
import { CreateEmployeeComponent } from './contents-module/components/employees/create-employee/create-employee.component';
import { UserLoginComponent } from './user-module/components/user-login/user-login.component';
import { AdminPrincipalComponent } from './shared-module/components/admin-principal/admin-principal.component';
import { AppComponent } from './app.component';
import {InformacionGeneralComponent} from './web-page/components/informacion-general/informacion-general.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'webpage', component: PrincipalComponent},
  { path: 'admin', component: AdminPrincipalComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'envacesReciclaje', component: ContenidoEnvasesYreciclajeComponent},
  { path: 'contenidoGeneral', component: InformacionGeneralComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
