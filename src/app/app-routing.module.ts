import { CreateEmployeeComponent } from './contents-module/components/employees/create-employee/create-employee.component';
import { UserLoginComponent } from './user-module/components/user-login/user-login.component';
import { AdminPrincipalComponent } from './shared-module/components/admin-principal/admin-principal.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
 // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'admin', component: AdminPrincipalComponent },
  { path: 'login', component: UserLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
