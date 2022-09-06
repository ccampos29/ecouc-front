import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const URL_API = 'http://104.200.17.179:1337/User/login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

//const headers = new HttpHeaders({'Content-Type':'application/json'});

@Injectable({
  providedIn: 'root'
})
export class ServiceLoginService {

  constructor(private http: HttpClient) {
  }

  Login(credentials): Observable<any> {

    return this.http.post(URL_API, {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);

  }
}
