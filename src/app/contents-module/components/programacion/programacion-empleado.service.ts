import { GeneralServicesService } from './../../general-services.service';
import { GlobalConstants } from './../../../common/global-constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProgramacionEmpleadoService {

  httpOptions = {};

  constructor(private http: HttpClient, public generalServicesService: GeneralServicesService
    ) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.generalServicesService.getToken()
        })
      };
  }

  iniciarListaUsuarios(): Observable<any> {
    console.log("entro a servicio iniciar listas");
    return this.http.get(GlobalConstants.URL_USER + '/viewAll', this.httpOptions);
  }

  iniciarListaFacultadXsede(): Observable<any> {
    console.log("entro a servicio iniciar listas");
    return this.http.get(GlobalConstants.URL_FACULTAD_POR_SEDE + '/viewAll', this.httpOptions);
  }
  crearProgramacionDia(programacionUsuario): Observable<any> {
    return this.http.post(GlobalConstants.URL_PROGRAMACION_USUARIO + '/create',
    {
      dia: programacionUsuario.dia,
      horaIni: programacionUsuario.horaIni,
      horaFin: programacionUsuario.horaFin,
      user: programacionUsuario.user,
      facultadXsede: programacionUsuario.facultadXsede
    },
    this.httpOptions );
  }

  visualizarProgramacionXempleado(userId): Observable<any> {
    return this.http.post(GlobalConstants.URL_PROGRAMACION_USUARIO + '/viewAllOne',
    {
      user: userId
    }, this.httpOptions);
  }
}
