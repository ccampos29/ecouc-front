import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { GeneralServicesService } from './../../general-services.service';
import { GlobalConstants } from './../../../common/global-constants';

import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartsModuleService {
  httpOptions = {};

  constructor(private http: HttpClient, private generalServicesService: GeneralServicesService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.generalServicesService.getToken()
      })
    };
   }


  dataEmployeesCleanliness(): Observable<any> {
    return this.http.get(GlobalConstants.URL_CHARTS + '/viewAll', this.httpOptions);
  }
}
