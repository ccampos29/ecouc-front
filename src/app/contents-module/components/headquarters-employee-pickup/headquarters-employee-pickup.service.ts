import { observable } from 'rxjs';

import { GeneralServicesService } from './../../general-services.service';
import { GlobalConstants } from './../../../common/global-constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeadquartersEmployeePickupService {
  httpOptions = {};
  constructor(private http: HttpClient, public generalServicesService: GeneralServicesService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.generalServicesService.getToken()
      })
    };
   }

  searchHeadquarter(data): Observable<any>{
    return this.http.post(GlobalConstants.URL_CHARTS + '/viewOne',  {user: data.user}, this.httpOptions);
  }

}
