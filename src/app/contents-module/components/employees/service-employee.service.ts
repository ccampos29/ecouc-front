import { GeneralServicesService } from './../../general-services.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const URL_USER = 'http://127.0.0.1:1337/User'; 
const URL_EXTEND_USER_EMPLOYEE = 'http://127.0.0.1:1337/ExtendsUserEmployee';

@Injectable({
  providedIn: 'root'
})
export class ServiceEmployeeService {

  httpOptions = {};

  constructor(private http: HttpClient, public generalServicesService: GeneralServicesService ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.generalServicesService.getToken()
      })
    };
  }
// -------------creacion de usuario---------------
  CreateUser(formUsers, formUserExtendEmployee, formPermissions): Observable<any> {
    console.log("permisos servicio ",formUsers);
    console.log("usuario servicio ",formUserExtendEmployee);
    console.log("extension empleado servicio ",formPermissions);

    return this.http.post(URL_EXTEND_USER_EMPLOYEE + '/create', {
      username: formUsers.username,
      email: formUsers.email,
      password: formUsers.password,
      confirmPassword: formUsers.confirmPassword,
      dataExtensionUser: formUserExtendEmployee,
      permissions: formPermissions
    }, this.httpOptions);

  }
// --------------- fin creacion de usuario-----------------

// -----------------busqueda permisos y cargos---------------
  SearchPermissionAndPositions(): Observable<any> {
    return this.http.get(URL_USER + '/viewPermissionAndPosition', this.httpOptions);
  }
// -------------------fin busqueda de permisos y cargos
// ------------------visualizar todos los usuarios--------------
  SearchUser(): Observable<any> {
    return this.http.get(URL_USER + '/viewAll', this.httpOptions);
  }
// ----------------fin visualizar todos usuarios----------------

// ---------------- visualizar un usuario con sus respectivos permisos---------
  SearchOneUser(userId): Observable<any> {
    return this.http.post(URL_EXTEND_USER_EMPLOYEE + '/viewOne', {
      id: userId
    }, this.httpOptions );
  }
// ----------------fin visualizar un usuario con sus respectivos permisos------
// ------------------------desactivar funcionario registrado------------------
  Deactive(userId): Observable<any> {
    return this.http.post(URL_USER + '/deactivate', {
      id: userId
    }, this.httpOptions);
  }
// ---------------------fin desactivar funcionario resgistrado-----------------------

 UpdateUserAndPermissions(dataUser, dataExtenssion, permission): Observable<any> {
  return this.http.post(URL_EXTEND_USER_EMPLOYEE + '/update', {
    user: dataUser,
    extensionUser: dataExtenssion,
    permissions: permission
   }, this.httpOptions);
 }
}
