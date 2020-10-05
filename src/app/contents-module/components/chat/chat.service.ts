import { GlobalConstants } from "./../../../common/global-constants";
import { Injectable } from "@angular/core";
import { GeneralServicesService } from "./../../general-services.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ChatService {
  httpOptions = {};
  message = "";

  constructor(
    private http: HttpClient,
    public generalServicesService: GeneralServicesService
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.generalServicesService.getToken(),
      }),
    };
  }

  getUsers(): Observable<any> {
    return this.http.get(GlobalConstants.URL_USER + '/getUsers', this.httpOptions);
  }

  sendMessage(currentUserId, userId, message): Observable<any> {
    return this.http.post(
      GlobalConstants.URL_CHAT + "/sendMessage",
      {
        message: message,
        userSend: currentUserId,
        userReceive: userId,
      },
      this.httpOptions
    );
  }
}
